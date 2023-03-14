const loadCommands = (client) => {
    const Ascii = require('ascii-table')
    const fs = require('node:fs')

    const table = new Ascii().setHeading('Command', 'Status')
    const folders = fs.readdirSync('./Commands')
    let commands = []

    for (const folder of folders) {
        const files = fs.readdirSync(`./Commands/${folder}`)
            .filter(file => file.endsWith('.js'))

        for (const file of files) {
            const command = require(`../Commands/${folder}/${file}`)

            client.commands.set(command.data.name, command)

            commands.push(command.data.toJSON())

            table.addRow(file, 'loaded')
        }
    }

    client.application.commands.set(commands)

    return console.log(table.toString(), '\nLoaded commands')
}

module.exports = { loadCommands }