

const { Message, Client } = require("discord.js");

module.exports = {
  name: 'lock',
  aliases: ['يقفل', 'قفل', 'اقفل'],
  description: `Disables everyone from sending messages in specific channel.`,
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**',
      })
    }
    const permission = message.member.permissions.has('MANAGE_CHANNELS'),
      guilds = message.guild.me.permissions.has('MANAGE_CHANNELS')
    if (!permission) {
      return message
        .reply({
          content: ":x: **You don't have permission to use this command**",
          ephemeral: true,
        })
        .catch((_0x329b12) => {
          console.log("i couldn't reply to the message: " + _0x329b12.message)
        })
    }
    if (!guilds) {
      return message
        .reply({
          content:
            ":rolling_eyes: **I couldn't edit the channel permissions. Please check my permissions and role position.**",
          ephemeral: true,
        })
        .catch((_0x2f9a45) => {
          console.log("i couldn't reply to the message: " + _0x2f9a45.message)
        })
    }
    let everyone = message.guild.roles.cache.find(
      (_0x256cbb) => _0x256cbb.name === '@everyone'
    )
    message.channel.permissionOverwrites
      .edit(everyone, { SEND_MESSAGES: false })
      .then(() => {
        message
          .reply({
            content:
              '**<#' + message.channel.id + '> has been looked. :lock:** ',
            ephemeral: true,
          })
          .catch((_0xd560cf) => {
            console.log("i couldn't reply to the message: " + _0xd560cf.message)
          })
      })
  },
}
