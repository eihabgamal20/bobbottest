//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Message, Client } = require("discord.js");

module.exports = {
  name: 'say',
  description: `sends a message to the target channel.`,
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**',
      })
    }
    let channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0])
    const msg = args.slice(1).join(' '),
      permission = message.member.permissions.has('MANAGE_GUILD'),
      guilds = message.guild.me.permissions.has('MANAGE_MESSAGES')
    if (!permission) {
      return message
        .reply({
          content: ":x: **You don't have permission to use this command**",
        })
        .catch((_0x2d2b66) => {
          console.log("I Couldn't Reply To The Message: " + _0x2d2b66.message)
        })
    }
    if (!guilds) {
      return message.reply({
        content:
          ":rolling_eyes: **I couldn't clear messages. Please check my permissions and role position.**",
        ephemeral: true,
      })
    }
    !channel &&
      message
        .reply({ content: ':rolling_eyes: **Please mention a channel**' })
        .catch((_0x2aac45) => {
          console.log("I Couldn't Reply To The Message: " + _0x2aac45.message)
        })
    if (channel) {
      let image = message.attachments.first()
      image &&
        channel
          .send({
            content: '' + msg,
            files: [image.proxyURL],
          })
          .then(() => {
            message.delete()
          })
          .catch((_0x2ab7f0) => {
            console.log("I Couldn't Reply To The Message: " + _0x2ab7f0.message)
          })
      !image &&
        channel
          .send('' + msg)
          .then(() => {
            message.delete()
          })
          .catch((_0x3eb295) => {
            console.log("I Couldn't Reply To The Message: " + _0x3eb295.message)
          })
    }
  },
}
