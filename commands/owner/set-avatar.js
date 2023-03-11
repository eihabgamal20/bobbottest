//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { MessageButton, MessageActionRow, MessageEmbed, Client } = require("discord.js");

module.exports = {
  name: 'set-avatar',
  description: `Change new avatar bot`,
  async execute(client, message, args) {
    const { wtf } = require('../../events/messageCreate.js')
    if (!wtf) {
      return message.reply({
        content:
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           ØªÙ\u2026 Ø\xA7Ù\u201EØªØ\xAEØ\xB1ÙŠØ\xA8 ÙÙŠ Ù\u2026Ù\u201EÙØ\xA7Øª Ø\xA7Ù\u201EØ\xA8ÙˆØª Ùˆ Ø\xA7ØµØ\xA8Ø\xAD Ø\u061BÙŠØ\xB1 ØµØ\xA7Ù\u201EØ\xAD Ù\u201EÙ\u201EØ\xA7Ø\xB3ØªØ\xAEØ\xAFØ\xA7Ù\u2026 Ø\xB4ÙƒØ\xB1Ø\xA7 Ù\u201EØªÙÙ\u2021Ù\u2026Ùƒ**',
      })
    }
    let button = new MessageActionRow().addComponents(
      new MessageButton()
        .setStyle('LINK')
        .setLabel('View')
        .setURL('https://discord.com/users/' + client.user.id)
    )
    const permission = message.member.permissions.has('MANAGE_GUILD'),
      guilds = message.guild.me.permissions.has('MANAGE_GUILD')
    if (!permission) {
      return message
        .reply({
          content: ":x: **You don't have permission to use this command**",
          ephemeral: true,
        })
        .catch((_0x253415) => {
          console.log("i couldn't reply to the message: " + _0x253415.message)
        })
    }
    if (!guilds) {
      return message
        .reply({
          content:
            ":rolling_eyes: **I couldn't ban that user. Please check my permissions and role position.**",
          ephemeral: true,
        })
        .catch((_0x4a9082) => {
          console.log("i couldn't reply to the message: " + _0x4a9082.message)
        })
    }
    client.user.setAvatar(args)
    if (!args) {
      return message
        .reply({ content: '**:rolling_eyes: Please type url image**' })
        .catch((_0x146d25) => {
          console.log("i couldn't reply to the message: " + _0x146d25.message)
        })
    }
    message
      .reply({
        content: '**Done setting avatar to :**',
        files: [args],
        components: [button],
      })
      .catch((_0x12803c) => {
        message.reply({
          content:
            ':rolling_eyes: **' + client.config.prefix + 'set-avatar __URL__**',
        })
      })
  },
}
