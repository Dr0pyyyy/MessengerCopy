namespace Messenger.App.Models
{
	public class AuthRequest
	{
        public string Email { get; set; } = string.Empty;
		public string Password { get; set; } = string.Empty;
		public string Firstname { get; set; } = string.Empty;
        public string Lastname { get; set; } = string.Empty;
		public int Phone { get; set; }
    }
}
