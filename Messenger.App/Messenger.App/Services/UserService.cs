using AutoMapper;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;

namespace Messenger.App.Services
{
	public interface IUserService 
	{
		public UserModel GetById(int id);
	}

	public class UserService : IUserService
	{
		private readonly MainDbContext _dbContext;
		private readonly IMapper _mapper;

		public UserService(
			MainDbContext dbContext,
			IMapper mapper)
		{
			_dbContext = dbContext;
			_mapper = mapper;
		}

		public UserModel GetById(int id)
		{
			var user = _dbContext.Users.Find(id);
			return _mapper.Map<User, UserModel>(user);
		}
	}
}
