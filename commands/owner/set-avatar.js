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
          '**The bot files have been vandalized and become unusable. Thank you for your understanding \n           ت�\u2026 �\xA7�\u201Eت�\xAE�\xB1ي�\xA8 في �\u2026�\u201Eف�\xA7ت �\xA7�\u201E�\xA8وت و �\xA7ص�\xA8�\xAD �\u061Bي�\xB1 ص�\xA7�\u201E�\xAD �\u201E�\u201E�\xA7�\xB3ت�\xAE�\xAF�\xA7�\u2026 �\xB4ك�\xB1�\xA7 �\u201Eتف�\u2021�\u2026ك**',
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
