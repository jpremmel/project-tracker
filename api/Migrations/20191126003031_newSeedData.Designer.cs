﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Models;

namespace api.Migrations
{
    [DbContext(typeof(ProjectsContext))]
    [Migration("20191126003031_newSeedData")]
    partial class newSeedData
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.6-servicing-10079")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("api.Models.Note", b =>
                {
                    b.Property<int>("NoteId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Content");

                    b.Property<string>("DateTimeString");

                    b.Property<int>("ProjectId");

                    b.HasKey("NoteId");

                    b.HasIndex("ProjectId");

                    b.ToTable("Notes");

                    b.HasData(
                        new
                        {
                            NoteId = 1,
                            Content = "Here is the first note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 1
                        },
                        new
                        {
                            NoteId = 2,
                            Content = "Here is the second note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 1
                        },
                        new
                        {
                            NoteId = 3,
                            Content = "Here is the third note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 1
                        },
                        new
                        {
                            NoteId = 4,
                            Content = "Here is the fourth note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 2
                        },
                        new
                        {
                            NoteId = 5,
                            Content = "Here is the fifth note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 5
                        },
                        new
                        {
                            NoteId = 6,
                            Content = "Here is the last note!",
                            DateTimeString = "2019-11-22T00:26:28.380Z",
                            ProjectId = 5
                        });
                });

            modelBuilder.Entity("api.Models.Project", b =>
                {
                    b.Property<int>("ProjectId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description");

                    b.Property<string>("Title");

                    b.Property<int>("UserId");

                    b.HasKey("ProjectId");

                    b.HasIndex("UserId");

                    b.ToTable("Projects");

                    b.HasData(
                        new
                        {
                            ProjectId = 1,
                            Description = "This is a description for the first test project. Yay!",
                            Title = "First Test Project",
                            UserId = 1
                        },
                        new
                        {
                            ProjectId = 2,
                            Description = "Here is a description for the second test project.",
                            Title = "Second Test Project",
                            UserId = 1
                        },
                        new
                        {
                            ProjectId = 3,
                            Description = "And finally, a description for the third test project.",
                            Title = "Third Test Project",
                            UserId = 1
                        },
                        new
                        {
                            ProjectId = 4,
                            Description = "This is the first test project for the second user.",
                            Title = "User 2's Test Project",
                            UserId = 2
                        },
                        new
                        {
                            ProjectId = 5,
                            Description = "This is the second test project for the second user.",
                            Title = "Another Test Project",
                            UserId = 2
                        });
                });

            modelBuilder.Entity("api.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Password");

                    b.Property<string>("PasswordHash");

                    b.Property<string>("Token");

                    b.Property<string>("Username");

                    b.HasKey("UserId");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            UserId = 1,
                            Password = "test",
                            PasswordHash = "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA==",
                            Username = "test"
                        });
                });

            modelBuilder.Entity("api.Models.Note", b =>
                {
                    b.HasOne("api.Models.Project")
                        .WithMany("Notes")
                        .HasForeignKey("ProjectId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("api.Models.Project", b =>
                {
                    b.HasOne("api.Models.User")
                        .WithMany("Projects")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
