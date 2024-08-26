using AutoMapper;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;

namespace Messenger.App.MappingProfiles
{
	public class MessageMappingProfiles : Profile
	{
        public MessageMappingProfiles()
        {
            CreateMap<Message, MessageModel>()
				.ForMember(t => t.MessageId, m => m.MapFrom(t => t.m_id))
				.ForMember(t => t.ChatId, m => m.MapFrom(t => t.c_id))
				.ForMember(t => t.UserId, m => m.MapFrom(t => t.u_id))
				.ForMember(t => t.Content, m => m.MapFrom(t => t.m_content))
				.ForMember(t => t.Created, m => m.MapFrom(t => t.m_created))
				.ForMember(t => t.Updated, m => m.MapFrom(t => t.m_updated))
				.ForMember(t => t.Deleted, m => m.MapFrom(t => t.m_deleted))
				.ForMember(t => t.ReadAt, m => m.MapFrom(t => t.m_read_at))
				.ReverseMap();

		}
    }
}
