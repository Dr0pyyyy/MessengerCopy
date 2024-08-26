using Microsoft.EntityFrameworkCore;
using Messenger.App.Models.DB_Models;

namespace Messenger.App
{
	public class MainDbContext : DbContext
	{
		public MainDbContext(DbContextOptions<MainDbContext> options)
			: base(options)
		{
		}

		public DbSet<User> Users { get; set; }
		public DbSet<Chat> Chats { get; set; }
		public DbSet<Message> Messages { get; set; }
		public DbSet<ChatMember> ChatMembers { get; set; }

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			base.OnModelCreating(modelBuilder);

			modelBuilder.Entity<User>()
				.HasKey(u => u.u_id);

			modelBuilder.Entity<Chat>()
				.HasKey(c => c.c_id);

			modelBuilder.Entity<Message>()
				.HasKey(m => m.m_id);

			modelBuilder.Entity<ChatMember>()
				.HasKey(cm => cm.cm_id);
		}
	}
}
