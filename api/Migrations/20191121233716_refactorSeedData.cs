using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class refactorSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 1,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 2,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 3,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 4,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 5,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 6,
                column: "DateTimeString",
                value: "moment(\"2016 - 11 - 09T22:23:27.861\")");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 1,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 2,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 3,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 4,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 5,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 6,
                column: "DateTimeString",
                value: "Thu Jan 18 2018 13:52:20 GMT-0800 (PST)");
        }
    }
}
