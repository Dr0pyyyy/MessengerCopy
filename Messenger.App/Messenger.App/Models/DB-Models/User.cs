using System.ComponentModel.DataAnnotations;

namespace Messenger.App.Models.DB_Models
{
	public class User
	{
		[Key]
		public int u_id { get; set; }

		[Required]
		[EmailAddress]
		public string u_email { get; set; } = string.Empty;
		public int u_phone { get; set; }

		[Required]
		public string u_password_hash { get; set; } = string.Empty;
		public string u_firstname { get; set; } = string.Empty;
		public string u_lastname { get; set; } = string.Empty;
		public DateTime u_created { get; set; } = DateTime.Now;
		public DateTime u_updated { get; set; }
		public DateTime u_deleted { get; set; }
	}
}
