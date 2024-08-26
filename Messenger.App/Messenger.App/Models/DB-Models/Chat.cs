using System.ComponentModel.DataAnnotations;

namespace Messenger.App.Models.DB_Models
{
	public class Chat
	{
		[Key]
		public int c_id { get; set; }

		[Required]
		public string c_name { get; set; } = string.Empty;

		[Required]
		public DateTime c_created { get; set; } = DateTime.Now;
		public DateTime? c_updated { get; set; }
		public DateTime? c_deleted { get; set; }
        public string? c_last_message { get; set; }
        public DateTime? c_last_activity { get; set; }
    }
}
