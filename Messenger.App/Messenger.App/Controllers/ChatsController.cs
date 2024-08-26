using Messenger.App.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Messenger.App.Controllers
{
	[Route("chats")]
	[Authorize]
	public class ChatsController : Controller
	{
		private readonly IChatService _chatService;

		public ChatsController(IChatService chatService)
        {
			_chatService = chatService;
        }

		[HttpGet("all/{id:int}")]
		public async Task<ActionResult> GetAllAsync(int id)
		{
			var result = await _chatService.GetAllAsync(id);
			return Ok(result);
		}
	}
}
