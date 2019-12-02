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
        [Authorize]
        [HttpGet]
        public ActionResult<IEnumerable<Project>> GetUserProjects()
        {
        var identity = (ClaimsIdentity)User.Identity;
        var foundId = identity.FindFirst(ClaimTypes.Name).Value;
        var projects = _db.Projects.Where(p => p.UserId.ToString() == foundId).Include(p => p.Notes).ToList();
        return projects;
        }

        //POST /projects
        [Authorize]
        [HttpPost]
        public ActionResult<int> Post([FromBody] Project newProject)
        {
            var identity = (ClaimsIdentity)User.Identity;
            var foundId = identity.FindFirst(ClaimTypes.Name).Value;
            newProject.UserId = Convert.ToInt32(foundId);
            _db.Projects.Add(newProject);
            _db.SaveChanges();
            var newProjectInDb = _db.Projects
                .Where(p => p.UserId == newProject.UserId)
                .FirstOrDefault(p => p.Title == newProject.Title && p.Description == newProject.Description);
            return newProjectInDb.ProjectId;
        }
    }
}
