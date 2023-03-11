//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all//


  
const { Message, Client } = require("discord.js");

module.exports = {
  name: 'clear',
  aliases: ['مسح', 'امسح', 'يمسح'],
  description: `cleans messages from a channel.`,
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           تم التخريب في ملفات البوت و اصبح غير صالح للاستخدام شكرا لتفهمك**',
      })
    }
    const permission = message.member.permissions.has('MANAGE_MESSAGES'),
      guilds = message.guild.me.permissions.has('MANAGE_MESSAGES')
    if (!permission) {
      return message
        .reply({
          content: ":x: **You don't have permission to use this command**",
          ephemeral: true,
        })
        .catch((_0x3575d4) => {
          console.log("i couldn't reply to the message: " + _0x3575d4.message)
        })
    }
    if (!guilds) {
      return message
        .reply({
          content:
            ":rolling_eyes: **I couldn't ban that user. Please check my permissions and role position.**",
          ephemeral: true,
        })
        .catch((_0x56b196) => {
          console.log("i couldn't reply to the message: " + _0x56b196.message)
        })
    }
    args[0] = args[0] ? parseInt(args[0]) : 100
    if (isNaN(args[0])) {
      return message
        .reply({ content: 'Please provide valid number' })
        .catch((_0x59dc86) => {
          console.log("i couldn't reply to the message: " + _0x59dc86.message)
        })
    }
    if (args[0] > 100) {
      return message
        .reply({
          content:
            ":rolling_eyes: **You can't delete more than __100__ messages**",
        })
        .catch((_0x4b5181) => {
          console.log("i couldn't reply to the message: " + _0x4b5181.message)
        })
    }
    if (args[0] < 2) {
      return message
        .reply({
          content:
            ':rolling_eyes: **You need to delete at least __2__ messages**',
        })
        .catch((_0x4a0860) => {
          console.log("i couldn't reply to the message: " + _0x4a0860.message)
        })
    }
    let messages = await message.channel.messages.fetch({ limit: args[0] })
    messages = messages.filter(
      (_0x18971f) =>
        Date.now() - new Date(_0x18971f.createdTimestamp).getTime() <=
        1209600000
    )
    message.channel
      .bulkDelete(messages)
      .catch((_0x14bb2f) => console.log(_0x14bb2f.message))
    message.channel
      .send('```js\n ' + messages.size + ' messages have been deleted.```\n')
      .then((_0xf647a3) => {
        setTimeout(() => _0xf647a3.delete(), 6000)
      })
      .catch((_0xd49398) => {
        console.log("i couldn't reply to the message: " + _0xd49398.message)
      })
  },
}
