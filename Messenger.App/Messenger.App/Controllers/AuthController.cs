using Messenger.App.Factories;
using Messenger.App.Models;
using Microsoft.AspNetCore.Mvc;

namespace Messenger.App.Controllers
{
	[Route("auth")]
	public class AuthController : Controller
	{
		private readonly IAuthFactory _authFactory;

		public AuthController(IAuthFactory authFactory)
		{
			_authFactory = authFactory;
		}

		[HttpPost("")]
		public IActionResult CreateNewUser([FromBody] AuthRequest newUser)
		{
			var userUiModel = _authFactory.CreateNewUser(newUser);
			if(userUiModel.ValidationsErrors != null && userUiModel.ValidationsErrors.Count > 0)
				return BadRequest(userUiModel.ValidationsErrors);
			return Ok(userUiModel.UserId);
		}

		[HttpPost("login")]
		public IActionResult Login([FromBody] AuthRequest loginRequest)
		{
			var user = _authFactory.Login(loginRequest);
			if (user.ValidationsErrors != null && user.ValidationsErrors.Count > 0)
				return BadRequest(user.ValidationsErrors);
			return Ok(user);
		}
	}
}
