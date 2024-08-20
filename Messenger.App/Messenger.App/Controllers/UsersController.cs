using AutoMapper;
using Messenger.App.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Messenger.App.Controllers
{
	[Route("users")]
	[Authorize]
	public class UsersController : Controller
	{
        public IUserService _userService { get; set; }

        public UsersController(IUserService userService)
        {
			_userService = userService;
        }

        [HttpGet("all")]
		public ActionResult GetAll()
		{

			return Ok();
		}

		[HttpGet("{id:int}")]
		public ActionResult GetById(int id)
		{
			var user = _userService.GetById(id);
			return Ok(user);
		}
	}
}
