require('dotenv').config()

const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js');
const { loadCommands } = require('./Handlers/commandHandler');
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
client.commands = new Collection()

client
    .login(client.config.token)
    .then(() => {
        console.log('Bot logged in')

        loadEvents(client)
        loadCommands(client)
    })