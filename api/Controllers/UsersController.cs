using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using api.Models;
using api.Services;
using System.Collections.Generic;
using System.Linq;
using System;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;


namespace api.Controllers
{
  //[Authorize]
  [ApiController]
  [Route("[controller]")]
  public class UsersController : ControllerBase
  {
    private IUserService _userService;
    private readonly ProjectsContext _db;

    public UsersController(IUserService userService, ProjectsContext db)
    {
      _userService = userService;
      _db = db;
    }

    // [HttpGet]
    // public ActionResult<IEnumerable<User>> GetAll()
    // {
    //   var users = _db.Users.Include(u => u.Projects).ThenInclude(u => u.Notes).AsQueryable();
    //   return Ok(users);
    // }

    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate([FromBody] User userLoggingIn)
    {
      Console.WriteLine(userLoggingIn.Username);
      Console.WriteLine(userLoggingIn.PasswordHash);
      var user = _userService.Authenticate(userLoggingIn.Username, userLoggingIn.Password);

      if (user == null)
        return BadRequest(new { message = "Username or password is incorrect" });
      return Ok(user);
    }


    [AllowAnonymous]
    [HttpPost("create")]
    public void Create([FromBody] User newUser)
    {
      //hash
      //set password to null
      var passwordHasher = new PasswordHasher<api.Models.User>();
      newUser.PasswordHash = passwordHasher.HashPassword(newUser, newUser.Password);
      newUser.Password = null;
      _db.Users.Add(newUser);
      _db.SaveChanges();
    }

    [Authorize]
    [HttpGet("projects")]
    public ActionResult<User> GetUserProjects()
    {
      var identity = (ClaimsIdentity)User.Identity;
      var foundId = identity.FindFirst(ClaimTypes.Name).Value;
      User foundUser = _db.Users.Include(u => u.Projects).ThenInclude(u => u.Notes).FirstOrDefault(u => u.UserId == Convert.ToInt32(foundId));
      return foundUser;
    }

  }
}