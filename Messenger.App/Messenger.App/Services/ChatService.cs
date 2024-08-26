using AutoMapper;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;
using Microsoft.EntityFrameworkCore;

namespace Messenger.App.Services
{
	public interface IChatService
	{
		Task<List<ChatModel>> GetAllAsync(int userId);
	}

	public class ChatService : IChatService
	{
		private readonly MainDbContext _dbContext;
		private readonly IMapper _mapper;

		public ChatService(
			MainDbContext dbContext,
			IMapper mapper)
        {
			_dbContext = dbContext;
			_mapper = mapper;
		}

		public async Task<List<ChatModel>> GetAllAsync(int userId)
		{
			try
			{
				IQueryable<ChatMember> query = _dbContext.ChatMembers.Where(cm => cm.u_id == userId);
				var chatIds = await query.Select(cm => cm.c_id).ToListAsync();
				IQueryable<Chat> chatsQuery = _dbContext.Chats.Where(c => chatIds.Contains(c.c_id));
				var chats = await chatsQuery.ToListAsync();
				return _mapper.Map<List<ChatModel>>(chats);
			}
			catch
			{ 
			}
			return null;
		}

	}
}
