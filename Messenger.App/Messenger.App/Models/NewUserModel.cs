namespace Messenger.App.Models
{
	public class NewUserModel
	{
        public string Username { get; set; } = string.Empty;
		public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public int MobilePhone { get; set; }
    }
}
