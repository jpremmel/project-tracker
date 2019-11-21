using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class SeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                column: "UserId",
                value: 1);

            migrationBuilder.InsertData(
                table: "Users",
                column: "UserId",
                value: 2);

            migrationBuilder.InsertData(
                table: "Projects",
                columns: new[] { "ProjectId", "Description", "Title", "UserId" },
                values: new object[,]
                {
                    { 1, "This is a description for the first test project. Yay!", "First Test Project", 1 },
                    { 2, "Here is a description for the second test project.", "Second Test Project", 1 },
                    { 3, "And finally, a description for the third test project.", "Third Test Project", 1 },
                    { 4, "This is the first test project for the second user.", "User 2's Test Project", 2 },
                    { 5, "This is the second test project for the second user.", "Another Test Project", 2 }
                });

            migrationBuilder.InsertData(
                table: "Notes",
                columns: new[] { "NoteId", "Content", "DateTimeString", "ProjectId" },
                values: new object[,]
                {
                    { 1, "Here is the first note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 1 },
                    { 2, "Here is the second note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 1 },
                    { 3, "Here is the third note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 1 },
                    { 4, "Here is the fourth note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 2 },
                    { 5, "Here is the fifth note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 5 },
                    { 6, "Here is the last note!", "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)", 5 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ProjectId",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ProjectId",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ProjectId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ProjectId",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Projects",
                keyColumn: "ProjectId",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);
        }
    }
}
