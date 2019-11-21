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
  public class Note
  {
    public int NoteId { get; set; }
    public int ProjectId { get; set; }
    public string Content { get; set; }
    public string DateTimeString { get; set; }
  }
}