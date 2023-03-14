const { SlashCommandBuilder, PermissionFlagsBits } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping!!!')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute: (client, interaction) => {
        return interaction.reply({content: 'MUUUUACHHHH'})
    }
}