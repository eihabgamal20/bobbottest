//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all//



const { Message, Client } = require("discord.js");

module.exports = {
  name: 'unlock',
  aliases: ['فتح', 'افتح', 'يفتح'],
  description: `Allows everyone to send messages in specific channel.`,
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
        .catch((_0x29f7fc) => {
          console.log("i couldn't reply to the message: " + _0x29f7fc.message)
        })
    }
    if (!guilds) {
      return message
        .reply({
          content:
            ":rolling_eyes: **I couldn't change the channel permissions. Please check my permissions.**",
          ephemeral: true,
        })
        .catch((_0x192df6) => {
          console.log("i couldn't reply to the message: " + _0x192df6.message)
        })
    }
    let everyone = message.guild.roles.cache.find(
      (_0x4e01b7) => _0x4e01b7.name === '@everyone'
    )
    message.channel.permissionOverwrites
      .edit(everyone, { SEND_MESSAGES: true })
      .then(() => {
        message.reply({
          content:
            '**<#' + message.channel.id + '> has been unlocked. :unlock: **',
          ephemeral: true,
        })
      })
  },
}
