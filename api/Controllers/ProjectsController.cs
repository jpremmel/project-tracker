using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.EntityFrameworkCore;
using api.Services;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;

namespace api.Controllers
{
    [Route("projects")]
    [ApiController]
    public class ProjectsController : ControllerBase
    {
        private IUserService _userService;
        private readonly ProjectsContext _db;

        public ProjectsController(IUserService userService, ProjectsContext db)
        {
            _userService = userService;
            _db = db;
        }

        //GET users/projects --> Get all the projects for the signed-in user
        // [Authorize] ------------------------------------------------> Uncomment this once it's working
        [HttpGet]
        public ActionResult<User> GetUserProjects()
        {
        var identity = (ClaimsIdentity)User.Identity;
        Console.WriteLine(">>>>>>>>>>>>> USERSCONTROLLER - identity: " + identity.ToString());
        var foundId = identity.FindFirst(ClaimTypes.Name).Value; // <--------- SOURCE OF ERROR!
        Console.WriteLine(">>>>>>>>>>>>> USERSCONTROLLER - foundId: " + foundId);
        User foundUser = _db.Users.Include(u => u.Projects).ThenInclude(u => u.Notes).FirstOrDefault(u => u.UserId == Convert.ToInt32(foundId));
        return foundUser;
        }

        //GET /projects
        // [HttpGet]
        // public ActionResult<List<Project>> Get(int id)
        // {
        //     var results = _db.Projects.Where(p => p.UserId == id).Include(n => n.Notes).ToList();
        //     return results;
        // }

        //POST /projects
        [Authorize]
        [HttpPost]
        public void Post([FromBody] Project newProject)
        {
            var identity = (ClaimsIdentity)User.Identity;
            var foundId = identity.FindFirst(ClaimTypes.Name).Value;
            newProject.UserId = Convert.ToInt32(foundId);
            _db.Projects.Add(newProject);
            _db.SaveChanges();
        }
    }
}
