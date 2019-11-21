using Microsoft.EntityFrameworkCore;

namespace api.Models
{
  public class ProjectsContext : DbContext
  {
    public ProjectsContext(DbContextOptions<ProjectsContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Project> Projects { get; set; }
    public DbSet<Note> Notes { get; set; }

    protected override void OnModelCreating(ModelBuilder builder)
    {
      builder.Entity<User>()
          .HasData(
              new User { UserId = 1 },
              new User { UserId = 2}
          );
      builder.Entity<Project>()
          .HasData(
              new Project { ProjectId = 1, UserId = 1, Title = "First Test Project", Description = "This is a description for the first test project. Yay!" },
              new Project { ProjectId = 2, UserId = 1, Title = "Second Test Project", Description = "Here is a description for the second test project." },
              new Project { ProjectId = 3, UserId = 1, Title = "Third Test Project", Description = "And finally, a description for the third test project." },
              new Project { ProjectId = 4, UserId = 2, Title = "User 2's Test Project", Description = "This is the first test project for the second user." },
              new Project { ProjectId = 5, UserId = 2, Title = "Another Test Project", Description = "This is the second test project for the second user." }
          );
      builder.Entity<Note>()
          .HasData(
              new Note { NoteId = 1, ProjectId = 1, Content = "Here is the first note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" },
              new Note { NoteId = 2, ProjectId = 1, Content = "Here is the second note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" },
              new Note { NoteId = 3, ProjectId = 1, Content = "Here is the third note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" },
              new Note { NoteId = 4, ProjectId = 2, Content = "Here is the fourth note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" },
              new Note { NoteId = 5, ProjectId = 5, Content = "Here is the fifth note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" },
              new Note { NoteId = 6, ProjectId = 5, Content = "Here is the last note!", DateTimeString = "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)" }
          );
    }
  }
}