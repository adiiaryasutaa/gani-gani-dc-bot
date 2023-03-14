require('dotenv').config()

const { Client, GatewayIntentBits, Partials } = require('discord.js')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
    ],

    partials: [
        Partials.User,
        Partials.Message,
        Partials.GuildMember,
        Partials.ThreadMember,
    ]
})

client.once('ready', () => {
    console.log('Bot is ready!');
})

client.config = process.env

client
    .login(client.config.token)
    .then(() => console.log('Bot logged in'))