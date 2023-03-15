const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')
const { reddit, giphy } = require('../../Services/memeService')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('meme')
        .setDescription('Get a meme!')
        .addStringOption(option =>
            option
                .setName('platform')
                .setDescription('Meme platform (optional)')
                .addChoices(
                    {
                        name: 'Reddit',
                        value: 'reddit',
                    },
                    {
                        name: 'Giphy',
                        value: 'giphy',
                    },
                )
        ),

    execute: async (client, interaction) => {
        const { guild, options, member } = interaction

        const platform = options.getString('platform') ?? 'giphy'
        const embed = new EmbedBuilder()

        switch (platform) {
            case 'reddit':
                reddit()
                    .then(meme => {
                        let title = meme[0].data.children[0].data.title
                        let url = meme[0].data.children[0].data.url
                        let author = meme[0].data.children[0].data.author

                        return interaction.reply({
                            embeds: [
                                embed
                                    .setTitle(title)
                                    .setImage(url)
                                    .setURL(url)
                                    .setColor('Random')
                                    .setFooter({
                                        text: author,
                                    })
                            ]
                        })
                    })
                    .catch(err => {
                        return interaction.reply({
                            embeds: [
                                embed
                                .setTitle('Reddit diblock kontol.')
                            ]
                        })
                    })

                break;

            case 'giphy':
                giphy()
                    .then(meme => {
                        let title = meme.data.title
                        let url = meme.data.images.original.url
                        let link = meme.data.url
                        let author = meme.data.user.display_name
                        let pf = meme.data.user.avatar

                        return interaction.reply({
                            embeds: [
                                embed
                                    .setTitle(`${title}`)
                                    .setImage(`${url}`)
                                    .setURL(link)
                                    .setColor('Random')
                                    .setFooter({
                                        text: author,
                                        iconURL: pf,
                                    })
                            ]
                        })
                    })

                break;
        }
    }
}