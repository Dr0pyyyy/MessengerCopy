using AutoMapper;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;

namespace Messenger.App.MappingProfiles
{
	public class UserMappingProfiles : Profile
	{
        public UserMappingProfiles()
        {
			CreateMap<User, UserModel>()
				.ForMember(t => t.UserId, m => m.MapFrom(t => t.u_id))
				.ForMember(t => t.Email, m => m.MapFrom(t => t.u_email))
				.ForMember(t => t.UserName, m => m.MapFrom(t => t.u_name))
				.ForMember(t => t.UserId, m => m.MapFrom(t => t.u_id))
				.ReverseMap();
		}
    }
}
