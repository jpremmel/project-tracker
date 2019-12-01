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
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;

namespace api.Controllers
{
  [ApiController]
  [Route("users")]
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

    //POST users/authenticate
    [AllowAnonymous]
    [HttpPost("authenticate")]
    public IActionResult Authenticate([FromBody] User userLoggingIn)
    {
      var user = _userService.Authenticate(userLoggingIn.Username, userLoggingIn.Password);
      Console.WriteLine(">>>>>>>>>>>>>>>>>>> AUTHENTICATED USER ID: " + user.UserId);
      Console.WriteLine(">>>>>>>>>>>>>>>>>>> AUTHENTICATED USER: " + user.Username);
      if (user == null)
        return BadRequest(new { message = "Username or password is incorrect" });
      return Ok(user);
    }

    //POST users/create
    [AllowAnonymous]
    [HttpPost("create")]
    public void Create([FromBody] User newUser)
    {
      //only saved hashed password in database
      var passwordHasher = new PasswordHasher<api.Models.User>();
      newUser.PasswordHash = passwordHasher.HashPassword(newUser, newUser.Password);
      newUser.Password = null;
      _db.Users.Add(newUser);
      _db.SaveChanges();
    }
  }
}