const config = require(`${process.cwd()}/json/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require(`${process.cwd()}/models/antiLink`);

module.exports = {
    name: 'disable-antilink',
    aliases: ["remove-antilink"],
    usage: '',
    description: '',
    category: "owner",
    cooldown: 0,
    userPermissions: "ADMINISTRATOR",
    botPermissions: "",
    ownerOnly: false,
    toggleOff: false,

    /**
     * @param {Client} client 
     * @param {Message} message
     * @param {String[]} args
     */

    async execute(client, message, args, ee) {
        try {

            Schema.findOneAndDelete({
                Guild: message.guild.id
            }, async (err, data) => {
                if (!data) return message.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(` AntiLink System`)
                    .setColor("RED")
                        .setFooter(`youyou`)
                        .setDescription(`AntiLink is Already **Disabled** in this server!`)
                    ]
                })

                message.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(`AntiLink System`)
                    .setColor("RED")
                        .setFooter(`youyou`)
                        .setDescription(`**AntiLink** is now Disabled!`)
                    ]
                });
            })

        } catch (e) {
            console.log(String(e.stack).bgRed)
            const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
            if (!errorLogsChannel) return;
            return errorLogsChannel.send({
                embeds: [new MessageEmbed()
                    .setColor("RED")
                    .setAuthor(message.guild.name, message.guild.iconURL({
                        dynamic: true
                    }))
                    .setTitle(`${client.allEmojis.x} Got a Error:`)
                    .setDescription(`\`\`\`${e.stack}\`\`\``)
                    .setFooter(`Having: ${message.guild.memberCount} Users`)
                ]
            })
        }
    }
}