namespace Messenger.App.Models
{
	public class MessageModel
	{
        public int MessageId { get; set; }
        public int ChatId { get; set; }
        public int UserId { get; set; }
        public string Content { get; set; } = string.Empty;
		public DateTime Created { get; set; } = DateTime.Now;
		public DateTime Updated { get; set; }
        public DateTime Deleted { get; set; }
        public DateTime ReadAt { get; set; }
    }
}
