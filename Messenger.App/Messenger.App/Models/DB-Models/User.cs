﻿using System.ComponentModel.DataAnnotations;

namespace Messenger.App.Models.DB_Models
{
	public class User
	{
        [Key]
        public int u_id { get; set; }

		[Required]
		[EmailAddress]
		public string u_email { get; set; } = string.Empty;

		[Required]
		public string u_password_hash { get; set; } = string.Empty;

		[Required]
		public int u_mobile_phone { get; set; }

		public string u_firstname { get; set; } = string.Empty;
        public string u_lastname { get; set; } = string.Empty;
	}
}
