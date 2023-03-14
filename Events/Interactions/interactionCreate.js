module.exports = {
    name: 'interactionCreate',

    execute: (client, interaction) => {
        if (!interaction.isChatInputCommand()) {
            return
        }

        const command = client.commands.get(interaction.commandName)

        if (!command) {
            return interaction.reply({
                content: 'Outdated command',
            })
        }

        command.execute(client, interaction)
    }
}