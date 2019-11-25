using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;

namespace api.Models
{
  public class User
  {

    public User()
    {
      this.Projects = new HashSet<Project>();
    }

    public int UserId { get; set; }
    public string Username { get; set; }
    public string PasswordHash { get; set; }
    public string Password { get; set; }
    public string Token { get; set; }
    public virtual ICollection<Project> Projects { get; set; }
  }
}