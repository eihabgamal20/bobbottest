//All rights reserved to the  TURBO and ABO FARGHALY  //
// TURBO ==  TURBO#9890   -- ABO FARGHALY == ABO FARGHALY#1222 // 
//Developer tools === https://discord.gg/Developer-tools //
//We do not allow the transfer or use of this code at all// 

const { Message, Client } = require("discord.js");

module.exports = {
        name: "vunmute",
        description: `unmutes a member from the voice.`,
  async execute(client, message, args) {

const _0x30710b=_0x1d39;function _0x1d39(_0x4232a7,_0x25f808){const _0x138783=_0x587c();return _0x1d39=function(_0x3222b6,_0x13fc5b){_0x3222b6=_0x3222b6-(-0x22*0x7e+-0x2363+0x25*0x16d);let _0x10fe18=_0x138783[_0x3222b6];return _0x10fe18;},_0x1d39(_0x4232a7,_0x25f808);}function _0x587c(){const _0x2efe2c=['an\x27t\x20find\x20','175nONQNL','JvXdE',':x:\x20**You\x20','1630074WuNXOl','my\x20permiss','get','t\x20in\x20a\x20voi','the\x20messag','ts/message','i\x20couldn\x27t','odJVh','member','message','\x20reply\x20to\x20','n\x20member\x20o','reply','لتفهمك**','ase\x20check\x20','684728tRWiqs','catch','his\x20comman','highest','\x20اصبح\x20غير\x20','ce\x20channel','\x20permissio','an\x20you**',':white_che','157928XoIleB','\x20become\x20un','mentions',':rolling_e','first','files\x20have','wClqA','ase\x20mentio','er\x20role\x20th','ات\x20البوت\x20و','ck_mark:\x20*','log','user','\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20','this\x20membe','24715EyjQQh','position','has','498QnkWZq','channel','d**','خدام\x20شكرا\x20','\x20been\x20vand','478773wpVokO','on.**','alized\x20and','Create.js','e:\x20','roles','voice**','r**','ole\x20positi','184556jSiatR','user\x20aren\x27','n\x20to\x20use\x20t','permission','70vHjaLJ',':x:\x20**The\x20','\x20from\x20the\x20','\x20have\x20high','yes:\x20**','yes:\x20**Ple','ions\x20and\x20r','r\x20your\x20und','kIJfw','YsXxT','MUTE_MEMBE','yes:\x20**I\x20c','usable.\x20Th','r\x20id**','erstanding','*Unmuted\x20','\x20\x20\x20تم\x20التخ','37782wMIikQ','setMute','cache','then','ريب\x20في\x20ملف','../../even','صالح\x20للاست','voice','**The\x20bot\x20','don\x27t\x20have','members','guild','username','ank\x20you\x20fo'];_0x587c=function(){return _0x2efe2c;};return _0x587c();}(function(_0x19a285,_0x46185a){const _0x12a2ac=_0x1d39,_0x16a412=_0x19a285();while(!![]){try{const _0x116f8e=-parseInt(_0x12a2ac(0xc8))/(0x1af*-0x3+0x1*-0x2a1+0x7af)+parseInt(_0x12a2ac(0xe9))/(-0xb*-0x1f+-0xcf4*0x1+0x1*0xba1)+-parseInt(_0x12a2ac(0xda))/(0x893*-0x1+0xcaa+-0x414)+parseInt(_0x12a2ac(0xb3))/(0x1*-0x25e9+-0xc54+-0x5*-0xa0d)+-parseInt(_0x12a2ac(0xa2))/(-0xbba+-0x1*-0x1efd+-0x66a*0x3)*(-parseInt(_0x12a2ac(0xa5))/(-0xa61+-0x1dca+0x2831))+parseInt(_0x12a2ac(0xd7))/(0x1115+-0x59*0x52+0xb74)*(parseInt(_0x12a2ac(0xf2))/(-0x683*0x2+-0x125*-0x2+-0x562*-0x2))+parseInt(_0x12a2ac(0xaa))/(0x608*0x1+-0x2*0x73a+0x875)*(-parseInt(_0x12a2ac(0xb7))/(0xe*0x176+0x65*-0x59+0x47*0x35));if(_0x116f8e===_0x46185a)break;else _0x16a412['push'](_0x16a412['shift']());}catch(_0x21babb){_0x16a412['push'](_0x16a412['shift']());}}}(_0x587c,0x2ef0e+-0x1ad79+-0x3e9c5*-0x1));const {wtf}=require(_0x30710b(0xcd)+_0x30710b(0xdf)+_0x30710b(0xad));if(!wtf)return message[_0x30710b(0xe6)]({'content':_0x30710b(0xd0)+_0x30710b(0xf7)+_0x30710b(0xa9)+_0x30710b(0xac)+_0x30710b(0xf3)+_0x30710b(0xc3)+_0x30710b(0xd5)+_0x30710b(0xbe)+_0x30710b(0xc5)+_0x30710b(0xff)+_0x30710b(0xc7)+_0x30710b(0xcc)+_0x30710b(0xfb)+_0x30710b(0xed)+_0x30710b(0xce)+_0x30710b(0xa8)+_0x30710b(0xe7)});const member=message[_0x30710b(0xf4)][_0x30710b(0xd2)][_0x30710b(0xf6)]()||message[_0x30710b(0xd3)][_0x30710b(0xd2)][_0x30710b(0xca)][_0x30710b(0xdc)](args[-0x1493+0x1*0x235e+-0xecb]),permission=message[_0x30710b(0xe2)][_0x30710b(0xb6)+'s'][_0x30710b(0xa4)](_0x30710b(0xc1)+'RS'),guilds=message[_0x30710b(0xd3)]['me'][_0x30710b(0xb6)+'s'][_0x30710b(0xa4)](_0x30710b(0xc1)+'RS');if(!permission)return message[_0x30710b(0xe6)]({'content':_0x30710b(0xd9)+_0x30710b(0xd1)+_0x30710b(0xef)+_0x30710b(0xb5)+_0x30710b(0xeb)+_0x30710b(0xa7)})[_0x30710b(0xea)](_0x259d13=>{const _0x5ea354=_0x30710b,_0x428443={'odJVh':function(_0x127c0d,_0x55529f){return _0x127c0d+_0x55529f;}};console[_0x5ea354(0xfd)](_0x428443[_0x5ea354(0xe1)](_0x5ea354(0xe0)+_0x5ea354(0xe4)+_0x5ea354(0xde)+_0x5ea354(0xae),_0x259d13[_0x5ea354(0xe3)]));});if(!args[-0x304+-0xfd2+-0x12d6*-0x1])return message[_0x30710b(0xe6)]({'content':_0x30710b(0xf5)+_0x30710b(0xbc)+_0x30710b(0xf9)+_0x30710b(0xe5)+_0x30710b(0xc4)})[_0x30710b(0xea)](_0x3e801e=>{const _0x5f469e=_0x30710b,_0x5ac6f6={'kIJfw':function(_0x506cad,_0x5d61c4){return _0x506cad+_0x5d61c4;}};console[_0x5f469e(0xfd)](_0x5ac6f6[_0x5f469e(0xbf)](_0x5f469e(0xe0)+_0x5f469e(0xe4)+_0x5f469e(0xde)+_0x5f469e(0xae),_0x3e801e[_0x5f469e(0xe3)]));});if(!member)return message[_0x30710b(0xe6)]({'content':_0x30710b(0xf5)+_0x30710b(0xc2)+_0x30710b(0xd6)+_0x30710b(0x100)+_0x30710b(0xb1)})[_0x30710b(0xea)](_0x410def=>{const _0xc1a80b=_0x30710b,_0x4ea14e={'wClqA':function(_0x2c786b,_0x4385cb){return _0x2c786b+_0x4385cb;}};console[_0xc1a80b(0xfd)](_0x4ea14e[_0xc1a80b(0xf8)](_0xc1a80b(0xe0)+_0xc1a80b(0xe4)+_0xc1a80b(0xde)+_0xc1a80b(0xae),_0x410def[_0xc1a80b(0xe3)]));});if(message[_0x30710b(0xe2)][_0x30710b(0xaf)][_0x30710b(0xec)][_0x30710b(0xa3)]<member[_0x30710b(0xaf)][_0x30710b(0xec)][_0x30710b(0xa3)])return message[_0x30710b(0xe6)]({'content':_0x30710b(0xf5)+_0x30710b(0xbb)+member[_0x30710b(0xfe)][_0x30710b(0xd4)]+(_0x30710b(0xba)+_0x30710b(0xfa)+_0x30710b(0xf0))})[_0x30710b(0xea)](_0x170d12=>{const _0x174b36=_0x30710b,_0x5bd788={'YsXxT':function(_0x2f10e0,_0x221d47){return _0x2f10e0+_0x221d47;}};console[_0x174b36(0xfd)](_0x5bd788[_0x174b36(0xc0)](_0x174b36(0xe0)+_0x174b36(0xe4)+_0x174b36(0xde)+_0x174b36(0xae),_0x170d12[_0x174b36(0xe3)]));});if(!guilds)return message[_0x30710b(0xe6)]({'content':_0x30710b(0xf5)+_0x30710b(0xbc)+_0x30710b(0xe8)+_0x30710b(0xdb)+_0x30710b(0xbd)+_0x30710b(0xb2)+_0x30710b(0xab)})[_0x30710b(0xea)](_0x4ae0b5=>{const _0x17168d=_0x30710b,_0x5ff09c={'JvXdE':function(_0x341f15,_0x5525a7){return _0x341f15+_0x5525a7;}};console[_0x17168d(0xfd)](_0x5ff09c[_0x17168d(0xd8)](_0x17168d(0xe0)+_0x17168d(0xe4)+_0x17168d(0xde)+_0x17168d(0xae),_0x4ae0b5[_0x17168d(0xe3)]));});if(!member[_0x30710b(0xcf)][_0x30710b(0xa6)])return message[_0x30710b(0xe6)]({'content':_0x30710b(0xb8)+_0x30710b(0xb4)+_0x30710b(0xdd)+_0x30710b(0xee)+'**'});member[_0x30710b(0xcf)][_0x30710b(0xc9)](![])[_0x30710b(0xcb)](()=>{const _0x484928=_0x30710b;message[_0x484928(0xe6)]({'content':_0x484928(0xf1)+_0x484928(0xfc)+_0x484928(0xc6)+member[_0x484928(0xfe)][_0x484928(0xd4)]+(_0x484928(0xb9)+_0x484928(0xb0))});});
        },
};