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
				.ForMember(t => t.Phone, m => m.MapFrom(t => t.u_phone))
				.ForMember(t => t.FirstName, m => m.MapFrom(t => t.u_firstname))
				.ForMember(t => t.LastName, m => m.MapFrom(t => t.u_lastname))
				.ForMember(t => t.Created, m => m.MapFrom(t => t.u_created))
				.ForMember(t => t.Updated, m => m.MapFrom(t => t.u_updated))
				.ForMember(t => t.Deleted, m => m.MapFrom(t => t.u_deleted))
				.ForMember(t => t.PasswordHash, m => m.MapFrom(t => t.u_password_hash))
				.ReverseMap();
		}
    }
}
