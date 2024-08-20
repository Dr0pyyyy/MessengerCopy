using Messenger.App.Enums;
using Messenger.App.Helpers;
using Messenger.App.Models;
using Messenger.App.Models.DB_Models;
using Messenger.App.Services;

namespace Messenger.App.Factories
{
	public interface IAuthFactory
	{
		UserModel CreateNewUser(LoginRequest newUser);
		UserModel Login(LoginRequest newUser);
	}

	public class AuthFactory : IAuthFactory
	{
		public List<UserValidationErrorTypes> _validationErrors;

        private readonly IAuthService _authService;
		private readonly IJwtHandler _jwtHandler;

		public AuthFactory(
			IAuthService authService,
			IJwtHandler jwtHandler)
		{
			_authService = authService;
			_jwtHandler = jwtHandler;

			_validationErrors = new List<UserValidationErrorTypes>();
		}

		public UserModel CreateNewUser(LoginRequest newUser)
		{
			ValidateNewUser(newUser, _validationErrors);
			if(_validationErrors.Count > 0)
				return new UserModel { ValidationsErrors = _validationErrors };

			var user = new User
			{
				u_email = newUser.Email
			};

			var passwordHash = BCrypt.Net.BCrypt.HashPassword(newUser.Password);
			user.u_password_hash = passwordHash;
			return _authService.CreateNewUser(user);
		}

		public UserModel Login(LoginRequest newUser)
		{ 
			ValidateExistingUser(newUser, _validationErrors);
			if (_validationErrors.Count > 0)
				return new UserModel { ValidationsErrors = _validationErrors };

			var user = _authService.GetByEmailOrPhone(newUser);
			if(user.ValidationsErrors.Count > 0)
				return user;

			var isPasswordValid = BCrypt.Net.BCrypt.Verify(newUser.Password, user.PasswordHash);
			if(!isPasswordValid)
				return new UserModel { ValidationsErrors = new List<UserValidationErrorTypes> { UserValidationErrorTypes.InvalidPassword } };

			var token = _jwtHandler.GenerateJwtToken(user);
			user.JwtToken = token;

			return user;
		}

		private List<UserValidationErrorTypes>? ValidateExistingUser(LoginRequest existingUser, List<UserValidationErrorTypes> validationErrors)
		{
			if (string.IsNullOrEmpty(existingUser.Email))
				validationErrors.Add(UserValidationErrorTypes.InvalidEmail);

			var userExists = _authService.UserExists(existingUser);
			if (!userExists)
				validationErrors.Add(UserValidationErrorTypes.UserAlreadyExists);
			return validationErrors;
		}

		private List<UserValidationErrorTypes>? ValidateNewUser(LoginRequest newUser, List<UserValidationErrorTypes> validationErrors)
		{
			if (string.IsNullOrEmpty(newUser.Email))
				validationErrors.Add(UserValidationErrorTypes.InvalidEmail);

			var userExists = _authService.UserExists(newUser);
			if(!userExists)
				validationErrors.Add(UserValidationErrorTypes.UserNotFound);
			return validationErrors;
		}
	}
}
