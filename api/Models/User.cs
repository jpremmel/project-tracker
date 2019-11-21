using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Threading.Tasks;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace api.Models
{
  public class User
  {
    public User()
    {
      this.Projects = new HashSet<Project>();
    }
    public int UserId { get; set; }
    public virtual ICollection<Project> Projects { get; set; }
  }
}