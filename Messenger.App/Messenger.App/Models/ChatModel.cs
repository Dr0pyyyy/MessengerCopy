using System.ComponentModel.DataAnnotations;

namespace Messenger.App.Models
{
	public class ChatModel
	{
        [Key]
        public int ChatId { get; set; }

		[Required]
		public string ChatName { get; set; }

		[Required]
		public DateTime ChatCreated { get; set; }
        public DateTime? ChatUpdated { get; set; }
        public DateTime? ChatDeleted { get; set; }
        public string? LastMessage { get; set; }
        public DateTime? LastActivity { get; set; }
    }
}
