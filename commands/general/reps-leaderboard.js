//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 



const db = require('quick.db');
const {
        MessageEmbed,
        Permissions,
        MessageAttachment,
        utils,
        Utils,
        MessageActionRow,
        MessageSelectMenu,
        MessageButton,
        Collection,
        ButtonInteraction,
        ColorResolvable,
        CommandInteraction,
        EmojiResolvable,
        Message,
        MessageReaction,
        TextChannel,
        User,
        MessageButtonStyle,
        GuildMember,
        WebhookClient,
        Client,
        Intents
} = require('discord.js');
const Discord = require('discord.js');

module.exports = {
        name: "reps-leaderboard",
        description: `Display the top members a reputation point.`,
        aliases: [],
  async execute(client, message, args) {
var _0xcfb39c=_0x4876;(function(_0x3736c3,_0x3fd8e6){var _0x2e4246=_0x4876,_0x6c80f3=_0x3736c3();while(!![]){try{var _0x266af1=parseInt(_0x2e4246(0x177))/(-0x22f0+0x94f+0x19a2)*(-parseInt(_0x2e4246(0x151))/(-0x193*-0x11+-0x8*-0x4a8+-0x4001))+-parseInt(_0x2e4246(0x149))/(-0x1*0x713+-0x12*-0x3f+-0x2*-0x154)+parseInt(_0x2e4246(0x176))/(-0xe0f*-0x1+0x55*0x74+0x5*-0xa83)*(parseInt(_0x2e4246(0x137))/(-0x1*0x1843+-0x1b81+0x33c9))+parseInt(_0x2e4246(0x13c))/(-0x2448+-0x24*-0x114+0x141*-0x2)+-parseInt(_0x2e4246(0x152))/(-0x5f7+0x3*-0x801+0x1e01*0x1)*(parseInt(_0x2e4246(0x165))/(0x10e7*0x1+0x7*0x35+0xa*-0x1d5))+parseInt(_0x2e4246(0x13e))/(0x3ad+0xdf6*-0x2+0x1848)+-parseInt(_0x2e4246(0x164))/(-0x1*-0x703+0x4*-0x916+-0x49*-0x67)*(parseInt(_0x2e4246(0x16e))/(0xcb9*-0x1+-0x2*0xb9e+0x2400));if(_0x266af1===_0x3fd8e6)break;else _0x6c80f3['push'](_0x6c80f3['shift']());}catch(_0x379f9d){_0x6c80f3['push'](_0x6c80f3['shift']());}}}(_0x447b,-0x2*-0x85a8+0x205a1*-0x8+0x1b964b));function _0x447b(){var _0x423bda=['reverse','30MOPggL','22344PriaTV','all','guild','users','startsWith','tion','ank\x20you\x20fo','Reps_','displayAva','2093278onlZWv','ts/message','\x20\x20\x20تم\x20التخ','files\x20have','push','displayCol','r\x20your\x20und','setAuthor','28IIsESl','30911CaEnGu','length','setColor','jhoQJ','../../even','صالح\x20للاست','482670EqYfpo','خدام\x20شكرا\x20','ريب\x20في\x20ملف','erstanding','tarURL','8351466njmbTz','sort','2764854PXQQuW','\x20become\x20un','tby','reply','\x20اصبح\x20غير\x20','**The\x20bot\x20','**\x20','لتفهمك**','setTimesta','slice','REP\x20LEADER','2166489UTEzOK','tag','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','user','fetch','YgJhJ','BOARD','yEvdz','2UQCjfh','588awILaG','data','setDescrip','filter','lodash.sor','\x20been\x20vand','split','usable.\x20Th','alized\x20and','fetchAll','setFooter','indexOf','Ddavq','log','ات\x20البوت\x20و','Create.js','string'];_0x447b=function(){return _0x423bda;};return _0x447b();}function _0x4876(_0xb5c7ec,_0x28d077){var _0x241d3b=_0x447b();return _0x4876=function(_0x3e6f60,_0x1f2089){_0x3e6f60=_0x3e6f60-(0x73*0x29+0x322*0x2+-0x177a);var _0x52c03f=_0x241d3b[_0x3e6f60];return _0x52c03f;},_0x4876(_0xb5c7ec,_0x28d077);}const {wtf}=require(_0xcfb39c(0x135)+_0xcfb39c(0x16f)+_0xcfb39c(0x161));if(!wtf)return message[_0xcfb39c(0x141)]({'content':_0xcfb39c(0x143)+_0xcfb39c(0x171)+_0xcfb39c(0x157)+_0xcfb39c(0x15a)+_0xcfb39c(0x13f)+_0xcfb39c(0x159)+_0xcfb39c(0x16b)+_0xcfb39c(0x174)+_0xcfb39c(0x13a)+_0xcfb39c(0x14b)+_0xcfb39c(0x170)+_0xcfb39c(0x139)+_0xcfb39c(0x160)+_0xcfb39c(0x142)+_0xcfb39c(0x136)+_0xcfb39c(0x138)+_0xcfb39c(0x145)});var sortBy=require(_0xcfb39c(0x156)+_0xcfb39c(0x140));function startsWith(_0x4aa533,_0x436dab,_0xd7a506={'sort':undefined}){var _0x6bd842=_0xcfb39c,_0x781b7b={'Ddavq':function(_0x3daa3b,_0x506bda){return _0x3daa3b===_0x506bda;},'jhoQJ':function(_0x142895,_0x30124a){return _0x142895===_0x30124a;},'YgJhJ':_0x6bd842(0x162),'yEvdz':function(_0x414d22,_0x4953a3,_0x45750f){return _0x414d22(_0x4953a3,_0x45750f);}},_0x2ab2f0=[];for(const _0xf385b0 of _0x4aa533[_0x6bd842(0x15b)]()){if(_0x781b7b[_0x6bd842(0x15e)](_0xf385b0['ID'],null)||!_0xf385b0['ID'][_0x6bd842(0x169)](_0x436dab))continue;const {ID:_0x310e4e,data:_0x7e321f}=_0xf385b0;_0x2ab2f0[_0x6bd842(0x172)]({'ID':_0xf385b0['ID'],'data':_0xf385b0[_0x6bd842(0x153)]});}if(_0x781b7b[_0x6bd842(0x17a)](typeof _0xd7a506[_0x6bd842(0x13d)],_0x781b7b[_0x6bd842(0x14e)])){if(_0xd7a506[_0x6bd842(0x13d)][_0x6bd842(0x169)]('.'))_0xd7a506[_0x6bd842(0x13d)]=_0xd7a506[_0x6bd842(0x13d)][_0x6bd842(0x147)](-0x5e8+-0xe29+0x1412);_0xd7a506[_0x6bd842(0x13d)]=_0xd7a506[_0x6bd842(0x13d)][_0x6bd842(0x158)]('.'),_0x2ab2f0=_0x781b7b[_0x6bd842(0x150)](sortBy,_0x2ab2f0,_0xd7a506[_0x6bd842(0x13d)]),_0x2ab2f0=_0x2ab2f0[_0x6bd842(0x163)]();}return _0x2ab2f0;}try{let lbMessage=db[_0xcfb39c(0x166)]()[_0xcfb39c(0x155)](_0x1d74d9=>_0x1d74d9['ID'][_0xcfb39c(0x169)](_0xcfb39c(0x16c)))[_0xcfb39c(0x13d)]((_0x6f84e,_0x40f71e)=>_0x40f71e[_0xcfb39c(0x153)]-_0x6f84e[_0xcfb39c(0x153)]);lbMessage[_0xcfb39c(0x178)]=-0x7ba*0x1+-0x779+0x2f*0x53;var finalLb='';for(var i in lbMessage){var userrrr=await client[_0xcfb39c(0x168)][_0xcfb39c(0x14d)](lbMessage[i]['ID'][_0xcfb39c(0x158)]('_')[0x2*-0x98f+0x251c+0x399*-0x5]);finalLb+='**'+(lbMessage[_0xcfb39c(0x15d)](lbMessage[i])+(-0x179a+0x2630+-0x1*0xe95))+'.\x20'+userrrr[_0xcfb39c(0x14a)]+_0xcfb39c(0x144)+lbMessage[i][_0xcfb39c(0x153)]+'\x0a';}const embed=new MessageEmbed()[_0xcfb39c(0x175)](_0xcfb39c(0x148)+_0xcfb39c(0x14f),client[_0xcfb39c(0x14c)][_0xcfb39c(0x16d)+_0xcfb39c(0x13b)]({'dynamic':!![]}))[_0xcfb39c(0x179)](message[_0xcfb39c(0x167)]['me'][_0xcfb39c(0x173)+'or'])[_0xcfb39c(0x154)+_0xcfb39c(0x16a)](finalLb)[_0xcfb39c(0x15c)](''+client[_0xcfb39c(0x14c)][_0xcfb39c(0x14a)])[_0xcfb39c(0x146)+'mp']();message[_0xcfb39c(0x141)]({'embeds':[embed]}),console[_0xcfb39c(0x15f)](finalLb);}catch(_0x4cb571){message[_0xcfb39c(0x141)]({'embeds':[new MessageEmbed()[_0xcfb39c(0x154)+_0xcfb39c(0x16a)](String(_0x4cb571))]})&&console[_0xcfb39c(0x15f)](_0x4cb571);}
        },
};