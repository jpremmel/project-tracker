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

    //SEED DATA
    // protected override void OnModelCreating(ModelBuilder builder)
    // {
    //   builder.Entity<Park>()
    //       .HasData(
    //           new Park { ParkId = 1, Name = "Death Valley National Park", Location = "Eastern California; Nevada", SquareMileage = 5262, Terrain = "Harsh desert, salt-flats, sand dunes, badlands, valleys, canyons, mountains", Description = "The hottest, driest and lowest of all the national parks in the United States." },
    //       );
    // }
  }
}