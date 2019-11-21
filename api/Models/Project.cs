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
  public class Project
  {
    public Project()
    {
      this.Notes = new HashSet<Note>();
    }
    public int ProjectId { get; set; }
    public int UserId { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public virtual ICollection<Note> Notes { get; set; }
  }
}