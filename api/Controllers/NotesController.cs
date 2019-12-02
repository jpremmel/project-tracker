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
  [Route("notes")]
  [ApiController]
  public class NotesController : ControllerBase
  {
    private IUserService _userService;
    private readonly ProjectsContext _db;

    public NotesController(IUserService userService, ProjectsContext db)
    {
      _userService = userService;
      _db = db;
    }

    //POST /notes
    [Authorize]
    [HttpPost]
    public void Post([FromBody] Note newNote)
    {
      var identity = (ClaimsIdentity)User.Identity;
      var foundId = identity.FindFirst(ClaimTypes.Name).Value;
      _db.Notes.Add(newNote);
      _db.SaveChanges();
    }
  }
}