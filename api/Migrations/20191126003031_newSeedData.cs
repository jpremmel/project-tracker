using Microsoft.EntityFrameworkCore.Migrations;

namespace api.Migrations
{
    public partial class newSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2);

            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Password", "PasswordHash", "Username" },
                values: new object[] { "test", "AQAAAAEAACcQAAAAEMMF2iEgitUOWSCaJ8bQ7iXn+vI+QB4nOo7MCBRCS6j5bDXHXLaQBX0TLz6E/IOFMA==", "test" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1,
                columns: new[] { "Password", "PasswordHash", "Username" },
                values: new object[] { null, null, null });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Password", "PasswordHash", "Token", "Username" },
                values: new object[] { 2, null, null, null, null });
        }
    }
}
