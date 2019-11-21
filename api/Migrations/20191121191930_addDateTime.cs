using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class addDateTime : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DateTimeString",
                table: "Notes",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateTimeString",
                table: "Notes");
        }
    }
}
