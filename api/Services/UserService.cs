using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;
using api.Helpers;
using api.Models;

namespace api.Services
{
  public interface IUserService
  {
    User Authenticate(string username, string password);
    // IEnumerable<User> GetAll();
    void Create(User user);
  }

  public class UserService : IUserService
  {
    private readonly ProjectsContext _db;
    private List<User> _users;

    private readonly AppSettings _appSettings;

    public UserService(IOptions<AppSettings> appSettings, ProjectsContext db)
    {
      _appSettings = appSettings.Value;
      _db = db;
      _users = _db.Users.ToList();
    }

    public User Authenticate(string username, string password)
    {
      var user = _users.SingleOrDefault(x => x.Username == username && x.PasswordHash == password);

      //return null if user not found
      if (user == null)
        return null;

      //if authentication is successful, generate jwt token
      var tokenHandler = new JwtSecurityTokenHandler();
      var key = Encoding.ASCII.GetBytes(_appSettings.Secret);
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
          new Claim(ClaimTypes.Name, user.UserId.ToString())
        }),
        Expires = DateTime.UtcNow.AddDays(7),
        SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
      };
      var token = tokenHandler.CreateToken(tokenDescriptor);
      user.Token = tokenHandler.WriteToken(token);

      //remove password before returning
      user.PasswordHash = null;

      return user;
    }

    public void Create(User newUser)
    {
      _db.Users.Add(newUser);
      _db.SaveChanges();
    }

    // public IEnumerable<User> GetAll()
    // {
    //   //return users without passwords
    //   return _users.Select(x => {
    //     x.PasswordHash = null;
    //     return x;
    //   });
    // }
  }
}