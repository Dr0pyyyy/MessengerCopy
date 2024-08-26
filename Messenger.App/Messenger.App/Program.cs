using dotenv.net;
using Messenger.App;
using Messenger.App.Factories;
using Messenger.App.Helpers;
using Messenger.App.MappingProfiles;
using Messenger.App.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using System.Text;

try
{
	var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

	var builder = WebApplication.CreateBuilder(args);

	//JWT
	DotEnv.Load();
	var key = Encoding.ASCII.GetBytes(Environment.GetEnvironmentVariable("JWT_SECRET_KEY"));
	builder.Services.AddAuthentication(x =>
	{
		x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
		x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
	})
	  .AddJwtBearer(x =>
	  {
		  x.RequireHttpsMetadata = false;
		  x.SaveToken = true;
		  x.TokenValidationParameters = new TokenValidationParameters
		  {
			  ValidateIssuerSigningKey = true,
			  IssuerSigningKey = new SymmetricSecurityKey(key),
			  ValidateIssuer = false,
			  ValidateAudience = false
		  };
	  });

	//CORS
	builder.Services.AddCors(options =>
	{
		options.AddPolicy(name: MyAllowSpecificOrigins,
						  policy =>
						  {
							  policy.WithOrigins("http://localhost:4200")
									.AllowAnyHeader()
									.AllowAnyMethod();
						  });
	});


	//Automapper
	builder.Services.AddAutoMapper(typeof(UserMappingProfiles));

	builder.Services.AddDbContext<MainDbContext>(options =>
	options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

	// Add services to the container.
	builder.Services.AddScoped<IAuthFactory, AuthFactory>();
	builder.Services.AddScoped<IAuthService, AuthService>();

	builder.Services.AddScoped<IChatService, ChatService>();

	builder.Services.AddScoped<IUserService, UserService>();

	builder.Services.AddScoped<IJwtHandler, JwtHandler>();

	builder.Services.AddControllers();
	// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
	builder.Services.AddEndpointsApiExplorer();
	builder.Services.AddSwaggerGen();

	var app = builder.Build();

	// Configure the HTTP request pipeline.
	if (app.Environment.IsDevelopment())
	{
		app.UseSwagger();
		app.UseSwaggerUI();
	}

	app.UseHttpsRedirection();

	app.UseCors(MyAllowSpecificOrigins);

	app.UseAuthorization();

	app.MapControllers();

	app.Run();
}
catch (Exception ex)
{
	Console.WriteLine(ex.Message);
}
