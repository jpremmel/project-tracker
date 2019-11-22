using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class newSeedFormatISO8601 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 1,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 2,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 3,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 4,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 5,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");

            migrationBuilder.UpdateData(
                table: "Notes",
                keyColumn: "NoteId",
                keyValue: 6,
                column: "DateTimeString",
                value: "2019-11-22T00:26:28.380Z");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
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
    }
}
