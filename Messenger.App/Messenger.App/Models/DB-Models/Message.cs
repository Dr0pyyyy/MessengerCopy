namespace Messenger.App.Models.DB_Models
{
	public class Message
	{
        public int m_id { get; set; }
        public int c_id { get; set; }
        public int u_id { get; set; }
        public string m_content { get; set; } = string.Empty;
		public DateTime m_created { get; set; } = DateTime.Now;
		public DateTime m_updated { get; set; }
        public DateTime m_deleted { get; set; }
        public DateTime m_read_at { get; set; }
    }
}
