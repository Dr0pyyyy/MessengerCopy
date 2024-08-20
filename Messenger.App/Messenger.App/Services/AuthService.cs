using AutoMapper;
using Messenger.App.Enums;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;

namespace Messenger.App.Services
{
	public interface IAuthService
	{
		UserModel CreateNewUser(User newUser);
		UserModel GetByEmailOrPhone(LoginRequest newUser);
		bool UserExists(LoginRequest userModel);
	}

	public class AuthService : IAuthService
	{
		private readonly MainDbContext _dbContext;
		private readonly IMapper _mapper;

		public AuthService(
			MainDbContext dbContext,
			IMapper mapper
			)
		{
			_dbContext = dbContext;
			_mapper = mapper;
		}

		public UserModel CreateNewUser(User newUser)
		{
			_dbContext.Users.Add(newUser);
			_dbContext.SaveChanges();
			return _mapper.Map<User, UserModel>(newUser);
		}

		public bool UserExists(LoginRequest userModel)
		{
			return _dbContext.Users.Any(u => u.u_email == userModel.Email);
		}

		public UserModel GetByEmailOrPhone(LoginRequest newUser)
		{
			var user = _dbContext.Users.FirstOrDefault(u => u.u_email == newUser.Email);
			if (user == null)
				return new UserModel { ValidationsErrors = new List<UserValidationErrorTypes> { UserValidationErrorTypes.UserNotFound } };
			return _mapper.Map<User, UserModel>(user);
		}
	}
}
