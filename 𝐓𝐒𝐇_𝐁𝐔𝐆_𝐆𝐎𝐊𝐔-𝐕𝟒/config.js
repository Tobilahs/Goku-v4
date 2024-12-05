//my secript by MR KÉVIN TSH Goku v4
//not sale this script

require("./database/module")

//GLOBAL PAYMENT
global.storename = "ཀ͜͡B̈ÜG̈_̈G̈ÖK̈Ü V̈4̈👾༑"
global.dana = "243890432038"
global.qris = "https://i.postimg.cc/VsWWH3gY/TSH-BUG-GOKU-V4.jpg"


// GLOBAL SETTING
global.owner = "243890432039"
global.namabot = "ཀ͜͡B̈ÜG̈_̈G̈ÖK̈Ü V̈4̈👾༑"
global.nomorbot = "243890432039"
global.nameCreator = "🌹𝗠𝗥 𝗞𝗘́𝗩𝗜𝗡 𝗧𝗦𝗛 𝗚𝗥𝗜𝗠𝗠🌹"
global.linkyt = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.autoJoin = false
global.antilink = true
global.versisc = '30'

// DELAY JPM
global.delayjpm = 5500



//GLOBAL THUMB

global.codeInvite = ""
global.imageurl = 'https://i.postimg.cc/VsWWH3gY/TSH-BUG-GOKU-V4.jpg'
global.isLink = "https://whatsapp.com/channel/0029VajjpHoGZNCsyVLRRk1f"
global.packname = "ཀ͜͡B̈ÜG̈_̈G̈ÖK̈Ü V̈4̈👾༑"
global.author = "🌹𝗠𝗥 𝗞𝗘́𝗩𝗜𝗡 𝗧𝗦𝗛🌹"
global.jumlah = "5"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})