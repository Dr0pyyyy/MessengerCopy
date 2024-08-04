using Messenger.App.Enums;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;
using Messenger.App.Services;

namespace Messenger.App.Factories
{
	public interface IAuthFactory
	{
		UserModel CreateNewUser(NewUserModel newUser);
		UserModel Login(NewUserModel newUser);
	}

	public class AuthFactory : IAuthFactory
	{
		public List<UserValidationErrorTypes> _validationErrors;

        private readonly IAuthService _authService;

		public AuthFactory(IAuthService authService)
		{
			_authService = authService;

			_validationErrors = new List<UserValidationErrorTypes>();
		}

		public UserModel CreateNewUser(NewUserModel newUser)
		{
			ValidateNewUser(newUser, _validationErrors);
			if(_validationErrors.Count > 0)
				return new UserModel { ValidationsErrors = _validationErrors };

			var user = new User
			{
				u_name = newUser.Username,
				u_email = newUser.Email
			};

			var passwordHash = BCrypt.Net.BCrypt.HashPassword(newUser.Password);
			user.u_password_hash = passwordHash;
			return _authService.CreateNewUser(user);
		}

		public UserModel Login(NewUserModel newUser)
		{ 
			ValidateNewUser(newUser, _validationErrors);
			if (_validationErrors.Count > 0)
				return new UserModel { ValidationsErrors = _validationErrors };

			var user = _authService.GetByEmailOrPhone(newUser);
			if(user.ValidationsErrors.Count > 0)
				return user;

			var isPasswordValid = BCrypt.Net.BCrypt.Verify(newUser.Password, user.PasswordHash);
			if(!isPasswordValid)
				return new UserModel { ValidationsErrors = new List<UserValidationErrorTypes> { UserValidationErrorTypes.InvalidPassword } };
			return user;
		}

		private List<UserValidationErrorTypes>? ValidateNewUser(NewUserModel newUser, List<UserValidationErrorTypes> validationErrors)
		{
			if (string.IsNullOrEmpty(newUser.Email))
				validationErrors.Add(UserValidationErrorTypes.InvalidEmail);

			if (string.IsNullOrEmpty(newUser.Username))
				validationErrors.Add(UserValidationErrorTypes.InvalidUsername);

			_authService.UserExists(newUser, validationErrors);
			return validationErrors;
		}
	}
}
