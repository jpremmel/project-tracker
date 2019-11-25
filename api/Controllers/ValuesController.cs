using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private ProjectsContext _db;

        public ValuesController(ProjectsContext db)
        {
            _db = db;
        }

        //GET api/{userId}
        [HttpGet]
        public ActionResult<List<Project>> Get(int id)
        {
            var results = _db.Projects.Where(p => p.UserId == id).Include(n => n.Notes).ToList();
            return results;
        }

        //POST
        [HttpPost]
        public void Post([FromBody] Project project)
        {
            _db.Projects.Add(project);
            _db.SaveChanges();
        }
    }
}
