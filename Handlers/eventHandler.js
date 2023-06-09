const loadEvents = (client) => {
    const Ascii = require('ascii-table')
    const fs = require('node:fs')

    const table = new Ascii().setHeading('Events', 'Status')
    const folders = fs.readdirSync('./Events')

    for (const folder of folders) {
        const files = fs.readdirSync(`./Events/${folder}/`)
            .filter(file => file.endsWith('.js'))

        for (const file of files) {
            const event = require(`../Events/${folder}/${file}`)

            if (event.rest) {
                if (event.once) {
                    client.rest.once(
                        event.name,
                        (...args) => event.execute(client, ...args)
                    )
                } else {
                    client.rest.on(
                        event.name,
                        (...args) => event.execute(client, ...args)
                    )
                }
            } else {
                if (event.once) {
                    client.once(
                        event.name,
                        (...args) => event.execute(client, ...args)
                    )
                } else {
                    client.on(
                        event.name,
                        (...args) => event.execute(client, ...args)
                    )
                }
            }

            table.addRow(file, 'loaded')
        }
    }

    return console.log(table.toString(), '\nLoaded events')
}

module.exports = { loadEvents }