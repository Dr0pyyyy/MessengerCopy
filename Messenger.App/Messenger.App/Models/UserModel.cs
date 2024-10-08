﻿using Messenger.App.Enums;
using System.Text.Json.Serialization;

namespace Messenger.App.Models
{
	public class UserModel
	{
        public int UserId { get; set; }
		public string Email { get; set; } = string.Empty;
		public int Phone { get; set; }
        public string FirstName { get; set; } = string.Empty;
		public string LastName { get; set; } = string.Empty;
        public DateTime Created { get; set; } = DateTime.Now;
		public DateTime Updated { get; set; }
		public DateTime Deleted { get; set; }
		public string JwtToken { get; set; } = string.Empty;

		[JsonIgnore]
		public string PasswordHash { get; set; } = string.Empty;

        //Non database properties
        public List<UserValidationErrorTypes>? ValidationsErrors { get; set; } = new List<UserValidationErrorTypes>();
    }
}
