require('dotenv').config()

const { Client, GatewayIntentBits, Partials } = require('discord.js');
const { loadEvents } = require('./Handlers/eventHandler');

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

client.config = process.env

client
    .login(client.config.token)
    .then(() => {
        console.log('Bot logged in')

        loadEvents(client)
    })