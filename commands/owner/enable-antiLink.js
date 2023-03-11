const config = require(`${process.cwd()}/json/config.json`);
const {
    Client,
    Message,
    MessageEmbed
} = require('discord.js');
const Schema = require(`${process.cwd()}/models/antiLink`);

module.exports = {
    name: 'enable-antilink',
    aliases: ["set-antilink"],
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

    async execute(client, message, args, ee, prefix) {
        try {
            const channel = message.mentions.channels.first();

            if (!channel) return message.reply({
                embeds: [new MessageEmbed()
                    .setTitle(`AntiLink System`)
                    .setColor("RED")
                    .setFooter("ST6")
                    .setDescription(`Please mention a channel to set the logging of the AntiLink!`)
                ]
            });

            Schema.findOne({
                Guild: message.guild.id
            }, async (err, data) => {
                if (data) {
                    data.Channel = channel.id,
                        data.save();
                } else {
                    new Schema({
                        Guild: message.guild.id,
                        Channel: channel.id,
                    }).save();
                }
                message.reply({
                    embeds: [new MessageEmbed()
                        .setTitle(` AntiLink System`)
                        .setColor("RED")
                        .setFooter("ST6")
                        .setDescription(`AntiLink is Enabled in this Server!
${channel} has been set as the **AntiLink Logging Channel**`)
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
                    .setTitle(` Got a Error:`)
                    .setDescription(`\`\`\`${e.stack}\`\`\``)
                    .setFooter(`Having: ${message.guild.memberCount} Users`)
                ]
            })
        }
    }
}