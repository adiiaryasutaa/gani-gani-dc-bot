const { SlashCommandBuilder, PermissionFlagsBits, EmbedBuilder, AttachmentBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping!!!')
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

    execute: (client, interaction) => {
        return interaction.reply({
            embeds: [
                new EmbedBuilder()
                    .setTitle('EMUUUUACHHHHHH')
                    .setImage('attachment://emuach.png')
            ],
            files: [
                new AttachmentBuilder('./Resources/Images/emuach.png', 'emuach.png')
            ]
        })
    }
}