using Messenger.App.Enums;

namespace Messenger.App.Models
{
	public class UserModel
	{
        public int UserId { get; set; }
        public string UserName { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
		public string PasswordHash { get; set; } = string.Empty;
		public int MobilePhone { get; set; }
		public List<UserValidationErrorTypes>? ValidationsErrors { get; set; }
	}
}
