using Messenger.App.Factories;
using Messenger.App.Models;
using Microsoft.AspNetCore.Mvc;

namespace Messenger.App.Controllers
{
	public class AuthController : Controller
	{
		private readonly IAuthFactory _authFactory;

		public AuthController(IAuthFactory authFactory)
		{
			_authFactory = authFactory;
		}

		[HttpPost("")]
		public IActionResult CreateNewUser([FromBody] NewUserModel newUser)
		{
			var userUiModel = _authFactory.CreateNewUser(newUser);
			if(userUiModel.ValidationsErrors.Count > 0)
				return BadRequest(userUiModel.ValidationsErrors);
			return Ok(userUiModel.UserId);
		}

		[HttpPost("login")]
		public IActionResult Login([FromBody] NewUserModel newUser)
		{
			_authFactory.Login(newUser);
			return Ok();
		}
	}
}
