using AutoMapper;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;

namespace Messenger.App.MappingProfiles
{
	public class ChatMappingProfiles : Profile
	{
        public ChatMappingProfiles()
        {
			CreateMap<Chat, ChatModel>()
				.ForMember(t => t.ChatId, m => m.MapFrom(t => t.c_id))
				.ForMember(t => t.ChatName, m => m.MapFrom(t => t.c_name))
				.ForMember(t => t.ChatCreated, m => m.MapFrom(t => t.c_created))
				.ForMember(t => t.ChatUpdated, m => m.MapFrom(t => t.c_updated))
				.ForMember(t => t.ChatDeleted, m => m.MapFrom(t => t.c_deleted))
				.ForMember(t => t.LastMessage, m => m.MapFrom(t => t.c_last_message))
				.ForMember(t => t.LastActivity, m => m.MapFrom(t => t.c_last_activity))
				.ReverseMap();
		}
    }
}
