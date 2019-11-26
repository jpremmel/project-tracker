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
              new User { UserId = 1, Username = "test", Password = "test", PasswordHash = "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA=="  }
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
              new Note { NoteId = 1, ProjectId = 1, Content = "Here is the first note!", DateTimeString = "2019-11-22T00:26:28.380Z" },
              new Note { NoteId = 2, ProjectId = 1, Content = "Here is the second note!", DateTimeString = "2019-11-22T00:26:28.380Z" },
              new Note { NoteId = 3, ProjectId = 1, Content = "Here is the third note!", DateTimeString = "2019-11-22T00:26:28.380Z" },
              new Note { NoteId = 4, ProjectId = 2, Content = "Here is the fourth note!", DateTimeString = "2019-11-22T00:26:28.380Z" },
              new Note { NoteId = 5, ProjectId = 5, Content = "Here is the fifth note!", DateTimeString = "2019-11-22T00:26:28.380Z" },
              new Note { NoteId = 6, ProjectId = 5, Content = "Here is the last note!", DateTimeString = "2019-11-22T00:26:28.380Z" }
          );
    }
  }
}