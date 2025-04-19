const { Colors } = require('discord.js');

const config = {
	ownerID: ['1334863659440148490'],
	token: 'MTM1NzU5MzQ4Nzg2Mzk3MTkzMA.GdtBRu.CT6Z2yHOZ0NlnpXb4Thyxwl6eMH7m6mwYpCoqk',
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://genius.com/developers
		genius: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
		// https://api.egglord.dev/settings
		masterToken: 'OFMWpjlqumPeZI4XOIRujs3yiG1IUwgKE2PfDN904xJlkZ1h7GbLYNmLTvz07ss5muAszWMkgARqH7JmqZT7Ql',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'https://localhost',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/qzcFd73JQT',
		// Your support's server ID
		GuildID: '1358037564732477601',
		// This for using the suggestion command on your server
		ModRole: '1358037565193846815',
		// What channel to post the suggestions
		SuggestionChannel: '1358037565193846815',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '1358037565193846815',
		// Where rate limits will be sent to, for investigation
		rateLimitChannelID: '1332829000401162293',
	},
	API: {
		port: 3000,
		secure: true,
		token: '123456789',
	},
	Staff: {
		ContributorRole: "1333534684038037525",
		SupportRole: "1333534684038037525",
		DeveloperRole: "1333534684038037525",
	},
	LavalinkNodes: [
		{ host: 'localhost', port: 5000, password: 'youshallnotpass' },
	],
	// URL to mongodb
	MongoDBURl: 'mongodb+srv://duckybot12:Rpmaster11!@cluster0.rkfv85o.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
	// embed colour
	embedColor: Colors.Default,
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
