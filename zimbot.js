
// ⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈⧈
//▮ZED BOT INC 2022 ®️ALL RIGHTS RESERVED
//▮
//▮FORK AND DON'T FORGET TO GIVE A STAR
//▮
//▮THIS SOFTWARE IS UNDER Team-263 COPYRIGHT
//▮
//▮REPORT ABUSE OF THIS SOFTWARE EMAIL US
//▮ethical.hacker263@gmail.com
//▮WHATSAPP US : +263 7186 35356
//▮YOUTUBE CHANNELL: https://www.youtube.com/c/Team263Hacks
//▮
//╰▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
//
//┏━━━━━━━━━━━━━━━━━━━━━━━━━
//┃THIS SOFTWARE INCLUDES 
//┃SOME ENCRYPTED FILES
//┃
//┃THANKS FOR CHOOSING ZeD-BOT
//┃THANKS TO SHINNON A. MUMVUMBI
//┗━━━━━━━━━━━━━━━━━━━━━━━━━
//




process.on('uncaughtException', console.error) //Safe Log Error

require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, PresenceUpdate, Presence, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const cheerio = require('cheerio')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const google = require('google-it')
const os = require('os')
const hx = require('hxz-api')
const mel = require('kitsune-api')
const xa = require('xfarr-api')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const { limitAdd, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit")
const _limitOrg = JSON.parse(fs.readFileSync('./database/limit.json'))
const level = require('./lib/level')
const { mediafireDl } = require('./lib/mediafire.js')
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const ZeD_BOT = JSON.parse(fs.readFileSync('./database/zimbot.json'))

//apikeys zvibhorani izvi
const setting = JSON.parse(fs.readFileSync('./apikey.json'))

//buat info zvibhorani zivi
limitawal = '100'
botname = 'ZED BOT INC'
wm = 'ZED BOT INC'
limitCount = setting.limit

//read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []

let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
const limit = JSON.parse(fs.readFileSync('./database/limit.json'))
const antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
const antilinkyt = JSON.parse(fs.readFileSync('./database/antilinkyt.json'))
const antibule = JSON.parse(fs.readFileSync('./database/antibule.json'))
const balance = JSON.parse(fs.readFileSync('./database/balance.json'))
const premium = JSON.parse(fs.readFileSync('./database/premium.json'))
const _level = JSON.parse(fs.readFileSync('./database/level.json'))
const banned = JSON.parse(fs.readFileSync('./database/banned.json'))
const dripsantiyt = JSON.parse(fs.readFileSync('./database/antiytchannel.json'))
const dripsantiig = JSON.parse(fs.readFileSync('./database/antiinsta.json'))
const  dripsantitwt = JSON.parse(fs.readFileSync('./database/antitwitter.json'))
const  dripsantifb = JSON.parse(fs.readFileSync('./database/antifb.json'))
const  dripsantitik = JSON.parse(fs.readFileSync('./database/antitiktok.json'))
const  dripsantitele = JSON.parse(fs.readFileSync('./database/antitelegram.json'))
const antilinkall  = JSON.parse(fs.readFileSync('./database/antilinkall.json'))
const  dripsantivid  = JSON.parse(fs.readFileSync('./database/antitelegram.json'))
const ntilinkytvid  = JSON.parse(fs.readFileSync('./database/antilinkall.json'))
const dripsanti = JSON.parse(fs.readFileSync('./lib/rude.json'))
let bad = JSON.parse(fs.readFileSync('./lib/rude.json'))


//////created by ZeD-BOT-INC

module.exports = ZimBotInc = async (ZimBotInc, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await ZimBotInc.decodeJid(ZimBotInc.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const sender = m.sender
        const from = m.chat
        const isBan = banned.includes(m.sender)
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
        
	
        //────────────────────[ GROUP ]────────────────────
        const groupMetadata = m.isGroup ? await ZimBotInc.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAntiwame = m.isGroup ? antiwame.includes(m.chat) : false
        const isAntiVirtex = m.isGroup ? _antivirtex.includes(m.chat) : false
        const isAntilinkyt = m.isGroup ? antilinkyt.includes(m.chat) : false
        const isAntibule = m.isGroup ? antibule.includes(m.chat) : false
        const antiToxic = m.isGroup ? dripsanti.includes(from) : false
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
        const isAntiLinkYoutubeChannel = m.isGroup ? dripsantiyt.includes(m.chat) : false
        const isAntiLinkInstagram = m.isGroup ? dripsantiig.includes(m.chat) : false
        const isAntiLinkFacebook = m.isGroup ? dripsantifb.includes(m.chat) : false
        const isAntiLinkTiktok = m.isGroup ? dripsantitik.includes(m.chat) : false
        const isAntiLinkTelegram = m.isGroup ? dripsantitele.includes(m.chat) : false
        const isAntiLinkTwitter = m.isGroup ? dripsantitwt.includes(m.chat) : false
        const isAntiLinkAll = m.isGroup ? antilinkall.includes(m.chat) : false
        

        
        
        
        
        
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
         
//tanggalan e alya

const timuu = moment.tz('Africa/Harare').format('HH:mm:ss')
const hariRaya = new Date('Apr 02, 2022 01:45:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var ikiya = date.getMonth()
var gakroh = date.getDate();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
    case 0: hari = "MONDAY"; //limitAdd(sender, limit)
    break;
    case 1: hari = "TUESDAY"; //limitAdd(sender, limit)
    break;
    case 2: hari = "WEDNESDAY"; //limitAdd(sender, limit)
    break;
    case 3: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 4: hari = "THURSDAY"; //limitAdd(sender, limit)
    break;
    case 5: hari = "SATURDAY"; //limitAdd(sender, limit)
    break;
    case 6: hari = "SUNDAY"; //limitAdd(sender, limit)
    break;
    }
    switch(bulan1) {
    case 0: bulan1 = "January"; //limitAdd(sender, limit)
    break;
    case 1: bulan1 = "February"; //limitAdd(sender, limit)
    break;
    case 2: bulan1 = "March"; //limitAdd(sender, limit)
    break;
    case 3: bulan1 = "Aprill"; //limitAdd(sender, limit)
    break;
    case 4: bulan1 = "May"; //limitAdd(sender, limit)
    break;
    case 5: bulan1 = "June"; //limitAdd(sender, limit)
    break;
    case 6: bulan1 = "July"; //limitAdd(sender, limit)
    break;
    case 7: bulan1 = "August"; //limitAdd(sender, limit)
    break;
    case 8: bulan1 = "September"; //limitAdd(sender, limit)
    break;
    case 9: bulan1 = "October"; //limitAdd(sender, limit)
    break;
    case 10: bulan1 = "November"; //limitAdd(sender, limit)
    break;
    case 11: bulan1 = "December"; //limitAdd(sender, limit)
    break;
    }
    switch(gakroh) {
    case 0: gakroh = "sacred"; //limitAdd(sender, limit)
    break;
    case 1: gakroh = "safari"; //limitAdd(sender, limit)
    break;
    case 2: gakroh = "rabi'ul-awal"; //limitAdd(sender, limit)
    break;
    case 3: gakroh = "rabi'ul-akhir"; //limitAdd(sender, limit)
    break;
    case 4: gakroh = "syawal"; //limitAdd(sender, limit)
    break;
    case 5: gakroh = "jumadil-akhir"; //limitAdd(sender, limit)
    break;
    case 6: gakroh = "rejab"; //limitAdd(sender, limit)
    break;
    case 7: gakroh = "syaaban"; //limitAdd(sender, limit)
    break;
    case 8: gakroh = "ramadan"; //limitAdd(sender, limit)
    break;
    case 9: gakroh = "early friday"; //limitAdd(sender, limit)
    break;
    }
    var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
    var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   
    myMonths = ["January","February","March","Aprill","May","June","July","August","September","October","November","December"];
    myDays = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    myDoms = ["sacred","safari","first ribal","last ribal","syawal","late Friday","rejab","syaaban","ramadan","early friday"];
    var tgl = new Date();
    detik = tgl.getSeconds();
    menit = tgl.getMinutes();
    jam = tgl.getHours();
    var ampm = jam >= 12 ? 'PM' : 'AM';
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
    thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`
    
// UCAPAN LEMBUT
const time2 = moment().tz('Africa/Harare').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapannya2 = `Good Night 🌒`
}
if(time2 < "19:00:00"){
var ucapannya2 = `Good Evening🌙`
}
if(time2 < "18:00:00"){
var ucapannya2 = `Good Evening 🌅`
}
if(time2 < "15:00:00"){
var ucapannya2 = `Good Day 🌞`
}
if(time2 < "10:00:00"){
var ucapannya2 = `Good morning 🌄`
}
if(time2 < "05:00:00"){
var ucapannya2 = `Good morning 🌅`
}

var _0x10f373=_0x3e30;function _0x3e30(_0x20a962,_0xfdc4e2){var _0x59aa1f=_0x59aa();return _0x3e30=function(_0x3e30a6,_0x2d2799){_0x3e30a6=_0x3e30a6-0x9e;var _0xc32f23=_0x59aa1f[_0x3e30a6];return _0xc32f23;},_0x3e30(_0x20a962,_0xfdc4e2);}function _0x59aa(){var _0x2d09e9=['225656kDPSec','263718635356','reactmoji','996690JsMZbL','11081cnJcNA','🇿🇼','2MXuZUa','57245LtlNrA','13008580hIjOCs','2550987CqzHqP','1616zNjLPs','6mYAOrx','263718635356','263718635356','1681014qLKDBY','bothelp'];_0x59aa=function(){return _0x2d09e9;};return _0x59aa();}(function(_0x25d342,_0x5265c9){var _0x2985fa=_0x3e30,_0x35d609=_0x25d342();while(!![]){try{var _0x36987=-parseInt(_0x2985fa(0xac))/0x1*(-parseInt(_0x2985fa(0xab))/0x2)+parseInt(_0x2985fa(0xa0))/0x3*(-parseInt(_0x2985fa(0xa5))/0x4)+-parseInt(_0x2985fa(0xa8))/0x5+-parseInt(_0x2985fa(0xa3))/0x6+-parseInt(_0x2985fa(0xa9))/0x7*(parseInt(_0x2985fa(0x9f))/0x8)+-parseInt(_0x2985fa(0x9e))/0x9+parseInt(_0x2985fa(0xad))/0xa;if(_0x36987===_0x5265c9)break;else _0x35d609['push'](_0x35d609['shift']());}catch(_0x522621){_0x35d609['push'](_0x35d609['shift']());}}}(_0x59aa,0x27aff),global['botdev']=[_0x10f373(0xa2),_0x10f373(0xa1)],global[_0x10f373(0xa4)]=[_0x10f373(0xa6)],global[_0x10f373(0xa7)]=_0x10f373(0xaa));

//function rpg
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   

// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))
 let monay = JSON.parse(fs.readFileSync('./storage/user/monay.json'))

// random 

let mealya = fs.readFileSync('./lib/namaku.js')
jsonLiya = JSON.parse(mealya)
randIndex = Math.floor(Math.random() * jsonLiya.length)
randek = jsonLiya[randIndex];

// Random Image Simple Menu

        let picaks = [flaming,fluming,flarun,flasmurf,mehk,awog,mohai,mhehe]
		let picak = picaks[Math.floor(Math.random() * picaks.length)] 	
		
// ajajajakakk				
 						
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
                if (!('antilink' in chats)) chats.antilink = false
                if (!('antilinkyt' in chats)) chats.antilinkyt = false
                
                if (!('wame' in chats)) chats.wame = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
                wame: false,
                antilink: false,
                antilinkyt: false,
            }
            const reactionMessage = {
                react: {
                    text: args[0],
                    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                }
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateLocation' in setting)) setting.templateLocation = false
		if (!('templateGif' in setting)) setting.templateGif = true
		if (!('templateMsg' in setting)) setting.templateMsg = false
        if (!('templateList' in setting)) setting.templateList = false
        if (!('templateDoc' in setting)) setting.templateDoc = false
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: false,
		templateLocation: false,
		templateGif: true,
		templateMsg: false,
		templateList: false,
		templateDoc: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	    
        //────────────────────[ PUBLIC & SELF ]────────────────────
        if (!ZimBotInc.public) {
            if (!m.key.fromMe) return
        }
    
        if (global.autoreadpmngc) {
            if (command) {
            await ZimBotInc.sendPresenceUpdate('composing', m.chat)
            ZimBotInc.sendReadReceipt(from, m.sender, [m.key.id])}
        }

            if (global.autoRecord) { if (m.chat) { ZimBotInc.sendPresenceUpdate('recording', m.chat) }
        }
        // Push Message To Console && Auto Read
        if (m.message) {
            ZimBotInc.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.blue(chalk.bgWhite('ZeD-BOT')), chalk.whiteBright(chalk.bgRed(new Date)), chalk.black(chalk.bgRed(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.bgYellowBright(pushname), chalk.bgGray(m.sender) + '\n' + chalk.bgCyanBright('RECIEVED'), chalk.yellowBright(m.isGroup ? pushname : 'DM', m.chat))
        }
	
	//Auto reset
  //Jika bot on di jam 24.00 maka limit dan darah bakal reset
  //Kalo off yaa kaga, Harus tunggu besok :v    
  let cron = require('node-cron')
     cron.schedule('0 0 * * *', () => {
     const reset = []
     _limit = reset
     console.log('Limit  reset')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     console.log('Success!')
    }, 
    {
      scheduled: true,
      timezone: 'Africa/Harare'
     }
    )
//thum
vide = await getBuffer(global.vid)

//downloader
const sendFile = async(link, type, options) => {
hasil = await getBuffer(link)
ZimBotInc.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
ZimBotInc.sendMessage(from, hasil, type, options).catch(e => {
ZimBotInc.sendMessage(from, { url : link }, type, options).catch(e => {
m.reply('ERROR [ ! ]')
console.log(e)
})
})
})
})
}

const reply = (teks) => {
            ZimBotInc.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": ` ${global.botname}`,"body": `SUBSCRIBE TO TEAM-263`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./ZeD-BOT/Hxcker-263.jpg`),"sourceUrl": `https://www.youtube.com/c/Team263Hacks`}}}, { quoted: m})
        }
//dokumen random
let doku = [f1,f2,f3,f4,f5,f6]
let feler = doku[Math.floor(Math.random() * doku.length)]
		
// limiter
const nebal = (angka) => {
return Math.floor(angka)
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}

// Monospace

function monospace(string) {
return '```' + abantyulidab+ '```'

} 



//────────────────────[ lvlig ]────────────────────
  
const levelRole = level.getLevelingLevel(m.sender, _level)
        var role = 'Warrior III'
        if (levelRole <= 5) {
            role = 'Warrior II'
        } else if (levelRole <= 10) {
            role = 'Warrior I'
        } else if (levelRole <= 15) {
            role = 'Elite III'
        } else if (levelRole <= 20) {
            role = 'Elite II'
        } else if (levelRole <= 25) {
            role = 'Elite I'
        } else if (levelRole <= 30) {
            role = 'Master III'
        } else if (levelRole <= 35) {
            role = 'Master II'
        } else if (levelRole <= 40) {
            role = 'Master I'
        } else if (levelRole <= 45) {
            role = 'GrandMaster III'
        } else if (levelRole <= 50) {
            role = 'GrandMaster II'
        } else if (levelRole <= 55) {
            role = 'GrandMaster I'
        } else if (levelRole <= 60) {
            role = 'Epic III'
        } else if (levelRole <= 65) {
            role = 'Epic II'
        } else if (levelRole <= 70) {
            role = 'Epic I'
        } else if (levelRole <= 75) {
            role = 'Legend III'
        } else if (levelRole <= 80) {
            role = 'Legend II'
        } else if (levelRole <= 85) {
            role = 'Legend I'
        } else if (levelRole <= 90) {
            role = 'Mythic'
        } else if (levelRole <= 95) {
            role = 'Mythical Glory' 
        } else if (levelRole >= 100) {
            role = 'Immortal'
        } else if (levelRole >= 120) {
            role = 'MVP'
        } 


        const _0xcd719e=_0x515e;(function(_0x3226f0,_0x48c245){const _0x47923a=_0x515e,_0xf755c8=_0x3226f0();while(!![]){try{const _0x4cd394=-parseInt(_0x47923a(0x133))/0x1*(parseInt(_0x47923a(0x106))/0x2)+-parseInt(_0x47923a(0x116))/0x3+-parseInt(_0x47923a(0x129))/0x4*(parseInt(_0x47923a(0x11a))/0x5)+parseInt(_0x47923a(0xfc))/0x6+parseInt(_0x47923a(0x11b))/0x7+parseInt(_0x47923a(0x139))/0x8+parseInt(_0x47923a(0x13a))/0x9;if(_0x4cd394===_0x48c245)break;else _0xf755c8['push'](_0xf755c8['shift']());}catch(_0x44e216){_0xf755c8['push'](_0xf755c8['shift']());}}}(_0x160e,0x65cc1));if(isAntiLinkInstagram){if(budy['includes'](_0xcd719e(0x115))){if(!isBotAdmins)return;zimbotv3=_0xcd719e(0x12b);if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m[_0xcd719e(0x13d)]['fromMe'])return m['reply'](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138)),ZimBotInc[_0xcd719e(0x11c)](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x101),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(isAntiLinkFacebook){if(budy[_0xcd719e(0x111)]('https://facebook.com/')){if(!isBotAdmins)return;zimbotv3=_0xcd719e(0xfd);if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m['key'][_0xcd719e(0x10c)])return m[_0xcd719e(0xf8)](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc['groupParticipantsUpdate'](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138)),ZimBotInc[_0xcd719e(0x11c)](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x118),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}function _0x515e(_0x12e25d,_0x4bef6d){const _0x160e52=_0x160e();return _0x515e=function(_0x515e15,_0x2a2464){_0x515e15=_0x515e15-0xf8;let _0x2ada06=_0x160e52[_0x515e15];return _0x2ada06;},_0x515e(_0x12e25d,_0x4bef6d);}if(isAntiLinkTelegram){if(budy[_0xcd719e(0x111)](_0xcd719e(0x117))){if(isAntiLinkTelegram){if(!isBotAdmins)return;}zimbotv3=_0xcd719e(0x11e);if(isAdmins)return m['reply'](zimbotv3);if(m[_0xcd719e(0x13d)][_0xcd719e(0x10c)])return m['reply'](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m['chat'],[kice],_0xcd719e(0x138)),ZimBotInc['sendMessage'](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+'\x20*I\x20said\x20no\x20telegram\x20links\x20here\x20okay,\x20now\x20get\x20out*','contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(isAntiLinkTiktok){if(budy[_0xcd719e(0x111)](_0xcd719e(0x13c))){if(!isBotAdmins)return;zimbotv3='*▊▊▊DETECTED▊▊▊*\x0a\x0a*you\x20are\x20bot\x20admin\x20okay*';if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m['key'][_0xcd719e(0x10c)])return m[_0xcd719e(0xf8)](zimbotv3);if(isCreator)return m['reply'](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138)),ZimBotInc[_0xcd719e(0x11c)](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x130),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(isAntiLinkTwitter){if(budy['includes'](_0xcd719e(0xfb))){if(!isBotAdmins)return;zimbotv3='*▊▊▊DETECTED▊▊▊*\x0a\x20*you\x20are\x20bot\x20admin\x20okay*';if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m[_0xcd719e(0x13d)][_0xcd719e(0x10c)])return m['reply'](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m['chat'],[kice],_0xcd719e(0x138)),ZimBotInc[_0xcd719e(0x11c)](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x121),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(isAntiLinkAll){if(budy[_0xcd719e(0x111)](_0xcd719e(0x131))){if(!isBotAdmins)return;zimbotv3='*▊▊▊DETECTED▊▊▊*\x0a\x20*you\x20are\x20bot\x20admin\x20okay*';if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m[_0xcd719e(0x13d)]['fromMe'])return m[_0xcd719e(0xf8)](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138)),ZimBotInc[_0xcd719e(0x11c)](m[_0xcd719e(0x104)],{'text':_0xcd719e(0x10d)+kice['split']('@')[0x0]+_0xcd719e(0x103),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(m['mtype']==_0xcd719e(0x137)){if(!db[_0xcd719e(0x123)][_0xcd719e(0x120)][m[_0xcd719e(0x104)]][_0xcd719e(0x125)])return;teks='*▊▊▊DETECTED\x20ONCE▊▊▊*\x0a\x0a\x20',ZimBotInc[_0xcd719e(0xf9)](m[_0xcd719e(0x104)],teks,m),await sleep(0x1f4),m[_0xcd719e(0xfa)](m['chat'],!![],{'readViewOnce':!![]})[_0xcd719e(0x109)](_0x2d6bb3=>reply(_0xcd719e(0x134)));}if(isAntiLinkYoutubeChannel){if(budy[_0xcd719e(0x111)](_0xcd719e(0x105))){if(!isBotAdmins)return;zimbotv3='*▊▊▊DETECTED▊▊▊*\x0a*you\x20are\x20admin\x20okay*';if(isAdmins)return m[_0xcd719e(0xf8)](zimbotv3);if(m[_0xcd719e(0x13d)][_0xcd719e(0x10c)])return m[_0xcd719e(0xf8)](zimbotv3);if(isCreator)return m[_0xcd719e(0xf8)](zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],'remove'),ZimBotInc['sendMessage'](from,{'text':_0xcd719e(0x10f)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x122),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}function _0x160e(){const _0x18876b=['repeat','https://www.tiktok.com/','key','reply','sendTextWithMentions','copyNForward','https://twitter.com/','1387404OaZcyn','*▊▊▊DETECTED▊▊▊*\x0a\x0a*you\x20are\x20admin\x20okay*','split','*▊▊▊\x20ANTIBULE\x20▊▊▊*\x0a\x0a*Sorry\x20','length','\x20*I\x20said\x20no\x20ig\x20links\x20here\x20okay,\x20now\x20get\x20out*\x20','*sorry\x20I\x20didn\x27t\x20kick\x20you,\x20because\x20you\x20sent\x20the\x20link\x20of\x20this\x20group\x20lucky\x20you*','\x20*I\x20said\x20dont\x20send\x20any\x20links\x20okay*','chat','https://youtube.com/','10cNdPHO','\x20*Has\x20been\x20kicked\x20for\x20sending\x20the\x20youtube\x20link\x20in\x20this\x20group*','sender','catch','text','*whoa\x20you\x20are\x20\x20bot\x20creator\x20i\x20wont\x20kick\x20you\x20okay*','fromMe','*▊▊▊DETECTED▊▊▊*\x0a@','\x20will\x20kick\x20you\x20out\x20because\x20what\x20you\x20sent\x20is\x20a\x20youtube\x20link\x20in\x20this\x20group*','*▊▊▊DETECTED▊▊▊*\x0a\x0a@','test','includes','match','http://wa.me','Mark\x20as\x20read\x0a','https://www.instagram.com/','156180meAKYP','https://t.me/','\x20*I\x20said\x20no\x20fb\x20links\x20here\x20okay,\x20now\x20get\x20out*','yellow','589845XNvhtG','3455585fXFtzz','sendMessage','log','*▊▊▊DETECTED▊▊▊*\x0a*you\x20are\x20admin\x20okay*','chat.whatsapp.com','chats','\x20*I\x20said\x20no\x20twittwer\x20link\x20here\x20okay,\x20now\x20get\x20out*','\x20*I\x20said\x20no\x20yt\x20links\x20here\x20okay,\x20now\x20get\x20out*','data','\x20*I\x20said\x20no\x20links\x20okay,\x20now\x20get\x20out*','antionce','antilink','groupParticipantsUpdate','then','12dVOVYs','\x20will\x20kick\x20you\x20out\x20because\x20you\x20are\x20a\x20stranger\x20in\x20this\x20group*','*▊▊▊DETECTED▊▊▊*\x0a\x0a*you\x20are\x20admn\x20okay*','+212','*▊▊▊\x20ANTILINK\x20▊▊▊*\x0a\x0a*You\x20have\x20been\x20detected\x20sending\x20a\x20group\x20link,\x20sorry\x20you\x20will\x20be\x20kicked!*','*▊▊▊\x20ANTILINK\x20▊▊▊*\x0a\x0a@','https://nando.com','\x20*I\x20said\x20no\x20tiktok\x20links\x20here\x20okay,\x20now\x20get\x20out*','https','*Ehh\x20sorry\x20you\x20admin*','149001UKWjdH','*I\x20opened\x20it\x20by\x20force*','*BOT\x20MUST\x20BE\x20ADMIN\x20OKAY*','\x20*You\x20shouldn\x27t\x20be\x20in\x20this\x20group*','viewOnceMessage','remove','2394000psdmAC','4894146jtWTnh'];_0x160e=function(){return _0x18876b;};return _0x160e();}if(db[_0xcd719e(0x123)][_0xcd719e(0x120)][m['chat']][_0xcd719e(0x126)]){if(budy[_0xcd719e(0x112)](_0xcd719e(0x11f))){m[_0xcd719e(0xf8)](_0xcd719e(0x12d));if(!isBotAdmins)return m[_0xcd719e(0xf8)]('*Bbot\x20must\x20be\x20admin\x20okay*');let gclink='https://chat.whatsapp.com/'+await ZimBotInc['groupInviteCode'](m[_0xcd719e(0x104)]),isLinkThisGc=new RegExp(gclink,'i'),isgclink=isLinkThisGc[_0xcd719e(0x110)](m[_0xcd719e(0x10a)]);if(isgclink)return m[_0xcd719e(0xf8)](_0xcd719e(0x102));if(isAdmins)return m[_0xcd719e(0xf8)](_0xcd719e(0x132));if(isCreator)return m[_0xcd719e(0xf8)](_0xcd719e(0x10b));ZimBotInc[_0xcd719e(0x127)](m['chat'],[m[_0xcd719e(0x108)]],_0xcd719e(0x138));}}if(budy[_0xcd719e(0x100)]>0xdac){if(!m['isGroup'])return;if(!isAntiVirtex)return;if(groupAdmins)return;m[_0xcd719e(0xf8)](_0xcd719e(0x114)[_0xcd719e(0x13b)](0x12c)),m[_0xcd719e(0xf8)]('*▊▊▊DETECTED▊▊▊*\x0a\x0a*You\x20sent\x20a\x20virtex,\x20sorry\x20you\x20will\x20be\x20kicked\x20from\x20the\x20group*'),console[_0xcd719e(0x11d)](('[KICK]','red'),color('Received\x20a\x20text\x20virus!',_0xcd719e(0x119))),ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[m[_0xcd719e(0x108)]],_0xcd719e(0x138));}if(isAntiwame){if(budy[_0xcd719e(0x111)](_0xcd719e(0x113))){if(!isBotAdmins)return;zimbotv3=_0xcd719e(0xfd);if(isAdmins)return reply(zimbotv3);if(m[_0xcd719e(0x13d)][_0xcd719e(0x10c)])return reply(zimbotv3);if(isCreator)return reply(zimbotv3);kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138)),ZimBotInc['sendMessage'](from,{'text':'*▊▊▊DETECTED▊▊▊*\x0a\x0a@'+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x124),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(!isAntilinkyt){if(budy['includes'](_0xcd719e(0x12f))){if(!isBotAdmins)return m[_0xcd719e(0xf8)](_0xcd719e(0x135));m[_0xcd719e(0xf8)]('*▊▊▊\x20ANTIYT\x20▊▊▊*\x0a\x0a*SOrry\x20'+botname+_0xcd719e(0x10e));if(isAdmins)return m[_0xcd719e(0xf8)]('*Ehh\x20sorry\x20you\x20admin*');if(isCreator)return m[_0xcd719e(0xf8)](_0xcd719e(0x10b));kice=m['sender'],await ZimBotInc[_0xcd719e(0x127)](m['chat'],[kice],_0xcd719e(0x138))[_0xcd719e(0x128)](_0xc88701=>ads(jsonformat(_0xc88701)))[_0xcd719e(0x109)](_0x1d390f=>m['reply'](jsonformat(_0x1d390f))),ZimBotInc[_0xcd719e(0x11c)](m[_0xcd719e(0x104)],{'text':'*▊▊▊\x20ANTILINK\x20▊▊▊*\x0a\x0a@'+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x107),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}if(!isAntibule){if(m['sender']['includes'](_0xcd719e(0x12c))){if(!isBotAdmins)return m[_0xcd719e(0xf8)](_0xcd719e(0x135));m['reply'](_0xcd719e(0xff)+botname+_0xcd719e(0x12a));if(isAdmins)return m[_0xcd719e(0xf8)](_0xcd719e(0x132));if(isCreator)return m[_0xcd719e(0xf8)]('*whoa\x20you\x20are\x20\x20bot\x20creator\x20i\x20wont\x20kick\x20you\x20okay*');kice=m[_0xcd719e(0x108)],await ZimBotInc[_0xcd719e(0x127)](m[_0xcd719e(0x104)],[kice],_0xcd719e(0x138))[_0xcd719e(0x128)](_0x17d75d=>m[_0xcd719e(0xf8)](jsonformat(_0x17d75d)))[_0xcd719e(0x109)](_0x191cb3=>m[_0xcd719e(0xf8)](jsonformat(_0x191cb3))),ZimBotInc[_0xcd719e(0x11c)](m[_0xcd719e(0x104)],{'text':_0xcd719e(0x12e)+kice[_0xcd719e(0xfe)]('@')[0x0]+_0xcd719e(0x136),'contextInfo':{'mentionedJid':[kice]}},{'quoted':m});}}
    
// FUNCTION LEVELING

       if (m.isGroup && !level.isGained(m.sender) && !isCmd) {      
       try {
       level.addCooldown(m.sender)       
       const currentLevel = level.getLevelingLevel(m.sender, _level)
       const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)
       const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100
       level.addLevelingXp(m.sender, amountXp, _level)
       if (requiredXp <= level.getLevelingXp(m.sender, _level)) {
       level.addLevelingLevel(sender, 1, _level)
       const userLevel = level.getLevelingLevel(m.sender, _level)
       const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100
       rep = `*「 LEVEL UP 」*\n\n⬤ *Nama :* ${pushname}\n⬤ *Xp :* ${level.getLevelingXp(m.sender, _level)} / ${fetchXp}\n⬤ *Level :* ${currentLevel} -> ${level.getLevelingLevel(m.sender, _level)} 🆙 \n⬤ *Role*: *${role}*\n\nCongrats!! 🎉🎉`
       m.reply(`${rep}`)

      // client.sendMessage(from, gambare, image, {caption: `${rep}`, quoted: rip}).catch((err) => reply(`* terjadi kesalaahan,silahkan coba lagi nanti*`))
} 
       } catch (err) {
       console.error(err)
}
}        
                     
// FUNCTION LEVELING
for (let Hxcker263 of ZeD_BOT){
    if (budy === Hxcker263){
            result = fs.readFileSync(`./bgm/${Hxcker-263}.mp3`)
ZimBotInc.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4' , ptt: true }, { quoted: m})
}
}                        
	// auto set bio
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await ZimBotInc.setStatus(`${ZimBotInc.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = ZimBotInc.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "Choose Here","footerText": "𝐻𝑒𝑟𝑚𝑎𝑛 𝐶ℎ𝑎𝑛𝑒𝑙᭄𓅂","listType": "SINGLE_SELECT","sections": list, quoted:mek}}, {})
            return ZimBotInc.relayWAMessage(po, {waitForAck: true, quoted:mek})
        }
	    
	  // Anti Link
      
             
      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: ZimBotInc.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, ZimBotInc.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        ZimBotInc.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Give up!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            ZimBotInc.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'guess the song' }, type: 1 }], `🎮 Guess the Song 🎮\n\n*Correct answer Bonus +500 money🎉*\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await m.reply(`🎮 Math Quiz 🎮\n\n*Correct answer* 🎉\n\n*Want to play again? send* ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
             } else m.reply('*Wrong answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\n*Correct answer +500 money🎉*\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
9
        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nCorrect Answer +500 money🎉\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nCorrect Answer +500 money🎉\n*${deskripsi}*\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nCorrect Answer +500 money🎉\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nCorrect Answer +500 money🎉\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nCorrect Answer +500 money🎉\n\n*Want to play again? press the button below*`, ZimBotInc.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { // nek wayahku
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'Game has ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Type *give up* to give up and admit defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await ZimBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await ZimBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
	    ZimBotInc.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} reject the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    ZimBotInc.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) ZimBotInc.sendText(roof.p, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) ZimBotInc.sendText(roof.p2, `Please select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) ZimBotInc.sendText(m.chat, `*Neither player intends to play,\nSuit cancelled*`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    ZimBotInc.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} *don't choose suit, game over*`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /gunting/i
	    let b = /batu/i
	    let k = /kertas/i
	    let reg = /^(gunting|batu|kertas)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`*You have chosen* ${m.text} ${!roof.pilih2 ? `\n\n*Waiting for the opponent to choose*` : ''}`)
	    if (!roof.pilih2) ZimBotInc.sendText(roof.p2, '*_Your opponent has chosen_\nNow its your turn*', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`*You have chosen*${m.text} ${!roof.pilih ? `\n\n*Waiting for the opponent to choose*` : ''}`)
	    if (!roof.pilih) ZimBotInc.sendText(roof.p, '*_Your opponent has chosen_\nNow its your turn*', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    ZimBotInc.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
*Don't tag him!*
*He's in AFK* ${reason ? 'with reason ' + reason : 'no reason'}
Selama ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
AFK${user.afkReason ? ' with ' + user.afkReason : ''}
TIME ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
        switch(command) {
	    case 'afk': {
	    if (isBan) throw mess.ban
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        if (isBan) throw mess.ban
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw '*You are still in the game*'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('*Partners found!*')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

*Wait* @${room.game.currentTurn.split('@')[0]}

Type *give up* to give up and admit defeat`
            if (room.x !== room.o) await ZimBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await ZimBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('*Waiting for partner*' + (text ? ` *type the command below* ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            ZimBotInc.sendText(m.chat, `*Successfully delete the TicTacToe session*`, m)
            } else if (!this.game) {
            m.reply(`*Session TicTacToe🎮 does not exist*`)
            } else throw '?'
            } catch (e) {
            m.reply('*damaged*')
            }
            }
            break
            case 'suitpvp': case 'suit': {
            if (isBan) throw mess.ban
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`*Complete your previous suit*`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`*Can not play with yourself !*`)
            if (!m.mentionedJid[0]) return m.reply(`*_Who do you want to challenge?_\nTag the person..*\n\nEXAMPLE : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `*The person you are challenging is playing suit with someone else* :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PVP*_

@${m.sender.split`@`[0]} *challenge* @${m.mentionedJid[0].split`@`[0]} *to play suit*

Please @${m.mentionedJid[0].split`@`[0]}  *type accept/reject*`
            this.suit[id] = {
            chat: await ZimBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) ZimBotInc.sendText(m.chat, `*_suit time out_*`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
            case 'hunt': case 'hunting': {
                if (q.includes('--help')) return m.reply(examkosong) 
                 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
                 if (isCekDarah < 1) return m.reply('*Ur blood is gone, try to heal Using potions🌟*') 
                 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
                  let luka = ["*pierced by a thorn while hunting🌟*","*slipped into the abyss while hunting🌟*","*scratched by a wild animal🌟*","*not careful🌟*","*🌟entangled in roots*","*fall while hunting🌟*"]
                  let location = ["*Jungle💫*","*Amazon forest🌟*","*tropical forest🌟*","*Meadow🌟*","*African forest🌟*","*Mountains🌟*"]
                   var ikanmu = Math.ceil(Math.random() * 10)
                   var ayam = Math.ceil(Math.random() * 8)
                   var kelinci = Math.ceil(Math.random() * 7)
                   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
                   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
                   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
                   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
                   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
                   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
                   var lukanya = luka[Math.floor(Math.random() * luka.length)]
                   var lokasinya = location[Math.floor(Math.random() * location.length)]
                 if (lokasinya === 'Jungle') {
                    var image = './storage/image/rimba.jpg'
                   } else
                 if (lokasinya === 'Amazon forest') {
                    var image =  './storage/image/amazon.jpg'
                   } else
                 if (lokasinya === 'Tropical forest') {
                    var image = './storage/image/tropis.jpg'
                   } else
                 if (lokasinya === 'Meadow') {
                    var image = './storage/image/padang_rumput.jpg'
                   } else
                 if (lokasinya === 'African forest') {
                    var image = './storage/image/afrika.jpg'
                   } else
                 if (lokasinya === 'Mountains') {
                   var image = './storage/image/pegunungan.jpg'
                   }
                 setTimeout( () => {
                    let teksehmazeh = `❰ HUNT RESULT ❱\n`
                    teksehmazeh += `*🐟FISH🌟* : ${ikanmu}\n`
                    teksehmazeh += `*🐔CHICKEN🌟* : ${ayam}\n`
                    teksehmazeh += `*🐇RABBIT🌟* : ${kelinci}\n`
                    teksehmazeh += `*🐑SHEEP🌟* : ${domba}\n`
                    teksehmazeh += `*🐄COW🌟* : ${sapi}\n`
                    teksehmazeh += `*🐘ELEPHANT💫* : ${gajah}\n\n`
                    teksehmazeh += `❰ INFO ❱\n`
                    teksehmazeh += `*Location* : ${lokasinya}\n`
                    teksehmazeh += `*WOUNDS✨* : ${lukanya}, blood - 10\n`
                    teksehmazeh += `*REMAINING BLOOD ✨* : ${getDarah(m.sender)}\n`
                     let caption = ` ${teksehmazeh}\n`
                     let buttons = [
                         {
                          buttonId: `${prefix + command}`, 
                          buttonText: {
                           displayText: 'HUNT'
                         }, type: 1},
                       ]
                       let buttonMessage = {
                         image: { url: './storage/image/pegunungan.jpg' },
                         caption: caption,
                         footer: pushname,
                         buttons: buttons,
                         headerType: 4
                        }
                        ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
                 
                
                         
                  }, 5000)  
                 setTimeout( () => {
                  m.reply(`@${m.sender.split("@")[0]} Started Hunting In ${lokasinya}`)     
                  }, 1000) 
                 addIkan(m.sender, ikanmu) 
                   addAyam(m.sender, ayam) 
                   addKelinci(m.sender, kelinci)
                   addDomba(m.sender, domba)
                   addSapi(m.sender, sapi)
                  addGajah(m.sender, gajah)
                 kurangDarah(m.sender, 10)
                 }
 break
case 'sel': case 'sell':{
if (isBan) throw mess.ban
 if (!q) return  m.reply(`*What do you want to sell?*\nExample : ${prefix + command} fish 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'fish'){
 if (isIkan < anu) return m.reply('*Your fish is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} fish 2\n 1 fish = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover fish* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'chicken'){
 if (isAyam < anu) return m.reply('*Your chicken is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} chicken 2\n 1 chicken = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your Leftover Chicken* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'rabbit'){
 if (isKelinci < anu) return m.reply('*Your rabbit is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} rabbit 2\n 1 rabbit = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Rabbit* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sheep'){
 if (isDomba < anu) return m.reply('*You dont have enough sheep for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} sheep 2\n 1 sheep = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Sheep* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'cow'){
 if (isSapi < anu) return m.reply('*Your cow is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} cow 2\n 1 cow = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Cow* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'elephant'){
 if (isGajah < anu) return m.reply('*Your elephant is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} elephant 2\n 1 elephant = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Elephant* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'iron'){
 if (isBesi < anu) return m.reply('*Your iron is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} iron 2\n 1 iron = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Iron* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return m.reply('*Your iron is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} gold 2\n 1 gold = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Emas* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return m.reply('*Your iron is not enough for this transaction*')
 if (!args[1]) return m.reply(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  m.reply(`*Transaction successful ️*\n*your monay* : ${getMonay(m.sender)}\n*Your leftover Emerald* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { m.reply("*Wrong format!*") }

 }
 break 
case 'limituser':
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `⬤ *ID :* @${i.id.split("@")[0]}\n⬤ *Limit* : ${i.limit}\n`
     }
    ZimBotInc.sendTextWithMentions(m.chat, txt, m)      
  }
 break
case 'leaderboard':
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `*ID :* @${i.id.split("@")[0]}\n`
     txt += `*FISH* : ${i.ikan}\n`
     txt += `*CHICKEN* : ${i.ayam}\n`
     txt += `*RABBIT* : ${i.kelinci}\n`
     txt += `*SHEEP* : ${i.domba}\n`
     txt += `*COW* : ${i.sapi}\n`
     txt += `*ELEPHANT* : ${i.gajah}\n\n`
     }
    ZimBotInc.sendTextWithMentions(m.chat, txt, m)       
  }
 break
case 'mining': case 'mine':{
if (isBan) throw mess.ban
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return m.reply('*You Are exhausted!, try to heal using potions*') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ MINING RESULT ]\n*IRON* : ${besinya}\n*EMAS* : ${emasnya}\n*EMERALD* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'MINE'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  lah = `@${m.sender.split("@")[0]} *Start mining🎣*`
  kic = m.sender 
  ZimBotInc.sendMessage(m.chat, {text:`${lah}`, contextInfo:{mentionedJid:[kic]}}, {quoted:m})
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break 
            case 'heal':{
if (isBan) throw mess.ban            
if (q.includes('--help')) return m.reply(examkosong) 
 if (!isCekDarah < 1) return m.reply('*You can only heal when your blood is 0*')
 if (isCekDarah > 100) return m.reply('*Your blood is full*')
 if (isPotion < 1) return m.reply('*You dont have a potion, try buying it by #buypotion _quantity_*') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 m.reply('*Succeed, your blood is full*')
 }
 break
case 'reset': case 'resetlimit': {
if (!isCreator) throw mess.owner
const reset = []
     _limit = reset
     console.log('LIMIT RESET')
     fs.writeFileSync('./storage/user/limit.json', JSON.stringify(_limit))
     fs.writeFileSync('./storage/user/_registered.json', JSON.stringify(_limit))     
     exec('pm2 restart all') 
     m.reply('Success!')
     }
break  
case 'restart': {
             if (!isCreator) throw mess.owner              
             exec(`npm i -g pm2 && pm2 start index.js && pm2 save && pm2 logs`)
             m.reply('*Restarting ZeD-BOT....*')
             }
break
	    case 'donasi': case 'sewabot': case 'sewa': case 'buypremium': case 'donate': {
	    if (isBan) throw mess.ban
                ZimBotInc.sendMessage(m.chat, { image: { url: 'https://telegra.ph/file/651f7eeee2e3b69b26255.jpg' }, caption: `*Hi Chommie ${m.pushName}*\n\n *Thanks for your support i appreciate you!, i literally dont need your money, support me by subscribing to my youtube channel* *TEAM-263:* https://youtube.com/c/Team263Hacks` }, { quoted: m })
            }
            break            
            case 'chat': {
                if (!isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    ZimBotInc.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    ZimBotInc.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    ZimBotInc.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    ZimBotInc.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    ZimBotInc.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    ZimBotInc.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    ZimBotInc.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
	    if (isBan) throw mess.ban
                if ('family100'+m.chat in _family100) {
                    m.reply('*There Are Still Unfinished Sessions!*')
                    throw false
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await ZimBotInc.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'lol': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) throw mess.ban
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'bantuan': {
            if (isBan) throw mess.ban
            await m.reply(monospace(q))
            }
            break
            case 'tebak': {
            if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`
                if (args[0] === "lagu") {
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let msg = await ZimBotInc.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
                    ZimBotInc.sendText(m.chat, `*The song is a song from?*\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
                    tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Guess the Song' }, type: 1 }], `Time Out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete tebaklagu[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'gambar') {
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.deskripsi}\n\n*Time : 60. seconds*\nType ${prefix}help for help\nBonus: 500 money`
                    var lu = `*Click the button below for help*`
                    let buttons = [
                    {buttonId: `${prefix}bantan ${kisi_kisi}`, buttonText: {displayText: 'HELP'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.img },
                    jpegThumbnail: await getBuffer(result.img),
                    caption: `${capti}`,
                    footer: lu,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m }).then(() => {
                    tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Time Out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete tebakgambar[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kata') {
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Time : 60. seconds*\nType ${prefix}help for help\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    ZimBotInc.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak kata') }, buttons: button, footer: '*Click the button below for help*', mentions: [m.sender] }).then(() => {
                    tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete tebakkata[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'kalimat') {
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Time : 60. seconds*\nType ${prefix}help for help\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    ZimBotInc.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak kalimat') }, buttons: button, footer: '*Click the button below for help*', mentions: [m.sender] }).then(() => {
                    tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete tebakkalimat[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lirik') {
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}?\n\n*Time : 60. seconds*\nType ${prefix}help for help\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    ZimBotInc.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'tebak lirik') }, buttons: button, footer: '*Click the button below for help*', mentions: [m.sender] }).then(() => {
                    tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
                    })
                    await sleep(60000)
                    if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete tebaklirik[m.sender.split('@')[0]]
                    }
                } else if (args[0] === 'lontong') {
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                    let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
                    let result = anu[Math.floor(Math.random() * anu.length)]
                    let jawaban = result.jawaban
                    let kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '-')
                    var capti = `${result.soal}\n\n*Time : 60. seconds*\nType ${prefix}help for help\nBonus: 500 money`
                    var button = [{ buttonId: `${prefix}bantuan ${kisi_kisi}`, buttonText: { displayText: `Bantuan` }, type: 1 }]
                    ZimBotInc.sendMessage(m.chat, { caption: `${capti}`, location: { jpegThumbnail: await getBuffer(picak+'cak lontong') }, buttons: button, footer: '*Click the button below for help*', mentions: [m.sender] }).then(() => {
                    caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
		    caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
                    })
                    await sleep(60000)
                    if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\n*Want to play? press the button below*`, ZimBotInc.user.name, m)
                    delete caklontong[m.sender.split('@')[0]]
		    delete caklontong_desk[m.sender.split('@')[0]]
                    }
                }
            }
            break
            case 'quizmath': case 'math': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "*There Are Still Unfinished Sessions!*"
                let { genMath, modes } = require('./src/math')
                if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage examples: ${prefix}math medium`
                let result = await genMath(text.toLowerCase())
                ZimBotInc.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Jawaban: " + result.jawaban)
                    m.reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'soulmate': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your match is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '', buttonText: { displayText: 'SOULMATE❤️' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `What happened Don't forget the tax

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '', buttonText: { displayText: 'CHEERS TO THAT❤️' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, jawab, ZimBotInc.user.name, m, {mentions: menst})
            }
            break
            case 'react': {
                if (!isCreator) throw mess.owner
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                ZimBotInc.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw '*Enter the Link Group!*'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await ZimBotInc.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await ZimBotInc.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `*Example : ${prefix + command} ZeD-BOT|Hxcker-263*`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`*Exif successfully changed to\n\n> Packname : ${global.packname}\n> Author : ${global.author}*`)
            }
            break
            case 'kick': case 'remove': {
                if (isBan) throw mess.ban
                if (!m.isGroup) throw mess.group
                        if (!isBotAdmins) throw mess.botAdmin
                        if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
	if (isBan) throw mess.ban
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
	if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
	if (isBan) throw mess.ban
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'ban': case 'banned': {
if (!isCreator) return m.reply(mess.owner)
if (!args[0]) return m.reply(`*Enter Option Select add or delete*`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banned.includes(orgnye)
if (args[0] === "add") {
if (isBane) return m.reply('*User has been banned*')
banned.push(orgnye)
m.reply(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return m.reply('*ban lifted you happy*')
let delbans = banned.indexOf(orgnye)
banned.splice(delbans, 1)
m.reply(`*Success Removing Banned Users*`)
} else {
m.reply("Error")
}
}
break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await ZimBotInc.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setname': case 'setsubject': {
	    if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                await ZimBotInc.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
          if (isBan) throw mess.ban
          //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await ZimBotInc.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
          if (isBan) throw mess.ban
                if (!isCreator) throw mess.owner
                if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                await ZimBotInc.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
           if (isBan) throw mess.ban
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                await ZimBotInc.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
                case 'tagall': case 'tag': {
                    if (!m.isGroup) throw mess.group
                    if (!isBotAdmins) throw mess.botAdmin
                    if (!isAdmins) throw mess.admin
    let teks = ` 
     ┏━━━━━━━━━━━┑
     ┃🌟𝗧𝗔𝗚-𝗔𝗟𝗟🌟
     ┃┄┄┄┄┄┄┄┄┄┄┄┊
     ┃*𝐌𝐄𝐒𝐒𝐀𝐆𝐄 : ${q ? q : 'blank'}*\n\n
     ┗━━━━━━━━ 
    `
     for (let mem of participants) {
                    teks += `🎪 @${mem.id.split('@')[0]}\n`
                    }
                    ZimBotInc.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                    }
                    break
                    case 'hidetag': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                ZimBotInc.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
                }
                break
            case 'style': case 'styletext': {
            if (isBan) throw mess.ban
	        //  if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		    let { styletext } = require('./lib/scraper3')
		    if (!text) throw '*Enter Query text!*'
		    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await styletext(text)
                let teks = `*Srtle Text From* ${text}\n\n`
                for (let i of anu) {
                    teks += `> *${i.name}* : ${i.result}\n\n`
                }
                m.reply(teks)
	        }
	        break
            case 'vote': {
            if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`*Voting begins!*\n\n*${prefix}upvote* - for yes\n*${prefix}devote* - for no\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete vote`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
┃
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
┃
┃ 
┗━━━━

*${prefix}deletevote* - to delete vote`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTE'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsVote,
                headerType: 1
            }
            ZimBotInc.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Youve Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*REASON:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

*${prefix}deletevote* - to delete vote`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            ZimBotInc.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                if (isBan) throw mess.ban
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'Youve Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*REASON:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

*${prefix}deletevote* - to delete vote`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'VOTE'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'DEVOTE'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: ZimBotInc.user.name,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            ZimBotInc.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'cekvote':
if (isBan) throw mess.ban
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*REASON:* ${vote[m.chat][0]}

┏❰UPVOTE ❱
┃ 
┃ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

┏❰DEVOTE ❱
┃ 
┃ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
┃ 
┗━━━━

*${prefix}deletevote* - to delete vote


©${ZimBotInc.user.id}
`
ZimBotInc.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
		if (isBan) throw mess.ban
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('*Successfully Delete Vote Session In This Group*')
	    }
            break
               case 'group': case 'grup': {
               if (isBan) throw mess.ban
               //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === 'close'){
                    await ZimBotInc.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Successfully closing group*`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await ZimBotInc.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Successfully opening the group*`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `*MODE GROUP*`, ZimBotInc.user.name, m)

             }
            }
            break
            case 'editinfo': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
                await ZimBotInc.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully opened edit group info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await ZimBotInc.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully close edit group info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `Mode Edit Info`, ZimBotInc.user.name, m)

            }
            }
            break
case 'antibule': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntibule) return m.reply(`*Active Anti Caucasians*`)
                isAntibule = true
                m.reply(`*Active Anti Caucasians!*`)
                } else if (args[0] === "off") {
                if (!isAntibule) return m.reply(`*Anti-Bule is not active*`)
                isAntibule = false
                m.reply(`*Anti Caucasian is not active!*`)
                } else {
                 let buttons = [
                        { buttonId: 'antibule on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antibule off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `*▊▊▊ANTILINK MODE▊▊▊*`, botname, m)
                }
             }
             break
            case 'antiwame': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntiwame) return m.reply(`*Antiwame is Active*`)
                isAntiwame = true
                m.reply(`*Active Antilink!*`)
                } else if (args[0] === "off") {
                if (!isAntiwame) return m.reply(`*Antiwame is not active*`)
                isAntiwame = false
                m.reply(`*Antiwame Off !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antiwame on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antiwame off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, ` *▊▊▊ANTILINK MODE▊▊▊*`, botname, m)
                }
             }
             break
             case 'antibadword': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return replay(mess.admin)
             if (args[0] === "on") {
             if (antiToxic) return m.reply('*Already activated*')
             dripsanti.push(from)
             m.reply('*Success turning on anti rude in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK RUDE▊▊▊*\n\n*no hate speech anymore, watch space im going to kick dumps*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!antiToxic) return m.reply('*Already deactivated*')
             let off = dripsanti.indexOf(from)
             dripsanti.splice(off, 1)
             m.reply('*Success in turning off antirude in this group happy now*')
             } else {
               let buttons = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttons, `*▊▊▊ANTILINK BADWORDS▊▊▊*\n\n.`, `${global.botname}`, m)
               }
               }
               break
case 'antilinkyt': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (!isAntilinkyt) return m.reply(`*Active Youtube Antilink*`)
                isAntilinkyt = true
                m.reply(`*Antilinkyt On !*`)
                } else if (args[0] === "off") {
                if (!isAntilinkyt) return m.reply(`*Youtube Antilink is no longer active*`)
                isAntilinkyt = false
                m.reply(`*Antilinkyt Off !*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilinkyt on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antilinkyt off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `**▊▊▊ANTILINK MODE▊▊▊**`, botname, m)
                }
             }
             break
             case 'antilink': {
             if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`*Already on umm okay*`)
                db.data.chats[m.chat].antilink = true
                m.reply(`*Antilink active*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`*Already off okay*`)
                db.data.chats[m.chat].antilink = false
                m.reply(`*Antilink disabled*`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `*▊▊▊ANTILINK MODE▊▊▊*`, ZimBotInc.user.name, m)
                }
             }
             break
             case 'antivideo': case 'antivid': case 'antytvid': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (dripsantivid) return m.reply('**Already activated**')
             ntilinkytvid.push(from)
             m.reply('*Success in turning on youtube video antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!dripsantivid) return m.reply('*Already deactivated*')
             let off = ntilinkytvid.indexOf(from)
             ntilinkytvid.splice(off, 1)
             m.reply('*Success in turning off youtube video antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
               case 'antiytchannel': case 'antilinkyoutubechannel': case 'antiytchannel': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkYoutubeChannel) return m.reply('**Already activated**')
             dripsantiyt.push(from)
             m.reply('*Success in turning on youtube channel antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkYoutubeChannel) return m.reply('**Already deactivated**')
             let off = dripsantiyt.indexOf(from)
             dripsantiyt.splice(off, 1)
            m.reply('Success in turning off youtube channel antilink in this group')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
                   case 'antilinkinstagram': case 'adripsantiig': case 'antiinsta': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkInstagram) return m.reply('*Already activated*')
             dripsantiig.push(from)
             m.reply('*Success in turning on instagram antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*dont play with links okay*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkInstagram) return m.reply('*Already deactivated*')
             let off = dripsantiig.indexOf(from)
             dripsantiig.splice(off, 1)
             m.reply('*Success in turning off instagram antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
                     case 'antilinkfacebook': case 'antifb': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkFacebook) return m.reply('*Already activated*')
             dripsantifb.push(from)
             m.reply('*Success in turning on facebook antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*dont play with links okay*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkFacebook) return m.reply('*Already deactivated*')
             let off = dripsantifb.indexOf(from)
             dripsantifb.splice(off, 1)
             m.reply('*Success in turning off facebook antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
                       case 'antitelegram': case 'adripsantitele': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkTelegram) return m.reply('*Already activated*')
             dripsantitele.push(from)
             m.reply('*Success in turning on telegram antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*DONT PLAY WITH LINKS OKAY*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkTelegram) return m.reply('*Already deactivated*')
             let off = dripsantiig.indexOf(from)
             dripsantiig.splice(off, 1)
             m.reply('*Success in turning off telegram antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
               case 'antiviewonce': case 'antionce':
	            	            	if (isBan) return m.reply(mess.ban)
        if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
        if (args[0] === "on") {
      	if (global.db.data.chats[m.chat].antionce) return m.reply(`*Already activated*`)
        global.db.data.chats[m.chat].antionce = true
        m.reply(`${command} *Successfully Activated*`)
        } else if (args[0] === "off") {
        	if (!global.db.data.chats[m.chat].antionce) return m.reply(`*Already deactivated*`)
        global.db.data.chats[m.chat].antionce = false
        m.reply(`${command} *Successfully Deactivated*`)
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
  ]
  await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK VIEW▊▊▊*`, `${global.botname}`, m)
  }
  break
                         case 'antitiktok': case 'adripsantitik': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkTiktok) return m.reply('**Already activated**')
             dripsantitik.push(from)
             m.reply('*Success in turning on tiktok antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkTiktok) return m.reply('*Already deactivated*')
             let off = dripsantitik.indexOf(from)
             dripsantitik.splice(off, 1)
             m.reply('*Success in turning off tiktok antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
                         case 'adripsantitwt': case 'antitwitter': case 'antilinktwit': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkTwitter) return m.reply('*Already activated*')
             dripsantitwt.push(from)
            m.reply('*Success in turning on twitter antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(from, {text: `*▊▊▊ANTILINK MODE▊▊▊*\n*dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkTwitter) return m.reply('**Already deactivated**')
             let off = dripsantitwt.indexOf(from)
             dripsantitwt.splice(off, 1)
             m.reply('*Success in turning off twitter antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
                           case 'antilinkall': {
                if (isBan) return m.reply(mess.ban)	 			
             if (!m.isGroup) return m.reply(mess.group)
             if (!isBotAdmins) return m.reply(mess.botAdmin)
             if (!isAdmins && !isCreator) return m.reply(mess.admin)
             if (args[0] === "on") {
             if (isAntiLinkTwitter) return m.reply('**Already activated**')
             antilinkall.push(m.chat)
             fs.writeFileSync('./database/antilinkall.json', JSON.stringify(antilinkall))
             m.reply('*Success  turning on all antilink in this group*')
             var groupe = await ZimBotInc.groupMetadata(from)
             var members = groupe['participants']
             var mems = []
             members.map(async adm => {
             mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
             })
             ZimBotInc.sendMessage(m.chat, {text: `*▊▊▊ANTILINK ALL▊▊▊*\n*turned on dont play with links*`, contextInfo: { mentionedJid : mems }}, {quoted:m})
             } else if (args[0] === "off") {
             if (!isAntiLinkAll) return m.reply('**Already deactivated**')
             let off = antilinkall.indexOf(m.chat)
             antilinkall.splice(off, 1)
             m.reply('*Success  turning off all antilink in this group*')
             } else {
               let buttonsntilink = [
               { buttonId: `${command} on`, buttonText: { displayText: 'ON' }, type: 1 },
               { buttonId: `${command} off`, buttonText: { displayText: 'OFF' }, type: 1 }
               ]
               await ZimBotInc.sendButtonText(m.chat, buttonsntilink, `*▊▊▊ANTILINK MODE▊▊▊*`, `${global.botname}`, m)
               }
               }
               break
               case 'antitag': {
             if (isBan) return m.reply(mess.ban)	 			
             if (!isCreator) return
             if (args.length < 1) return m.reply(`*ON OR OFF*`)
             if (args[0] === 'on') {
             if (antitags === true) return
             global.antitags = true
             m.reply(`Successfully activated antitag!`)
             } else if (args[0] === 'off') {
             if (antitags === false) return
             global.antitags = false
             m.reply(`Successfully deactivated antitag!`)
             } else {
             m.reply('Choose on or off')
             }
             }
             break
             case 'mute': {
             if (isBan) throw mess.ban
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return m.reply(`*Already on okay*`)
                db.data.chats[m.chat].mute = true
                m.reply(`${ZimBotInc.user.name} *has been muted in this group!*`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return m.reply(`*Already off okay*`)
                db.data.chats[m.chat].mute = false
                m.reply(`${ZimBotInc.user.name} *has been unmuted in this group!*`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `Mute Bot`, ZimBotInc.user.name, m)
                }
             }
             break
            case 'linkgroup': case 'linkgc': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                let response = await ZimBotInc.groupInviteCode(m.chat)
                ZimBotInc.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*Link Group* : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw '*Enter the enable/disable value*'
                if (args[0] === 'enable') {
                    await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await ZimBotInc.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'delete': case 'del': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw '*The message was not sent by a bot!*'
                ZimBotInc.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZeD-BOT-INC`
                let getGroups = await ZimBotInc.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} second*`)
                for (let i of anu) {
                    await sleep(1500)
		            let btn = [{
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: 'https://github.com/hacker-263/ZeD-Bot'
                                }
                            }]
					let btn2 = [{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: 'https://www.instagram.com/young_money_zw'
                                }
                            }]
                      let txt = `「 *ZeD-BOT BROADCAST* 」\n\n${text}`
                      ZimBotInc.send5ButImg(i, txt, botname, global.bc, btn, btn2)
                    }
                m.reply(` *Send Broadcast To* ${anu.length} *Group*`)
            }
            break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExample : ${prefix + command} ZeD-BOT-INC`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} second`)
		for (let yoi of anu) {
		    await sleep(1500)
		    let btn = [{
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: 'https://github.com/hacker-263/ZeD-Bot'
                                }
                            }]
			let btn2 = [{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: 'https://www.instagram.com/young_money_zw'
                                }
                            }]
                      let txt = `「 *ZeD-BOT BROADCAST* 」\n\n${text}`
                      ZimBotInc.send5ButImg(yoi, txt, botname, global.bc, btn, btn2)
		}
		m.reply('*Success Broadcast*')
            }
            break
case 'bc2': case 'bcloc': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExample : ${prefix + command} Hxcker-263|hi5`
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                m.reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} minutes`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            ZimBotInc.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+'Brodcast') }, buttons: button, footer: `${botname}`, mentions: [m.sender] })
		}		
            }
            break
case 'bcimage': case 'bcvideo': case 'bcaudio': {
                if (!isCreator) throw mess.owner
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`
                let anu = await store.chats.all().map(v => v.id)
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: fs.readFileSync('./lib/hisoka.jpg'), surface: 200, message: `ZeD-BOT-INC`, orderTitle: 'ZeD-BOT-INC', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                m.reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} minutes*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                    displayText: `GITHUB`,
                                    url: 'https://github.com/hacker-263/ZeD-Bot'
                                }
                            },
                            {
                                quickReplyButton: {
                                    displayText: 'MENU',
                                    id: 'menu'
                                }
                            }]
                    let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    ZimBotInc.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let junn = `*_BROADCAST IMAGE_*${text ? '\n\n' + text : ''}`
                    ZimBotInc.send5ButImg(i, junn, `${global.botname}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let junn = `*_BROADCAST VIDIO_*${text ? '\n\n' + text : ''}`
                    ZimBotInc.sendMessage(i, {video: buffer, caption: `${junn}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    ZimBotInc.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    m.reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                m.reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case 'bctext': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*Type some text*\n\nExample : ${prefix + command} zim-ot`
                //let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 666666666,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                let ftroli = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${botname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ZimBotInc.user.name},;;;\nFN:${botname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': await getBuffer(picak+'Brodcast'), thumbnail: await getBuffer(picak+'Brodcast'),sendEphemeral: true}}}
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} seconds*`)
		for (let yoi of anu) {
		    await sleep(1500)
		    ZimBotInc.sendMessage(yoi, {text:`${text}`}, {quoted:ftroli})
		}
		m.reply('*Success Broadcast*')
            }
            break
case 'bcvid': case 'bcvideo': {
                if (!isCreator) throw mess.owner
                if (!text) throw `*use ${prefix + command}|text*`
                let buf = `https://telegra.ph/file/f8b17ce3b28bb5f25f5e1.mp4`
                let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999999,status: 200, thumbnail: await getBuffer(picak+'Brodcast'), surface: 200, message: `© ${botname}`, orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}                
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`*Send Broadcast To* ${anu.length} Chat\n*Time ${anu.length * 1.5} minute*`)
		    for (let yoi of anu) {
		    await sleep(1500)		    
		    ZimBotInc.sendMessage(yoi, { video: await getBuffer(buf), jpegThumbnail: await getBuffer(picak+'Brodcast'), caption: `${text}` }, { quoted: ftroli}).catch ((err) => m.reply('*Sorry, failed to send the video*'))
		}
		m.reply('*Sucecess Broadcast*')
            }
            break
            case 'infochat': case 'sider': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) m.reply('*Reply message*')
                let msg = await m.getQuotedObj()
                if (!m.quoted.isBaileys) throw '*The message was not sent by a bot!*'
                let teks = ''
                for (let i of msg.userReceipt) {
                    let read = i.readTimestamp
                    let unread = i.receiptTimestamp
                    let waktu = read ? read : unread
                    teks += `> @${i.userJid.split('@')[0]}\n`
                    teks += ` ┗━> *TIME :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} > *STATUS :* ${read ? 'READ' : 'SENT'}\n\n`
                }
                ZimBotInc.sendTextWithMentions(m.chat, teks, m)
            }
            break
            case 'q': case 'quoted': {
            if (isBan) throw mess.ban
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!m.quoted) return m.reply('*Reply Message!!*')
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let wokwol = await ZimBotInc.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('*The message you replied to does not contain a reply*')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *NAME :* ${nama}\n⬡ *USER :* @${i.split('@')[0]}\n⬡ *CHAT :* https://wa.me/${i.split('@')[0]}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
                 }
                 ZimBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                if (isBan) throw mess.ban
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await ZimBotInc.groupMetadata(i)
                     teks += `⬡ *NAME :* ${metadata.subject}\n⬡ *OWNER :* @${metadata.owner.split('@')[0]}\n⬡ *ID :* ${metadata.id}\n⬡ *CREATED :* ${moment(metadata.creation * 1000).tz('Africa/Harare').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *MEMBER :* ${metadata.participants.length}\n\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
                 }
                 ZimBotInc.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
             if (isBan) throw mess.ban
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                    let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
                    let online = [...Object.keys(store.presences[id]), botNumber]
                    ZimBotInc.sendText(m.chat, '*LIST ONLINE*:\n\n' + online.map(v => '> @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
            break
            case 'stickerly': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} natasha`		
		    anu = await fetchJson(`https://xteam.xyz/sticker/stickerly?q=${text}&APIKEY=${setting.riy}`)
		    m.reply(`${util.format(anu)}`)
            }		
	        break
            case 'stickerline': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} https://store.line.me/stickershop/product/9409/id`		
		    anu = await fetchJson(`https://xteam.xyz/sticker/stickerline?url=${text}&APIKEY=${setting.riy}`)
		    m.reply(`${util.format(anu)}`)
            }		
	        break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (isBan) throw mess.ban
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
             if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
                let media = await quoted.download()
                let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `*Send Image/Video With Caption ${prefix + command}\nDuration 1-9 Seconds*`
                }
            }
            break

case 'swm': case 'stickerwm': case 'wm': {
if (isBan) throw mess.ban
if (!args.join(" ")) return m.reply(`Example :\n${prefix}swm Hxcker-263 love | tuna`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
if (m.quoted.isAnimated === true) {
ZimBotInc.downloadAndSaveMediaMessage(quoted, "gifee")
ZimBotInc.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await ZimBotInc.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`*Send Image/Video With Caption* ${prefix + command}\n*Duration Video 1-9 seconds*`)
}
}
break
case 'attp': {
if (isBan) throw mess.ban
           if (!text) throw `*Example : ${prefix + command} Hxcker-263 hi*`
           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
           await ZimBotInc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'ZED', 'BOT M D', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
         }
         break
case 'attp4': {
if (isBan) throw mess.ban
           if (!text) throw `*Example : ${prefix + command} Hxcker-263 hi*`
           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
           if (isLimit < 1) return m.reply(mess.endLimit)
           kurangLimit(m.sender, 1)
           m.reply(`*1 limit used*`)
           await ZimBotInc.sendMedia(m.chat, `https://api.xteam.xyz/attp?file&teks=${text}`, 'ZED', 'BOT M D', m, {asSticker: true}).catch((err) => m.reply('*error while sending sticker*'))
                     }
                     break
case 'ttp1': {
if (isBan) throw mess.ban
if (!text) return m.reply(`*NEED TEXT*`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
ZimBotInc.sendMessage(m.chat, { sticker : { url : `https://cililitan.herokuapp.com/api/texttopng?teks=${text}`}, quoted: m }).catch((err) => m.reply('*error while sending sticker*'))
} 
break
case 'ttp2': {
if (isBan) throw mess.ban
           if (!text) throw `Example : ${prefix + command} text`
           await ZimBotInc.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'Z E D', 'B O T M D', m, {asSticker: true})
         }
break

            case 'ebinary': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (isBan) throw mess.ban
            if (!m.quoted.text && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            m.reply(db)
        }
        break
            case 'emojimix': {
            if (isBan) throw mess.ban
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!text) throw `Example : ${prefix + command} 😅+🤔`
	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (isBan) throw mess.ban
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await ZimBotInc.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
case 'semoji': case 'emoji': case 'emoticon': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 😱`              
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)   
                anu = await fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(text)}?apikey=${setting.lolkey}`)                
                ZimBotInc.sendImageAsSticker(m.chat, anu.result.emoji.whatsapp, m, { packname: global.packname, author: global.author }).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))               
                      }
                  break
	       case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	       if (isBan) throw mess.ban
	        let respond = `*Send/reply image/sticker with caption* ${prefix + command} text1|text2`
	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        m.reply(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await ZimBotInc.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
case 'toimage': case 'toimg': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
                m.reply(mess.wait)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)                    
                    ZimBotInc.sendMessage(m.chat, { image: buffer, jpegThumbnail:buffer, caption: `*Sticker Toimg By ${botname}*` }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'ss': case 'ssweb': {
            if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} Url`          
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)  
            anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`)                 
            buf = await getBuffer(anu.screenshot)   
                ZimBotInc.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }, { quoted: m }).catch((err) => m.reply(jsonformat('*error*')))
            }
            break
case 'simisimi': case 'simi': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `*Example : ${prefix + command} halo simi*`       
            x = await fetchJson(`https://xteam.xyz/simsimi?kata=${text}&APIKEY=${setting.riy}`)                       
            m.reply(`${x.jawaban}`)
            }
            break
	        case 'tomp4': case 'tovideo': {
	        if (isBan) throw mess.ban
	       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)               
		let { webp2mp4File } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
            if (!quoted) throw `*Send/Reply the Video/Audio You Want to Use as Audio With Caption* ${prefix + command}`
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (isBan) throw mess.ban
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (/document/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
            if (!quoted) throw `*Send/Reply Video/Audio You Want to Convert into MP3 With Caption* ${prefix + command}`
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ZimBotInc.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
            if (!quoted) throw `*Reply Video/Audio That You Want To Be VN With Caption* ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            ZimBotInc.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
            if (isBan) throw mess.ban
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `*reply sticker with caption* *${prefix + command}*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		   let { webp2mp4File } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await ZimBotInc.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
	        if (isBan) throw mess.ban
	        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        if (!/image/.test(mime) && !/video/.test(mime)) throw `*Send/Reply Image/video With Caption* ${prefix + command}`                
	    	let { UploadFileUgu, webp2mp4File, floNime, TelegraPh } = require('./lib/uploader')
	     	m.reply(mess.wait)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
            if (isBan) throw mess.ban
       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)    
	    if (!quoted) throw `*Send/Reply Image With Caption* ${prefix + command}`
	    if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
	    if (/webp/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
	    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await ZimBotInc.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    ZimBotInc.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break




case 'nulis': case 'nuliskanan': case 'nuliskiri': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Example : ${prefix + command} apa itu javascrip`	    
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
yah = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.riy}`)
ZimBotInc.sendMessage(m.chat, { image: yah }, { quoted: m }).catch((err) => m.reply('*Failed in writing*'))
}
break
case 'magernulis': {            
if (isBan) throw mess.ban
	        if (!text) throw `*Example : ${prefix + command} name|Hxcker-263|class1|the most beautiful*`
		    let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis?nama=${tes1}&kelas=${tes2}&text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('*Sorry Failed In Writing*')) 
	    }
	    break
case 'magernulis2': {            
if (isBan) throw mess.ban
	        if (!text) throw `*Example : ${prefix + command} honey have you eaten yet*`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis2?text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*')) 
	    }
	    break
case 'magernulis3': {            
if (isBan) throw mess.ban
	        if (!text) throw `Example : ${prefix + command} honey have you eaten yet*`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis3?text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*')) 
	    }
	    break
case 'magernulis4': {            
if (isBan) throw mess.ban
	        if (!text) throw `*Example : ${prefix + command} honey have you eaten yet*`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis4?text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*')) 
	    }
	    break
case 'magernulis5': {            
if (isBan) throw mess.ban
	        if (!text) throw `8Example : ${prefix + command} honey have you eaten yet*`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis5?text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*')) 
	    }
	    break
case 'magernulis6': {            
if (isBan) throw mess.ban
	        if (!text) throw `*Example : ${prefix + command} honey have you eaten yet*`
		    //let [tes1, tes2, tes3] = text.split`|`
		if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		buf = await getBuffer(`https://xteam.xyz/magernulis6?text=${text}&APIKEY=${setting.riy}`)
		ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `ZED BOT INC` }, { quoted: m }).catch((err) => m.reply('Sorry Failed In Writing*')) 
	    }
	    break

//search cmds

case 'yts': case 'ytsearch': case 'youtubesearch': {
if (isBan) throw mess.ban
	    if (!text) throw `*Example : ${prefix + command} The title of the song you are looking for*`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `SONG MP3⬤:`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `mimetype: audio/mp3 ${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  },
	                  {
	                  title: `VIDEO MP4⬤:`, 
	                  rowId: `${prefix}ytmp4 ${i.url}`,
	                  description: `mimetype: video/mp4 ${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  },
	                  {
	                  title: `SOURCE LINK`, 
	                  rowId: `${prefix}linkok ${i.url}`,
	                  description: `result: url ${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  ZimBotInc.sendMessage(
                      m.chat, 
                      {
                      text: `*Here are the youtube search results from ${text} You can select audio and video media below*`,
                      footer: `© ZED BOT INC 2022`,
                      title: `▊▊▊YT SEARCH▊▊▊`,
                      buttonText: "YOUTUBE SEARCH RESULTS",
                      sections
                      }, { quoted : m })
                      }
                  break
                  case 'dare':
                   if (isBan) return m.reply(mess.ban)
	
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner Hxcker-263 through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const dripsdare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(picak+'DARE FUN')
              ZimBotInc.sendMessage(from, { image: buffer, caption: '*DARE*\n'+ dripsdare }, {quoted:m})
              break
                            
       case 'truth':
       if (isBan) return m.reply(mess.ban)
	
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "What is your biggest fear?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last YouTube video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Hxcker-263?ðŸ¦„",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day", 
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const dripstruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(picak+'TRUTH FUN')
              ZimBotInc.sendMessage(from, { image: buffer, caption: ' *TRUTH*\n'+  dripstruth }, {quoted:m})
              break
case 'lyrics': {
                    if (isBan) return m.rely(mess.ban)

    if (!text) return reply(`Use example ${prefix}lyrics sorry`)
m.reply(mess.wait)
const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
const result = await lyricsv2(text).catch(async _ => await lyrics(text))
m.reply(`
 *TITLE :* *${result.title}*
 *AUTHOR :* ${result.author}
 LYRICS : ${result.lyrics}
 
`.trim())
}
break
                  case 'linkok': {
                  if (isBan) throw mess.ban
                  if (!text) return m.reply('*Enter link*')                  
                  m.reply(`${text}`)
                  }
                  break
case 'stickersearch': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`*Use ${prefix + command} enter query sticker*`) 
  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
  let noh = require('./lib/lol.js')                
  noh.stickersearch(`${text}`).then(async (res) => {   
  for (let x of res.sticker_url) {
  ZimBotInc.sendImageAsSticker(m.chat, x, m, { packname: global.packname, author: global.author })      
               }
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
case 'igstalk': case 'instagramstalk': {
if (isBan) throw mess.ban
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `*where is the Username ? example : ${prefix + command} young_money_zw*`	    
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
tod = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=${setting.lolkey}`)
gaber = tod.result.photo_profile
teks = `
▊▊▊STALKER   ▊▊▊
▊▊▊INSTAGRAM ▊▊▊
*Data Successfully Obtained!*
▢ Username :  ${tod.result.username}
▢ Full Name : ${tod.result.fullname}
▢ Followers : ${tod.result.followers}
▢ Following : ${tod.result.following}
▢ total post : ${tod.result.posts}
▢ Bio : ${tod.result.bio}
`
var yaha = await getBuffer(gaber)
ZimBotInc.sendMessage(m.chat, { image: yaha, jpegThumbnail:yaha, caption: `${teks}` }, { quoted: m }).catch((err) => m.reply('*Username Not found*'))
}
break
case 'stalkgithub': case 'githubstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
              if (!text) throw `*Example : ${prefix + command} hacker-263*`
              ini_result = await fetchJson(`https://api-riychdwayne.herokuapp.com/api/githubstalk?username=${text}&apikey=${setting.riy}`)
              ini_result = ini_result.result             
              ini_txt = `
▊▊▊STALKER ▊▊▊
▊▊▊GITHUB   ▊▊▊

*Data Successfully Obtained!*
\`\`\`📫 AVATAR : ${ini_result.avatar}\`\`\`
\`\`\`🎞 PUBLIC REPO : ${ini_result.public_repo}\`\`\`
\`\`\`📟 PUBLIC GISTS : ${ini_result.public_gists}\`\`\`
\`\`\`📮 FOLLOWERS : ${ini_result.follower}\`\`\`
\`\`\`📚 FOLLOWING : ${ini_result.following}\`\`\`
\`\`\`📻 BIO : ${ini_result.bio}\`\`\`
\`\`\`🗃️ EMAIL : ${ini_result.email}\`\`\`
\`\`\`🗃️ LOCATION : ${ini_result.location}\`\`\`
\`\`\`🗃️ TWITTER : ${ini_result.twiter_username}\`\`\`
`
ZimBotInc.sendImage(m.chat, ini_result.avatar, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
}
break


    
case 'stalktwitter': case 'twitterstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} wibu.xyz`
             get_result = await fetchJson(`https://api.lolhuman.xyz/api/twitter/${text}?apikey=${setting.lolkey}`)
             get_result = get_result.result            
             pp_tt = await getBuffer(get_result.profile_picture)
             ini_txt = `
*▊▊▊TWITTER STALK ▊▊▊*

*Data Successfully Obtained!*
\`\`\`📫 Username : ${get_result.screen_name}\`\`\`
\`\`\`🎞 NAME : ${get_result.name}\`\`\`
\`\`\`📟 DESCRITION : ${get_result.description}\`\`\`
\`\`\`📮 FOLLOWERS : ${get_result.followers}\`\`\`
\`\`\`📚 FOLLOWING : ${get_result.following}\`\`\`
\`\`\`📻 TWEET : ${get_result.tweet}\`\`\`
\`\`\`🗃️ JOINED : ${get_result.joined}\`\`\`
`
ZimBotInc.sendImage(m.chat, get_result.profile_picture, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
}
break
case 'tiktokstalk': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
      if (!text) throw `Example : ${prefix + command} young_money_zw`
             get_result = await fetchJson(`http://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=${setting.lolkey}`)
             get_result = get_result.result             
             ini_txt = `
*▊▊▊TIKTOK STALK ▊▊▊*

*Data Successfully Obtained!*
\`\`\`📫 Username : ${get_result.username}\`\`\`
\`\`\`🎞 NAME : ${get_result.nickname}\`\`\`
\`\`\`📟 FOLOWERS : ${get_result.followers}\`\`\`
\`\`\`📮 FOLLOWING : ${get_result.followings}\`\`\`
\`\`\`📚 LIKES : ${get_result.likes}\`\`\`
\`\`\`📻 VIDEO : ${get_result.video}\`\`\`
\`\`\`🗃️ DESCRIPTION : ${get_result.bio}\`\`\`
`
ZimBotInc.sendImage(m.chat, get_result.user_picture, `${ini_txt}`, m).catch((err) => m.reply('*Username Not found*'))
}
break
case 'linkwa': case 'carigc': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} botwa`            
            anu = await fetchJson(`https://cililitan.herokuapp.com/api/searchgrupwa?nama=${text}`)                       
            //res = `*GROUP SEARCH*\n\n*Nama*: _${anu.result[0].subject}_\n*Link*: ${anu.result[0].link}\n\n*Nama*: _${anu.result[1].subject}_\n*Link*: ${anu.result[1].link}\n\n*Nama*: _${anu.result[2].subject}_\n*Link*: ${anu.result[2].link}\n\n*Nama*: _${anu.result[3].subject}_\n*Link*: ${anu.result[3].link}\n\n*Nama*: _${anu.result[4].subject}_\n*Link*: ${anu.result[4].link}\n\n*Nama*: _${anu.result[5].subject}_\n*Link*: ${anu.result[5].link}`
            ini_txt = '*Search Group*\n\n'
            for (let i of anu.result) {      
            ini_txt += `*Name* : *${i.subject}*\n`            
            ini_txt += `*Link* : ${i.link}\n\n`            
            }
            m.reply(`${ini_txt}`)
            }            
            break
case 'searchgroup': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} cinta`            
            anu = await fetchJson(`https://api.akuari.my.id/search/carigc?query=${text}`)                       
            ini_txt = '*Search Group*\n\n'
            for (let i of anu.result) {      
            ini_txt += `*Name* : *${i.nama}*\n`            
            ini_txt += `*Link* : ${i.link}\n\n`            
            }
            m.reply(`${ini_txt}`)
            }            
            break
case 'playstore': case 'playstoresearch': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} WhatsApp`            
            x = await fetchJson(`https://api.violetics.pw/api/apk/playstore?apikey=${setting.violkey}&apps=${text}`)                       
            ini_txt = '*PLAYSTORE SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*NAME* : ${i.title}\n`
            ini_txt += `*Rate* : ${i.rate}\n`
            ini_txt += `*PACKAGE* : ${i.package}\n`
            ini_txt += `*URL* : ${i.url}\n`
            ini_txt += `*DESCRIPTION* : ${i.description}\n\n`         
            }   
            ZimBotInc.sendImage(m.chat, x.result[0].thumbnail, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
            break
case 'brainly': {
if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
            if (!text) throw `Example : ${prefix + command} apa itu wibu`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            x = await fetchJson(`https://api.violetics.pw/api/media/brainly?apikey=${setting.violkey}&query=${text}`)                       
            ini_txt = '*BRAINLY SEARCH*\n\n'
            for (let i of x.result) {       
            ini_txt += `*QUESTION* : ${i.pertanyaan}\n`
            ini_txt += `*ANSWER* : ${i.jawaban}\n`                     
            }   
            m.reply(`${ini_txt}`)
            }
            break
case 'television': {
if (isBan) throw mess.ban
                if (!text) throw `what are you looking for!, example : ${prefix + command} cars` 
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://violetics.pw/api/search/layarkaca?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'pixivsearch': {
if (isBan) throw mess.ban
                if (!text) throw `what are you looking for!, example : ${prefix + command} cars`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://api.akuari.my.id/search/pixiv?query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'mangatoon': {
if (isBan) throw mess.ban
                if (!text) throw `what are you looking for!, example : ${prefix + command} config_internet`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://violetics.pw/api/search/mangatoon?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'palingmurah': {
if (isBan) throw mess.ban
                if (!text) throw `what are you looking for!, example : ${prefix + command} vps`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://violetics.pw/api/search/palingmurah?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'gsmarena': {
if (isBan) throw mess.ban
                if (!text) throw '*What brand are you looking for, for example? \n .gsmarena xiaomi*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://yx-api.herokuapp.com/api/search/gsmarena?query=${text}`)				
				reply212 = `*----「 SEARCH GSM ARENA 」----*\n\n
*Name* : ${anu.judul}
*Rilis* : ${anu.rilis}
*Size* : ${anu.ukuran}
*Model* : ${anu.type}
*Storage* : ${anu.storage}
*Display* : ${anu.display}
*Inch* : ${anu.inchi}
*Pixel* : ${anu.pixel}
*VideoPixel* : ${anu.videoPixel}
*Ram* : ${anu.ram}
*Chipset* : ${anu.chipset}
*Battery* : ${anu.batrai}
*Battery Brand* : ${anu.merek_batre}
*Detail* : ${anu.detail}`			
//var kontoll = await getBuffer(anu.result.owner.profile_pic)	
				//sendButLocation(from, `${reply22}`,`© ZED`, {jpegThumbnail:kontoll}, [{buttonId:`${prefix}menu`,buttonText:{displayText:'OKE'},type:1}], {contextInfo: { mentionedJid: [sender, owner]}})
anu = await getBuffer(anu.thumb)
ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${reply212}` }, { quoted: m}).catch((err) => m.reply('*No search results found*'))
	            }
                break
case 'font': {
if (isBan) throw mess.ban
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw '*sooo aowwkowk*'

                anu = await fetchJson(`https://violetics.pw/api/fonts/dafont?apikey=${setting.violkey}&font=${text}`)                

                m.reply(`${util.format(anu)}`)

                }

            break
case 'news': case 'detik': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
          //  if (!text) throw `Example : ${prefix + command} baju`            
            i = await fetchJson(`https://xteam.xyz/news/detik?APIKEY=${setting.riy}`)            
            ini_txt = '*NEWS INFO*\n\n'                
            ini_txt += `*TITLE* : ${i.judul}\n`
            ini_txt += `*Rate* : ${i.tanggal}\n`
            ini_txt += `*ARTICLE* : ${i.artikel}\n`
            ini_txt += `*URL* : ${i.url}\n`                 
            ZimBotInc.sendImage(m.chat, i.thumb, `${ini_txt}`, m).catch((err) => m.reply(jsonformat('*Sorry there was an error*')))
            }
            break
case 'searchanime': {
if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} nama anime`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.akuari.my.id/search/konachan?query=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
           case 'lyrics': case 'lirik': case 'liriklagu': {
           if (isBan) throw mess.ban
           //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Kemarin`
                anu = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=${setting.lolkey}&query=${text}`)
               m.reply(`${anu.result}`)
            }
            break
            case 'readmore': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} halo gaes`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               m.reply(`${anu.result}`)
            }
            break
	            case 'infobmkg': case 'infogempa': {  
	             if (isBan) throw mess.ban     
	            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/infogempa`)
                let F = `*INFO GEMPA*\n*Waktu:* ${anu.result.waktu}\n*Magnitude:* ${anu.result.magnitudo}\n*Depth:* ${anu.result.kedalaman}\n*Coordinate:* ${anu.result.koordinat}\n*Location:* ${anu.result.lokasi}\n*Tsunami:* ${anu.result.tsunami}`            
                ZimBotInc.sendImage(m.chat, anu.result.gambar, `${F}`, m).catch ((err) => m.reply('*Sorry, the feature error is currently*'))
            }
            break
            case 'google': {
                if (!text) throw `Example : ${prefix + command} fatih arridho`
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `*𝗧𝗜𝗧𝗟𝗘* : ${g.title}\n`
                teks += `*𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡* : ${g.snippet}\n`
                teks += `*𝗟𝗜𝗡𝗞* : ${g.link}\n\n────────────────────────\n\n`
                } 
                m.reply(teks)
                })
                }
                break        
        case 'gimage': {
        if (isBan) throw mess.ban
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
        if (!text) throw `Example : ${prefix + command} John Cena`
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let log = await getBuffer(images)
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    jpegThumbnail: log,
                    caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
        })
        }
        break
case 'play2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Alan walker - Faded`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buf = await getBuffer(anu.thumbnail)
                let caption = `*PLAYING YOUTUBE*
                
*⬤TITLE :* ${anu.title}
*⬤DESCRIPTION :* ${anu.description}
*⬤URL :* ${anu.url}
`
message = await prepareWAMessageMedia({ image : { url: anu.thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: caption,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SOURCE VIDEO',
                                    url: `${anu.url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `GITHUB`, 
                                    url: `https://github.com/hacker-263/ZeD-Bot`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `VIDEO`,
                                    id: `${prefix}ytmp4 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `SONG`,
                                    id: `${prefix}ytmp3 ${anu.url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `YTSEARCH`,
                                    id: `${prefix}ytsearch ${anu.title}`
                                }
                            }]
                        }
                    }
                
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'song': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)                   
let sections = []   
let listmenu = [`ytmp4 ${search.all[0].url}`,`ytmp3 ${search.all[1].url}`,`ytmp4 ${search.all[2].url}`,`ytmp3 ${search.all[3].url}`,`ytmp4 ${search.all[4].url}`,`ytmp3 ${search.all[5].url}`,`ytmp4 ${search.all[6].url}`,`ytmp3 ${search.all[7].url}`,`ytmp4 ${search.all[8].url}`,`ytmp3 ${search.all[9].url}`,`ytmp4 ${search.all[10].url}`,`ytmp3 ${search.all[11].url}`,`ytmp4 ${search.all[12].url}`,`ytmp3 ${search.all[13].url}`,`ytmp4 ${search.all[14].url}`,`ytmp3 ${search.all[15].url}`,`ytmp4 ${search.all[16].url}`,`ytmp3 ${search.all[17].url}`,`ytmp4 ${search.all[18].url}`,`ytmp3 ${search.all[19].url}`]
                    let listmenuu = [`VIDEO MP4⬤: ${search.all[0].title}`,`SONG MP3⬤: ${search.all[1].title}`,`VIDEO MP4⬤: ${search.all[2].title}`,`SONG MP3⬤: ${search.all[3].title}`,`VIDEO MP4⬤: ${search.all[4].title}`,`SONG MP3⬤: ${search.all[5].title}`,`VIDEO MP4⬤: ${search.all[6].title}`,`SONG MP3⬤: ${search.all[7].title}`,`VIDEO MP4⬤: ${search.all[8].title}`,`SONG MP3⬤: ${search.all[9].title}`,`VIDEO MP4⬤: ${search.all[10].title}`,`SONG MP3⬤: ${search.all[11].title}`,`VIDEO MP4⬤: ${search.all[12].title}`,`SONG MP3⬤: ${search.all[13].title}`,`VIDEO MP4⬤: ${search.all[14].title}`,`SONG MP3⬤: ${search.all[15].title}`,`VIDEO MP4⬤: ${search.all[16].title}`,`SONG MP3⬤: ${search.all[17].title}`,`VIDEO MP4⬤: ${search.all[18].title}`,`SONG MP3⬤: ${search.all[19].title}`]
                    let listmenuuu = [`\n${search.all[0].description}`,`\n${search.all[1].description}`,`\n${search.all[2].description}`,`\n${search.all[3].description}`,`\n${search.all[4].description}`,`\n${search.all[5].description}`,`\n${search.all[6].description}`,`\n${search.all[7].description}`,`\n${search.all[8].description}`,`\n${search.all[9].description}`,`\n${search.all[10].description}`,`\n${search.all[11].description}`,`\n${search.all[12].description}`,`\n${search.all[13].description}`,`\n${search.all[14].description}`,`\n${search.all[15].description}`,`\n${search.all[16].description}`,`\n${search.all[17].description}`,`\n${search.all[18].description}`,`\n${search.all[19].description}`]
                    let nombor = 1
                    let startnum = 0
                    let startnumm = 0
                    for (let x of listmenu) {
                    const list = {title: 'RESULT NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        description: `${listmenuuu[startnumm++]}`,
                        rowId: `${prefix}${x}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ZimBotInc.sendMessage(
      m.chat, 
      {
       text: "\n\n*CHEERS TO THAT*",
       footer: botname,
       title: `HERE IS YOUR RESULTS CHOMIE FROM *${text}* _select song or video below_`,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      }
     break
case 'ytsaudio': case 'ytsmusic': case 'ytsearchmusic': {
if (isBan) throw mess.ban
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} guspy warior ita seunononga`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION:* ${i.timestamp}\n*LINK:* ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  ZimBotInc.sendMessage(
                      m.chat, 
                      {
                      text: ` ${text}`,
                      footer: botname,
                      title: `${ucapannya2} ${pushname} Here are the search results from ytsaudio`,
                      buttonText: "LIST OF AUDIOS",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'ytsvideo': case 'ytsearchvideo': {
if (isBan) throw mess.ban
                if (!text) throw `Example : ${prefix + command} seh calaz takambo tamba munyika`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n`, 
	                  rowId: `${prefix}ytmp4 ${i.url}`,
	                  description: `${i.description}\n*UPLOAD:* ${i.ago}\n*CHANNEL:* ${i.author.name}\n*VIEWS:* ${i.views}\n*DURATION* ${i.timestamp}\n*LINK:* ${i.url}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  ZimBotInc.sendMessage(
                      m.chat, 
                      {
                      text: ` ${text}`,
                      footer: botname,
                      title: `${ucapannya2} ${pushname} *Here are the search results from ytsvideo*`,
                      buttonText: "LIST OF VIDEOS",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'yts2': case 'youtubesearch2': case 'ytsearch2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)                
                let no = 1
                let sections = []   
                for (let i of search.all) {
                const list = {title: `${i.title}`,
                rows: [
	                  {
	                  title: `${i.title}\n\n`, 
	                  rowId: `${prefix}ytmp3 ${i.url}`,
	                  description: `${i.description}`
	                  }, 
	                  ]
                      }
                      sections.push(list)   
                      }
                      const sendm =  ZimBotInc.sendMessage(
                      m.chat, 
                      {
                      text: ` ${text}`,
                      footer: botname,
                      title: `*Here are the search results from yts2*`,
                      buttonText: "CLICK HERE",
                      sections
                      }, { quoted : m })
                      }
                  break
case 'play':  {  
if (isBan) throw mess.ban            
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} story wa anime`           
           let yts = require("yt-search")
           aramas = await yts(text)
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {				
				const captions = `
▊▊▊BEST MUSIC▊▊▊

*⬤▶━━━━━━━━━2:30*						
*⬤TITLE :* ${aramas.videos[0].title}
*⬤SIZE :* ${data.medias[7].formattedSize}
*⬤DESCRIPTION :* ${aramas.videos[0].description}`
message = await prepareWAMessageMedia({ image : { url: aramas.videos[0].thumbnail } }, { upload:   ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            hydratedContentText: captions,
                            imageMessage: message.imageMessage,
                            hydratedFooterText: `${botname}`,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'SOURCE VIDEO',
                                    url: `${aramas.videos[0].url}`
                                }
                            }, {
                            	urlButton: {
                                displayText: `GITHUB`, 
                                    url: `https://github.com/hacker-263/ZeD-Bot`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: `VIDEO`,
                                    id: `${prefix}ytmp4 ${aramas.videos[0].url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `SONG`,
                                    id: `${prefix}ytmp3 ${aramas.videos[0].url}`
                                }
                                }, {
                                quickReplyButton: {
                                    displayText: `YTSEARCH`,
                                    id: `${prefix}ytsearch ${aramas.videos[0].title}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
			    })
				} catch (err) {
					reply('*An error occurred maybe the query was not found*')
					}
					}
                break
	    case 'ytmp3':  case 'ytmusic': {	    
	            if (isBan) throw mess.ban
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
                
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                let caption = `
*▊▊▊BEST MUSIC▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n*⬤TITLE :* ${media.title}\n*⬤FILESIZE :* ${media.filesizeF}\n*⬤URL :* ${isUrl(text)}\n*⬤EXT :* MP3\n*⬤RESOLUTION :* ${args[1] || '128kbps'}\n\n*ZED BOT INC*`
                buf = await getBuffer(media.thumb)
                ZimBotInc.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m }).catch((err) => m.reply('*Sorry, the link you provided is not valid*'))                
                ZimBotInc.sendMessage(m.chat, {document:{url:media.dl_link}, mimetype:"audio/mpeg", fileName: `${media.title}.mp3`,  quoted: m, contextInfo: { externalAdReply:{title:media.title,body:"YOUTUBE MP3",mediaType:"2",thumbnail:buf,mediaUrl:`${text}`}}}).catch((err) => m.reply('Sorry, the link you provided is not valid*'))
                }
            break
           case 'ytmp4': case 'ytvideo': {
           if (isBan) throw mess.ban
                // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                var capti = `
*▊▊▊BEST VIDEO▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n*⬤Title* : ${media.title}\n*⬤FILESIZE* : ${media.filesizeF}\n*⬤URL* : ${isUrl(text)}\n*⬤EXT* : MP3\n*⬤RESOLUTION* : ${args[1] || '360p'}\n\n*ZED BOT INC*`
                var buf = await getBuffer(media.thumb)
                ZimBotInc.sendMessage(m.chat, { image: { url: media.thumb }, jpegThumbnail:buf, caption: `${capti}` }, { quoted: m })
                ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, jpegThumbnail:buf, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*Downloading From ${text}*` }, { quoted: m }).catch((err) => m.reply('Gagal dalam mengirim video'))
            }
            break
case 'ytshorts': case 'shorts': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`*Use ${prefix + command} enter pin link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) throw '*The link you provided is not valid*'               
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)       
  xa.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(data)) 
  cap = `
*▊▊▊YOUTUBE SHORTS▊▊▊*

*⬤▶━━━━━━━━━2:30*\n\n\n\n*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}\n*⬤DURATION* ${data.duration}\n*⬤ID:* ${data.medias[0].cached}\n*⬤LINK:* ${data.url}\n\n*ZED BOT INC*`
  buf = await getBuffer(data.thumbnail)
  ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*⬤TITLE:* ${data.title}\n*⬤QUALITY:* ${data.medias[0].quality}\n*⬤SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*Failed to download and send media*`)
                })
            }
            break
	    case 'getmusic': {
	    if (isBan) throw mess.ban
	   // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { yta } = require('./lib/y2mate')                
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('*Reply message*')
                if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots*`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                ZimBotInc.sendImage(m.chat, media.thumb, `*⬤TITLE* : ${media.title}\n*⬤FILE SIZE :* ${media.filesizeF}\n*⬤URL :* ${urls[text - 1]}\n*⬤EXT :* MP3\n*⬤RESOLUTION :* ${args[1] || '128kbps'}`, m)
                ZimBotInc.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {          
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let { ytv } = require('./lib/y2mate')               
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Message')
                if (!m.quoted.isBaileys) throw `*Can only reply to messages from bots8`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `*Maybe the message you replied does not contain the ytsearch result*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('*File Over Limit* '+util.format(media))
                ZimBotInc.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `*⬤TITLE :* ${media.title}\n*⬤FILESIZE :* ${media.filesizeF}\n*⬤URL :* ${urls[text - 1]}\n*⬤EXT:* MP3\n*⬤RESOLUTION :* ${args[1] || '360p'}` }, { quoted: m })
            }
            break



case 'pinterest': case 'pin': {
if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		        let { pinterest } = require('./lib/liyascrape.js')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]      
                let log = await getBuffer(result)         
                let buttons = [                   
                    {buttonId: `pinterest ${text}`, buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result },         
                    jpegThumbnail: log,         
                    caption: `*Click Next To Continue*`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
            }
           break
          case 'angie': case 'aria': case 'attic': case 'blackandwhite': case 'chorme1977': case 'constrastbandw':
          case 'creamy': case 'duotone': case 'eva': case 'goldenhour': case 'hana': case 'hdr': case 'japanese':
          case 'lana': case 'lavander': case 'lemonande': case 'lightleak': case 'lisa': case 'lomo': case 'milk': case 'molly':
          case 'monochrome': case 'morning': case 'movie': case 'orton': case 'paretro': case 'perfectbandw': case 'plumy': 
          case 'retrolga': case 'ruby': case 'sand': case 'sapphire': case 'sepia': case 'softsepia': case 'solarize': case 'sphinx':
          case 'venus': case 'viewfinder': case 'warmsunset': {
                if (isBan) throw mess.ban
	            if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://violetics.pw/api/photofilter/${command}?apikey=${setting.violkey}&image=${anu}`)
                ZimBotInc.sendMessage(m.chat, { image: buf, jpegThumbnail:buf, caption: `PhotoFilter ${command}` }, { quoted: m}).catch ((err) => m.reply('*Sorry failed to create a filter*'))
                }
                break
           case 'quotemaker': {
if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)        
                if (!text) throw 'harus menggunakan text contoh: .quotemaker aku hanya sayang padamu'        
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://xteam.xyz/quotemaker?text=${text}&wm=stars&APIKEY=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'gaming': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/gaming?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'pentol': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/pentol?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'cogan2': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cogan2?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'cecan2': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cecan2?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
            break
           case 'islami': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/islami?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           
           case 'aesthetic': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/aesthetic?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'anime': {
if (isBan) throw mess.ban
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                
                m.reply(mess.wait)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/anime?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'drakjoke': case 'darkjoke': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://xteam.xyz/randomimage/drak?APIKEY=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'megumin': {
if (isBan) throw mess.ban
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/megumin?apikey=${setting.riy}`)
                ZimBotInc.sendMessag0 (m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'yotsuba': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/yotsuba?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'shinomiya': {
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/shinomiya?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'yumeko': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/yumeko?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'tejina': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/tejina?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
          case 'cyberspace': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/cyberspace?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
           break
           case 'chiho': {
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/wallpaper/chiho?apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, jpegThumbnail:anu, caption: `*${command}*` }, { quoted: m }).catch ((err) => m.reply('*Sorry for the feature error*'))
                }
            break
            case 'slots':
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            ZimBotInc.sendMessage(m.chat, somtoy,`[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nInformation : If you get 3 of the same fruit, it means you win\n\nExample : 🍌 : 🍌 : 🍌<=====`, ZimBotInc, { quoted: m })
        
            
           break                   
           case 'waifu': {
           if (isBan) throw mess.ban
           ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
           let wipu = await fetchJson(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/waifu.json`)
           let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
           let buttons = [
                    {buttonId: `${prefix}waifu`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: wipi },
                    caption: `*WAIFU* `,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            
  
        break 
        case 'cry':case 'kill':case 'laugh' :case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(mess.wait)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						ZimBotInc.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
                    })
                    break 
                    case 'ass': const _0xadb8ed=_0x449f;function _0x449f(_0x20a193,_0x1be6da){const _0x31167f=_0x3116();return _0x449f=function(_0x449f7e,_0xb9cbed){_0x449f7e=_0x449f7e-0x103;let _0x46fc88=_0x31167f[_0x449f7e];return _0x46fc88;},_0x449f(_0x20a193,_0x1be6da);}(function(_0x5deb74,_0x2e7fc7){const _0x14fa77=_0x449f,_0x251e42=_0x5deb74();while(!![]){try{const _0x3b66be=parseInt(_0x14fa77(0x10b))/0x1*(-parseInt(_0x14fa77(0x111))/0x2)+-parseInt(_0x14fa77(0x104))/0x3*(parseInt(_0x14fa77(0x10f))/0x4)+-parseInt(_0x14fa77(0x113))/0x5+parseInt(_0x14fa77(0x10a))/0x6*(parseInt(_0x14fa77(0x108))/0x7)+parseInt(_0x14fa77(0x106))/0x8+parseInt(_0x14fa77(0x112))/0x9*(parseInt(_0x14fa77(0x115))/0xa)+-parseInt(_0x14fa77(0x109))/0xb*(parseInt(_0x14fa77(0x103))/0xc);if(_0x3b66be===_0x2e7fc7)break;else _0x251e42['push'](_0x251e42['shift']());}catch(_0x12e6b7){_0x251e42['push'](_0x251e42['shift']());}}}(_0x3116,0x9ccd7));function _0x3116(){const _0x22912a=['botnma','5093976kDUVeI','chat','301SKFaOJ','22nDPbHU','175866EdorUE','3vudQbL','wait','ass','https://wallebotapi.mitomods.com/docs/nsfw/ass?apikey=Donitas','98780dxRbOC','ZED\x20BOT\x20INC','377582GmFUAy','1395189TrloKJ','3902970sfuiOH','NEXT','50nuYxYQ','sendMessage','2468100nqsNQO','33PyxFbb'];_0x3116=function(){return _0x22912a;};return _0x3116();}{m.reply(mess[_0xadb8ed(0x10c)]);let buttons=[{'buttonId':_0xadb8ed(0x10d),'buttonText':{'displayText':_0xadb8ed(0x114)},'type':0x1}],anu=await fetchJson(_0xadb8ed(0x10e)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0xadb8ed(0x110),'footer':global[_0xadb8ed(0x105)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0xadb8ed(0x116)](m[_0xadb8ed(0x107)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'ahegao': function _0x4531(){const _0x44de99=['botnma','ahegao','216836oiQhpI','result','28rupMOq','2dFBcle','85WiyEmZ','chat','1412483jKZVPm','5726048DZvhsm','1572999qLOFKM','18GbyHoD','sendMessage','wait','1256958qJURWK','556270uYIwYN','11177650jJJUEO'];_0x4531=function(){return _0x44de99;};return _0x4531();}function _0x1fe1(_0x456378,_0x5e6bf7){const _0x453109=_0x4531();return _0x1fe1=function(_0x1fe182,_0x24787f){_0x1fe182=_0x1fe182-0x13e;let _0x45c2ad=_0x453109[_0x1fe182];return _0x45c2ad;},_0x1fe1(_0x456378,_0x5e6bf7);}const _0x2a852b=_0x1fe1;(function(_0x326157,_0x178f5f){const _0x3ed89d=_0x1fe1,_0x27bc0a=_0x326157();while(!![]){try{const _0x418b0d=-parseInt(_0x3ed89d(0x140))/0x1*(parseInt(_0x3ed89d(0x14e))/0x2)+-parseInt(_0x3ed89d(0x142))/0x3+parseInt(_0x3ed89d(0x14b))/0x4*(parseInt(_0x3ed89d(0x13e))/0x5)+parseInt(_0x3ed89d(0x146))/0x6*(-parseInt(_0x3ed89d(0x14d))/0x7)+parseInt(_0x3ed89d(0x141))/0x8*(parseInt(_0x3ed89d(0x143))/0x9)+parseInt(_0x3ed89d(0x148))/0xa+parseInt(_0x3ed89d(0x147))/0xb;if(_0x418b0d===_0x178f5f)break;else _0x27bc0a['push'](_0x27bc0a['shift']());}catch(_0x393d89){_0x27bc0a['push'](_0x27bc0a['shift']());}}}(_0x4531,0xb6474));{m.reply(mess[_0x2a852b(0x145)]);let buttons=[{'buttonId':_0x2a852b(0x14a),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ahegao?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x2a852b(0x14c)]},'caption':'ZED\x20BOT\x20INC','footer':global[_0x2a852b(0x149)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2a852b(0x144)](m[_0x2a852b(0x13f)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'bdsm': const _0x30a91b=_0x1e9a;(function(_0x5e7936,_0x45128a){const _0x24ad84=_0x1e9a,_0x429465=_0x5e7936();while(!![]){try{const _0x2ada1b=parseInt(_0x24ad84(0xda))/0x1+-parseInt(_0x24ad84(0xdb))/0x2+parseInt(_0x24ad84(0xdc))/0x3+-parseInt(_0x24ad84(0xe1))/0x4*(-parseInt(_0x24ad84(0xd7))/0x5)+parseInt(_0x24ad84(0xe3))/0x6*(-parseInt(_0x24ad84(0xde))/0x7)+parseInt(_0x24ad84(0xe5))/0x8+-parseInt(_0x24ad84(0xe6))/0x9;if(_0x2ada1b===_0x45128a)break;else _0x429465['push'](_0x429465['shift']());}catch(_0x2a2e6e){_0x429465['push'](_0x429465['shift']());}}}(_0x397f,0xb4ccd));function _0x1e9a(_0x10b2ec,_0x447ec7){const _0x397f0c=_0x397f();return _0x1e9a=function(_0x1e9a83,_0x438064){_0x1e9a83=_0x1e9a83-0xd7;let _0xb6474a=_0x397f0c[_0x1e9a83];return _0xb6474a;},_0x1e9a(_0x10b2ec,_0x447ec7);}{m.reply(mess[_0x30a91b(0xe2)]);let buttons=[{'buttonId':'bdsm','buttonText':{'displayText':_0x30a91b(0xd9)},'type':0x1}],anu=await fetchJson(_0x30a91b(0xe0)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x30a91b(0xdf),'footer':global[_0x30a91b(0xe4)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x30a91b(0xdd)](m[_0x30a91b(0xd8)],buttonMessage,{'quoted':m});}function _0x397f(){const _0x44c6c5=['chat','NEXT','822061VJisDH','717102guNUxo','4037805gXjPrn','sendMessage','21cUNdXI','ZED\x20BOT\x20INC','https://wallebotapi.mitomods.com/docs/nsfw/bdsm?apikey=Donitas','317972PUpriU','wait','1737858ZKWBXP','botnma','1637488iAcVJz','4357242fXNQtX','5ZbGCSV'];_0x397f=function(){return _0x44c6c5;};return _0x397f();}
                    break
                    
                    case 'blowjob': const _0x582929=_0xd87a;(function(_0x4ec9b2,_0x9446e0){const _0x581c70=_0xd87a,_0x28dff9=_0x4ec9b2();while(!![]){try{const _0x4ced47=parseInt(_0x581c70(0x1bc))/0x1+parseInt(_0x581c70(0x1b0))/0x2*(parseInt(_0x581c70(0x1ba))/0x3)+parseInt(_0x581c70(0x1b1))/0x4*(-parseInt(_0x581c70(0x1b5))/0x5)+parseInt(_0x581c70(0x1af))/0x6+parseInt(_0x581c70(0x1bb))/0x7+-parseInt(_0x581c70(0x1b3))/0x8*(parseInt(_0x581c70(0x1b6))/0x9)+-parseInt(_0x581c70(0x1b9))/0xa*(parseInt(_0x581c70(0x1ae))/0xb);if(_0x4ced47===_0x9446e0)break;else _0x28dff9['push'](_0x28dff9['shift']());}catch(_0x2ba969){_0x28dff9['push'](_0x28dff9['shift']());}}}(_0x3715,0x4d2d7));function _0xd87a(_0x23168d,_0x2bbabf){const _0x3715c2=_0x3715();return _0xd87a=function(_0xd87a9,_0x43a8e8){_0xd87a9=_0xd87a9-0x1ae;let _0x553857=_0x3715c2[_0xd87a9];return _0x553857;},_0xd87a(_0x23168d,_0x2bbabf);}function _0x3715(){const _0x343963=['NEXT','664433EFJMNg','1146918OBsAPH','102mMcNGa','4MJHuKI','botnma','8OtOyNL','sendMessage','2328515YDCZVa','989658kkNEYn','result','https://wallebotapi.mitomods.com/docs/nsfw/blowjob?apikey=Donitas','30rIFPkO','11901MyMOkM','3634302oKcWQe','160337TWawqo','wait','chat'];_0x3715=function(){return _0x343963;};return _0x3715();}{m.reply(mess[_0x582929(0x1bd)]);let buttons=[{'buttonId':'blowjob','buttonText':{'displayText':_0x582929(0x1bf)},'type':0x1}],anu=await fetchJson(_0x582929(0x1b8)),buttonMessage={'image':{'url':''+anu[_0x582929(0x1b7)]},'caption':'ZED\x20BOT\x20INC','footer':global[_0x582929(0x1b2)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x582929(0x1b4)](m[_0x582929(0x1be)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'cuckold': const _0x2ca982=_0x58be;(function(_0x21a7b8,_0x4876b0){const _0x32f84b=_0x58be,_0x319bfc=_0x21a7b8();while(!![]){try{const _0x1ff575=-parseInt(_0x32f84b(0x178))/0x1*(-parseInt(_0x32f84b(0x189))/0x2)+parseInt(_0x32f84b(0x179))/0x3+parseInt(_0x32f84b(0x186))/0x4+parseInt(_0x32f84b(0x177))/0x5*(parseInt(_0x32f84b(0x180))/0x6)+parseInt(_0x32f84b(0x187))/0x7+parseInt(_0x32f84b(0x17c))/0x8+parseInt(_0x32f84b(0x17e))/0x9*(-parseInt(_0x32f84b(0x184))/0xa);if(_0x1ff575===_0x4876b0)break;else _0x319bfc['push'](_0x319bfc['shift']());}catch(_0x5cc33e){_0x319bfc['push'](_0x319bfc['shift']());}}}(_0x275e,0xea73c));function _0x275e(){const _0x1d84b1=['109404ARnWlk','NEXT','2616510fvwnXd','ZED\x20BOT\x20INC','chat','sendMessage','2960DcRMYw','botnma','214508bourFr','9342739dqLrnG','result','1282744bSKzIj','5ZvAcSK','1AJVUwM','1684557Ntswrc','cuckold','https://wallebotapi.mitomods.com/docs/nsfw/cuckold?apikey=Donitas','12249696AjJsFQ','wait'];_0x275e=function(){return _0x1d84b1;};return _0x275e();}function _0x58be(_0x298e36,_0x4dc4a9){const _0x275e44=_0x275e();return _0x58be=function(_0x58bea8,_0x38b31c){_0x58bea8=_0x58bea8-0x177;let _0x573d52=_0x275e44[_0x58bea8];return _0x573d52;},_0x58be(_0x298e36,_0x4dc4a9);}{m.reply(mess[_0x2ca982(0x17d)]);let buttons=[{'buttonId':_0x2ca982(0x17a),'buttonText':{'displayText':_0x2ca982(0x17f)},'type':0x1}],anu=await fetchJson(_0x2ca982(0x17b)),buttonMessage={'image':{'url':''+anu[_0x2ca982(0x188)]},'caption':_0x2ca982(0x181),'footer':global[_0x2ca982(0x185)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2ca982(0x183)](m[_0x2ca982(0x182)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'cum': function _0x2fd1(_0x106d8d,_0x45d326){const _0x2a5c3b=_0x2a5c();return _0x2fd1=function(_0x2fd13b,_0x2b8ec8){_0x2fd13b=_0x2fd13b-0x12f;let _0xd4b958=_0x2a5c3b[_0x2fd13b];return _0xd4b958;},_0x2fd1(_0x106d8d,_0x45d326);}const _0x5b0145=_0x2fd1;(function(_0x2db56b,_0x1f7180){const _0x48d9fc=_0x2fd1,_0x261391=_0x2db56b();while(!![]){try{const _0x29d007=-parseInt(_0x48d9fc(0x12f))/0x1*(-parseInt(_0x48d9fc(0x141))/0x2)+-parseInt(_0x48d9fc(0x13a))/0x3+parseInt(_0x48d9fc(0x13e))/0x4+parseInt(_0x48d9fc(0x13f))/0x5*(parseInt(_0x48d9fc(0x138))/0x6)+-parseInt(_0x48d9fc(0x13b))/0x7*(-parseInt(_0x48d9fc(0x133))/0x8)+-parseInt(_0x48d9fc(0x137))/0x9*(parseInt(_0x48d9fc(0x136))/0xa)+-parseInt(_0x48d9fc(0x130))/0xb;if(_0x29d007===_0x1f7180)break;else _0x261391['push'](_0x261391['shift']());}catch(_0x7c9d71){_0x261391['push'](_0x261391['shift']());}}}(_0x2a5c,0x71b37));function _0x2a5c(){const _0x5ba11f=['1376190gEpYpy','1084874sHQkaN','botnma','result','1781928KQpQKH','1780bJDHYH','wait','9406PqcViI','55npkkxW','3841717wZBENy','NEXT','chat','16iDpTmK','ZED\x20BOT\x20INC','https://wallebotapi.mitomods.com/docs/nsfw/cum?apikey=Donitas','1670ZMiEMM','28449HPUWWS','13272bJyHnX','cum'];_0x2a5c=function(){return _0x5ba11f;};return _0x2a5c();}{m.reply(mess[_0x5b0145(0x140)]);let buttons=[{'buttonId':_0x5b0145(0x139),'buttonText':{'displayText':_0x5b0145(0x131)},'type':0x1}],anu=await fetchJson(_0x5b0145(0x135)),buttonMessage={'image':{'url':''+anu[_0x5b0145(0x13d)]},'caption':_0x5b0145(0x134),'footer':global[_0x5b0145(0x13c)],'buttons':buttons,'headerType':0x4};ZimBotInc['sendMessage'](m[_0x5b0145(0x132)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'ero': function _0x21a0(){const _0x3dca6f=['20vrjKRJ','2201766DtwSYl','578611rriDPt','wait','141640USsKBY','sendMessage','20fqIqJV','157366qDvUOU','botnma','1452324BaaDAw','759984Qjfrqu','5136939OcZkla','7JsAces','result','1XzHIbi','NEXT','ero','chat'];_0x21a0=function(){return _0x3dca6f;};return _0x21a0();}const _0x133d5d=_0x5bbc;function _0x5bbc(_0xb503f,_0x113222){const _0x21a057=_0x21a0();return _0x5bbc=function(_0x5bbcf2,_0x3ccf2d){_0x5bbcf2=_0x5bbcf2-0x1bd;let _0x1bf75b=_0x21a057[_0x5bbcf2];return _0x1bf75b;},_0x5bbc(_0xb503f,_0x113222);}(function(_0x1f9372,_0x42eb6d){const _0x41bf4a=_0x5bbc,_0x4cf031=_0x1f9372();while(!![]){try{const _0x56b378=-parseInt(_0x41bf4a(0x1bf))/0x1*(-parseInt(_0x41bf4a(0x1ca))/0x2)+parseInt(_0x41bf4a(0x1cc))/0x3+-parseInt(_0x41bf4a(0x1c3))/0x4*(parseInt(_0x41bf4a(0x1c7))/0x5)+parseInt(_0x41bf4a(0x1c4))/0x6*(parseInt(_0x41bf4a(0x1bd))/0x7)+parseInt(_0x41bf4a(0x1cd))/0x8+-parseInt(_0x41bf4a(0x1ce))/0x9+-parseInt(_0x41bf4a(0x1c9))/0xa*(-parseInt(_0x41bf4a(0x1c5))/0xb);if(_0x56b378===_0x42eb6d)break;else _0x4cf031['push'](_0x4cf031['shift']());}catch(_0x315e59){_0x4cf031['push'](_0x4cf031['shift']());}}}(_0x21a0,0x65f05));{m.dripsantividreply(mess[_0x133d5d(0x1c6)]);let buttons=[{'buttonId':_0x133d5d(0x1c1),'buttonText':{'displayText':_0x133d5d(0x1c0)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/ero?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x133d5d(0x1be)]},'caption':'ZED\x20BOT\x20INC','footer':global[_0x133d5d(0x1cb)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x133d5d(0x1c8)](m[_0x133d5d(0x1c2)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'fendom': function _0xc027(){const _0x304d7e=['104QZoQpu','wait','https://wallebotapi.mitomods.com/docs/nsfw/femdom?apikey=Donitas','6185352oGpJVq','fendom','8027240tkPYjB','428526ztnxyM','chat','result','2kJhlgC','15333320ScQLOG','botnma','NEXT','6430alqXaj','sendMessage','ZED\x20BOT\x20INC','9rdjaMl','4959178YqfBJz','70008nLzHcI'];_0xc027=function(){return _0x304d7e;};return _0xc027();}const _0x31df39=_0x1ade;(function(_0x1be92c,_0x4608bb){const _0x4b7219=_0x1ade,_0x502989=_0x1be92c();while(!![]){try{const _0x5576b=parseInt(_0x4b7219(0x108))/0x1*(parseInt(_0x4b7219(0xf8))/0x2)+parseInt(_0x4b7219(0x101))/0x3*(-parseInt(_0x4b7219(0x102))/0x4)+parseInt(_0x4b7219(0xfc))/0x5+parseInt(_0x4b7219(0x105))/0x6+-parseInt(_0x4b7219(0x100))/0x7+-parseInt(_0x4b7219(0x107))/0x8+-parseInt(_0x4b7219(0xff))/0x9*(-parseInt(_0x4b7219(0xf9))/0xa);if(_0x5576b===_0x4608bb)break;else _0x502989['push'](_0x502989['shift']());}catch(_0x3d0311){_0x502989['push'](_0x502989['shift']());}}}(_0xc027,0xa4e71));function _0x1ade(_0x406daa,_0x227acb){const _0xc027bf=_0xc027();return _0x1ade=function(_0x1adea0,_0x59ee95){_0x1adea0=_0x1adea0-0xf7;let _0x22ef2d=_0xc027bf[_0x1adea0];return _0x22ef2d;},_0x1ade(_0x406daa,_0x227acb);}{m.reply(mess[_0x31df39(0x103)]);let buttons=[{'buttonId':_0x31df39(0x106),'buttonText':{'displayText':_0x31df39(0xfb)},'type':0x1}],anu=await fetchJson(_0x31df39(0x104)),buttonMessage={'image':{'url':''+anu[_0x31df39(0xf7)]},'caption':_0x31df39(0xfe),'footer':global[_0x31df39(0xfa)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x31df39(0xfd)](m[_0x31df39(0x109)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'foot': const _0x4b2646=_0x3fab;(function(_0x3c3d40,_0x1eb7f0){const _0x40228d=_0x3fab,_0x10c5bc=_0x3c3d40();while(!![]){try{const _0x4c7ec8=parseInt(_0x40228d(0x14e))/0x1*(parseInt(_0x40228d(0x15d))/0x2)+parseInt(_0x40228d(0x15b))/0x3+parseInt(_0x40228d(0x157))/0x4+parseInt(_0x40228d(0x159))/0x5*(-parseInt(_0x40228d(0x15c))/0x6)+parseInt(_0x40228d(0x14f))/0x7+-parseInt(_0x40228d(0x152))/0x8+-parseInt(_0x40228d(0x15e))/0x9;if(_0x4c7ec8===_0x1eb7f0)break;else _0x10c5bc['push'](_0x10c5bc['shift']());}catch(_0xb35706){_0x10c5bc['push'](_0x10c5bc['shift']());}}}(_0x117e,0x7a0ee));function _0x3fab(_0x489215,_0xabe436){const _0x117e1c=_0x117e();return _0x3fab=function(_0x3fab9a,_0x47ebea){_0x3fab9a=_0x3fab9a-0x14e;let _0xbac4fe=_0x117e1c[_0x3fab9a];return _0xbac4fe;},_0x3fab(_0x489215,_0xabe436);}function _0x117e(){const _0xbc3288=['result','1818544wOxwfq','sendMessage','644855UiJdUN','foot','1444725HrtzKj','30FrGCFw','1295214AHfDcx','5692824OiByEe','1wXGErM','4150797qqHbFb','botnma','wait','3195584gVefky','https://wallebotapi.mitomods.com/docs/nsfw/foot?apikey=Donitas','ZED\x20BOT\x20INC','NEXT'];_0x117e=function(){return _0xbc3288;};return _0x117e();}{m.reply(mess[_0x4b2646(0x151)]);let buttons=[{'buttonId':_0x4b2646(0x15a),'buttonText':{'displayText':_0x4b2646(0x155)},'type':0x1}],anu=await fetchJson(_0x4b2646(0x153)),buttonMessage={'image':{'url':''+anu[_0x4b2646(0x156)]},'caption':_0x4b2646(0x154),'footer':global[_0x4b2646(0x150)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x4b2646(0x158)](m['chat'],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'gangbang': function _0xe975(_0x159cbe,_0x1a1f6b){const _0xbd2375=_0xbd23();return _0xe975=function(_0xe97543,_0xfaebcc){_0xe97543=_0xe97543-0xa2;let _0x2add0b=_0xbd2375[_0xe97543];return _0x2add0b;},_0xe975(_0x159cbe,_0x1a1f6b);}const _0x31c93e=_0xe975;(function(_0x34f6de,_0xc47e69){const _0x1bd83a=_0xe975,_0x2f044e=_0x34f6de();while(!![]){try{const _0x4b4556=-parseInt(_0x1bd83a(0xaa))/0x1+-parseInt(_0x1bd83a(0xa6))/0x2+parseInt(_0x1bd83a(0xa4))/0x3+-parseInt(_0x1bd83a(0xa9))/0x4+parseInt(_0x1bd83a(0xab))/0x5+parseInt(_0x1bd83a(0xa5))/0x6+-parseInt(_0x1bd83a(0xac))/0x7;if(_0x4b4556===_0xc47e69)break;else _0x2f044e['push'](_0x2f044e['shift']());}catch(_0x1a09c2){_0x2f044e['push'](_0x2f044e['shift']());}}}(_0xbd23,0x9f945));function _0xbd23(){const _0x3c4f6b=['gangbang','sendMessage','botnma','chat','3659247QsAofT','7443054GIdCkj','1476024qGUVot','wait','result','2316992EcEJJJ','61942YarfjT','2722435PUkgOQ','6803342KdTEtR'];_0xbd23=function(){return _0x3c4f6b;};return _0xbd23();}{m.reply(mess[_0x31c93e(0xa7)]);let buttons=[{'buttonId':_0x31c93e(0xad),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/gangbang?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0x31c93e(0xa8)]},'caption':'ZED\x20BOT\x20INC','footer':global[_0x31c93e(0xa2)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x31c93e(0xae)](m[_0x31c93e(0xa3)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'glasses': function _0x53c9(_0x429892,_0x3cc253){const _0x1ceefe=_0x1cee();return _0x53c9=function(_0x53c92d,_0x1f9276){_0x53c92d=_0x53c92d-0xac;let _0x33eaaa=_0x1ceefe[_0x53c92d];return _0x33eaaa;},_0x53c9(_0x429892,_0x3cc253);}function _0x1cee(){const _0x25d02d=['NEXT','20mOgQMX','50yTlkag','result','wait','2xsEsvT','glasses','2432526QSPzIT','3387LGBWDu','300852KNpHGV','chat','1274026EdaQJc','452930usPFTW','403953fcaTko','21zLGOEK','360096epCFOb'];_0x1cee=function(){return _0x25d02d;};return _0x1cee();}const _0xb37883=_0x53c9;(function(_0x59d677,_0x34868c){const _0x4b2423=_0x53c9,_0x17fc3c=_0x59d677();while(!![]){try{const _0x4a3066=-parseInt(_0x4b2423(0xae))/0x1+parseInt(_0x4b2423(0xb8))/0x2*(parseInt(_0x4b2423(0xbb))/0x3)+-parseInt(_0x4b2423(0xb4))/0x4*(-parseInt(_0x4b2423(0xaf))/0x5)+parseInt(_0x4b2423(0xba))/0x6*(parseInt(_0x4b2423(0xb1))/0x7)+parseInt(_0x4b2423(0xb2))/0x8+parseInt(_0x4b2423(0xac))/0x9+parseInt(_0x4b2423(0xb5))/0xa*(parseInt(_0x4b2423(0xb0))/0xb);if(_0x4a3066===_0x34868c)break;else _0x17fc3c['push'](_0x17fc3c['shift']());}catch(_0x50a03a){_0x17fc3c['push'](_0x17fc3c['shift']());}}}(_0x1cee,0xa0baf));{m.reply(mess[_0xb37883(0xb7)]);let buttons=[{'buttonId':_0xb37883(0xb9),'buttonText':{'displayText':_0xb37883(0xb3)},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/glasses?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xb37883(0xb6)]},'caption':'ZED\x20BOT\x20INC','footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc['sendMessage'](m[_0xb37883(0xad)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'hentai': const _0x557bd7=_0x3f2e;function _0x3f2e(_0x5b985f,_0xddfec4){const _0x1de90c=_0x1de9();return _0x3f2e=function(_0x3f2e9a,_0x52f2b2){_0x3f2e9a=_0x3f2e9a-0xc5;let _0x1d4ee1=_0x1de90c[_0x3f2e9a];return _0x1d4ee1;},_0x3f2e(_0x5b985f,_0xddfec4);}(function(_0x3914ac,_0x19aaf5){const _0x55b090=_0x3f2e,_0x5db243=_0x3914ac();while(!![]){try{const _0x999abf=parseInt(_0x55b090(0xcb))/0x1+-parseInt(_0x55b090(0xc5))/0x2+-parseInt(_0x55b090(0xcc))/0x3*(-parseInt(_0x55b090(0xc7))/0x4)+-parseInt(_0x55b090(0xd2))/0x5+parseInt(_0x55b090(0xd3))/0x6+parseInt(_0x55b090(0xc6))/0x7+-parseInt(_0x55b090(0xcf))/0x8;if(_0x999abf===_0x19aaf5)break;else _0x5db243['push'](_0x5db243['shift']());}catch(_0x4d6a62){_0x5db243['push'](_0x5db243['shift']());}}}(_0x1de9,0xc1657));function _0x1de9(){const _0x29aa05=['botnma','https://wallebotapi.mitomods.com/docs/nsfw/hentai?apikey=Donitas','10321936sHviRH','wait','sendMessage','2850540bThNsq','2947980ojZRCL','hentai','result','936718BeETIs','3448900EhDIAq','4GRJYMS','chat','ZED\x20BOT\x20INC','NEXT','1055826EhkRDM','3243012IjQTKo'];_0x1de9=function(){return _0x29aa05;};return _0x1de9();}{m.reply(mess[_0x557bd7(0xd0)]);let buttons=[{'buttonId':_0x557bd7(0xd4),'buttonText':{'displayText':_0x557bd7(0xca)},'type':0x1}],anu=await fetchJson(_0x557bd7(0xce)),buttonMessage={'image':{'url':''+anu[_0x557bd7(0xd5)]},'caption':_0x557bd7(0xc9),'footer':global[_0x557bd7(0xcd)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x557bd7(0xd1)](m[_0x557bd7(0xc8)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'masturbation': const _0x4885dc=_0x39be;(function(_0x4a710a,_0x501687){const _0x314ea1=_0x39be,_0x15ad79=_0x4a710a();while(!![]){try{const _0x31306d=parseInt(_0x314ea1(0x13b))/0x1+parseInt(_0x314ea1(0x144))/0x2+parseInt(_0x314ea1(0x138))/0x3*(-parseInt(_0x314ea1(0x145))/0x4)+parseInt(_0x314ea1(0x13d))/0x5+parseInt(_0x314ea1(0x13c))/0x6+-parseInt(_0x314ea1(0x143))/0x7+-parseInt(_0x314ea1(0x13e))/0x8;if(_0x31306d===_0x501687)break;else _0x15ad79['push'](_0x15ad79['shift']());}catch(_0x156ce3){_0x15ad79['push'](_0x15ad79['shift']());}}}(_0x2db1,0x632dd));function _0x2db1(){const _0x4b0ce4=['5319874ivXSxh','343508uSHufn','1032GItPlt','sendMessage','7263jqAoDL','chat','NEXT','767421ERuKoN','2017512WpkwiI','3415895tEdPKN','1342152gbfRyz','masturbation','https://wallebotapi.mitomods.com/docs/nsfw/masturbation?apikey=Donitas','ZED\x20BOT\x20INC','result'];_0x2db1=function(){return _0x4b0ce4;};return _0x2db1();}function _0x39be(_0x202be7,_0x5f1496){const _0x2db1e9=_0x2db1();return _0x39be=function(_0x39bef8,_0x181e4b){_0x39bef8=_0x39bef8-0x137;let _0xa4f1b8=_0x2db1e9[_0x39bef8];return _0xa4f1b8;},_0x39be(_0x202be7,_0x5f1496);}{m.reply(mess['wait']);let buttons=[{'buttonId':_0x4885dc(0x13f),'buttonText':{'displayText':_0x4885dc(0x13a)},'type':0x1}],anu=await fetchJson(_0x4885dc(0x140)),buttonMessage={'image':{'url':''+anu[_0x4885dc(0x142)]},'caption':_0x4885dc(0x141),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x4885dc(0x137)](m[_0x4885dc(0x139)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'neko': function _0x32ab(){const _0x4bb5c9=['442936QBYDwG','174198mbfNBQ','370TIUWVi','botnma','7sDVjyt','chat','4180WFizDU','2057085PKdiwN','1880vGNOcd','13288Dtzmjl','sendMessage','40VzPOsK','3135564JqARhG','result','2223894JcYUbE','neko'];_0x32ab=function(){return _0x4bb5c9;};return _0x32ab();}const _0xe7198c=_0x5d77;function _0x5d77(_0x319f47,_0x202d8d){const _0x32ab09=_0x32ab();return _0x5d77=function(_0x5d7766,_0x36f4a5){_0x5d7766=_0x5d7766-0x1cf;let _0x27f02e=_0x32ab09[_0x5d7766];return _0x27f02e;},_0x5d77(_0x319f47,_0x202d8d);}(function(_0x2fb1da,_0x5ba1ac){const _0x4b1c41=_0x5d77,_0x404c95=_0x2fb1da();while(!![]){try{const _0x1a9066=parseInt(_0x4b1c41(0x1da))/0x1*(parseInt(_0x4b1c41(0x1de))/0x2)+-parseInt(_0x4b1c41(0x1d9))/0x3*(parseInt(_0x4b1c41(0x1d3))/0x4)+parseInt(_0x4b1c41(0x1cf))/0x5+parseInt(_0x4b1c41(0x1d6))/0x6*(parseInt(_0x4b1c41(0x1dc))/0x7)+parseInt(_0x4b1c41(0x1d8))/0x8+-parseInt(_0x4b1c41(0x1d4))/0x9+-parseInt(_0x4b1c41(0x1d0))/0xa*(-parseInt(_0x4b1c41(0x1d1))/0xb);if(_0x1a9066===_0x5ba1ac)break;else _0x404c95['push'](_0x404c95['shift']());}catch(_0x128a7f){_0x404c95['push'](_0x404c95['shift']());}}}(_0x32ab,0xddded));{m.reply(mess['wait']);let buttons=[{'buttonId':_0xe7198c(0x1d7),'buttonText':{'displayText':'NEXT'},'type':0x1}],anu=await fetchJson('https://wallebotapi.mitomods.com/docs/nsfw/neko?apikey=Donitas'),buttonMessage={'image':{'url':''+anu[_0xe7198c(0x1d5)]},'caption':'ZED\x20BOT\x20INC','footer':global[_0xe7198c(0x1db)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0xe7198c(0x1d2)](m[_0xe7198c(0x1dd)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'orgy': const _0x53f892=_0x258a;function _0x258a(_0x288261,_0x35748f){const _0x2afae5=_0x2afa();return _0x258a=function(_0x258a73,_0x2c6b6e){_0x258a73=_0x258a73-0x1dc;let _0x461db8=_0x2afae5[_0x258a73];return _0x461db8;},_0x258a(_0x288261,_0x35748f);}(function(_0xe86978,_0x59f3a4){const _0x1b8578=_0x258a,_0xf8390c=_0xe86978();while(!![]){try{const _0x58697b=parseInt(_0x1b8578(0x1e6))/0x1*(-parseInt(_0x1b8578(0x1e3))/0x2)+-parseInt(_0x1b8578(0x1e0))/0x3+parseInt(_0x1b8578(0x1e4))/0x4*(-parseInt(_0x1b8578(0x1e8))/0x5)+parseInt(_0x1b8578(0x1dc))/0x6*(parseInt(_0x1b8578(0x1e5))/0x7)+parseInt(_0x1b8578(0x1eb))/0x8+parseInt(_0x1b8578(0x1ea))/0x9*(-parseInt(_0x1b8578(0x1ec))/0xa)+parseInt(_0x1b8578(0x1de))/0xb;if(_0x58697b===_0x59f3a4)break;else _0xf8390c['push'](_0xf8390c['shift']());}catch(_0x14c2e9){_0xf8390c['push'](_0xf8390c['shift']());}}}(_0x2afa,0x5a65a));{m.reply(mess[_0x53f892(0x1e1)]);let buttons=[{'buttonId':'orgy','buttonText':{'displayText':_0x53f892(0x1dd)},'type':0x1}],anu=await fetchJson(_0x53f892(0x1e7)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x53f892(0x1df),'footer':global['botnma'],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x53f892(0x1e2)](m[_0x53f892(0x1e9)],buttonMessage,{'quoted':m});}function _0x2afa(){const _0x26e94d=['wait','sendMessage','42xZkCLe','4pcOWox','7kGQNac','7554kqNxpR','https://wallebotapi.mitomods.com/docs/nsfw/orgy?apikey=Donitas','796285sLhnVD','chat','63pMrUmd','5784576SVZCuM','700280TTvpbE','3563706sZKpaj','NEXT','5001612vpTrRb','ZED\x20BOT\x20INC','1780086nQOMte'];_0x2afa=function(){return _0x26e94d;};return _0x2afa();}
                    break
                    
                    case 'panties': function _0xc46f(){const _0x15cf6b=['chat','botnma','4153680mcaeiO','10dskSOg','6VZGKUe','https://wallebotapi.mitomods.com/docs/nsfw/panties?apikey=Donitas','panties','result','411971LGkalH','5345496FwFokC','1574937DlDbQe','wait','NEXT','73537hWPSvW','ZED\x20BOT\x20INC','5772445fuusqU','870954wEriPw','sendMessage'];_0xc46f=function(){return _0x15cf6b;};return _0xc46f();}const _0x42cb40=_0x1864;(function(_0x1cd42a,_0x42582c){const _0x8d8311=_0x1864,_0x594a3a=_0x1cd42a();while(!![]){try{const _0x2f503b=-parseInt(_0x8d8311(0xab))/0x1*(parseInt(_0x8d8311(0xb3))/0x2)+parseInt(_0x8d8311(0xae))/0x3+parseInt(_0x8d8311(0xb2))/0x4+-parseInt(_0x8d8311(0xad))/0x5+parseInt(_0x8d8311(0xa2))/0x6*(-parseInt(_0x8d8311(0xa6))/0x7)+parseInt(_0x8d8311(0xa7))/0x8+parseInt(_0x8d8311(0xa8))/0x9;if(_0x2f503b===_0x42582c)break;else _0x594a3a['push'](_0x594a3a['shift']());}catch(_0x2c7643){_0x594a3a['push'](_0x594a3a['shift']());}}}(_0xc46f,0x9042b));function _0x1864(_0x275477,_0x1f2753){const _0xc46fe4=_0xc46f();return _0x1864=function(_0x186434,_0x36524d){_0x186434=_0x186434-0xa2;let _0x3824f7=_0xc46fe4[_0x186434];return _0x3824f7;},_0x1864(_0x275477,_0x1f2753);}{m.reply(mess[_0x42cb40(0xa9)]);let buttons=[{'buttonId':_0x42cb40(0xa4),'buttonText':{'displayText':_0x42cb40(0xaa)},'type':0x1}],anu=await fetchJson(_0x42cb40(0xa3)),buttonMessage={'image':{'url':''+anu[_0x42cb40(0xa5)]},'caption':_0x42cb40(0xac),'footer':global[_0x42cb40(0xb1)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x42cb40(0xaf)](m[_0x42cb40(0xb0)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'pussy': const _0x5d1ac1=_0x35f7;(function(_0x515431,_0x70562f){const _0x52c802=_0x35f7,_0x4bc375=_0x515431();while(!![]){try{const _0x2e851b=parseInt(_0x52c802(0x7c))/0x1*(-parseInt(_0x52c802(0x86))/0x2)+parseInt(_0x52c802(0x8a))/0x3*(parseInt(_0x52c802(0x8d))/0x4)+parseInt(_0x52c802(0x85))/0x5+parseInt(_0x52c802(0x87))/0x6*(parseInt(_0x52c802(0x88))/0x7)+-parseInt(_0x52c802(0x80))/0x8*(parseInt(_0x52c802(0x7d))/0x9)+parseInt(_0x52c802(0x89))/0xa+-parseInt(_0x52c802(0x84))/0xb;if(_0x2e851b===_0x70562f)break;else _0x4bc375['push'](_0x4bc375['shift']());}catch(_0x366ecb){_0x4bc375['push'](_0x4bc375['shift']());}}}(_0x49e2,0x99615));function _0x35f7(_0x289517,_0x2517a0){const _0x49e200=_0x49e2();return _0x35f7=function(_0x35f7b0,_0x1c6d27){_0x35f7b0=_0x35f7b0-0x7c;let _0x290623=_0x49e200[_0x35f7b0];return _0x290623;},_0x35f7(_0x289517,_0x2517a0);}function _0x49e2(){const _0x4b7ab0=['chat','pussy','https://wallebotapi.mitomods.com/docs/nsfw/pussy?apikey=Donitas','12379422UPfGhI','5262460AgrkWy','2XzkqcF','274782pMMPVY','126urFRZW','9615280iRCPnf','268275jsepKO','NEXT','botnma','24vtNotI','1195213IOocCQ','684YUWPKz','sendMessage','wait','44848SOtwrq'];_0x49e2=function(){return _0x4b7ab0;};return _0x49e2();}{m.reply(mess[_0x5d1ac1(0x7f)]);let buttons=[{'buttonId':_0x5d1ac1(0x82),'buttonText':{'displayText':_0x5d1ac1(0x8b)},'type':0x1}],anu=await fetchJson(_0x5d1ac1(0x83)),buttonMessage={'image':{'url':''+anu['result']},'caption':'ZED\x20BOT\x20INC','footer':global[_0x5d1ac1(0x8c)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x5d1ac1(0x7e)](m[_0x5d1ac1(0x81)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'thighs': function _0x4b34(_0x22ae9d,_0x1b7b0f){const _0x5955d9=_0x5955();return _0x4b34=function(_0x4b34b7,_0x1ddb61){_0x4b34b7=_0x4b34b7-0x1c2;let _0x5d4211=_0x5955d9[_0x4b34b7];return _0x5d4211;},_0x4b34(_0x22ae9d,_0x1b7b0f);}const _0x2221a2=_0x4b34;function _0x5955(){const _0x110e7d=['sendMessage','1093970DSMAQE','botnma','NEXT','https://wallebotapi.mitomods.com/docs/nsfw/thighs?apikey=Donitas','2151395PpSjci','ZED\x20BOT\x20INC','12JMKCVS','19922TmhQUR','wait','492009FBnOUm','72SnrqXB','194080tRRKnp','thighs','5970767VVepYL','121fRvIMb','18GszdWR','51CORiEY','343612uKXWeo','chat'];_0x5955=function(){return _0x110e7d;};return _0x5955();}(function(_0x579e1e,_0x50f2d8){const _0x5d2342=_0x4b34,_0x332d42=_0x579e1e();while(!![]){try{const _0x3a00a0=parseInt(_0x5d2342(0x1d3))/0x1*(parseInt(_0x5d2342(0x1cc))/0x2)+parseInt(_0x5d2342(0x1d5))/0x3*(-parseInt(_0x5d2342(0x1c2))/0x4)+parseInt(_0x5d2342(0x1c9))/0x5*(parseInt(_0x5d2342(0x1d4))/0x6)+parseInt(_0x5d2342(0x1ce))/0x7+-parseInt(_0x5d2342(0x1d0))/0x8*(-parseInt(_0x5d2342(0x1cf))/0x9)+parseInt(_0x5d2342(0x1c5))/0xa+-parseInt(_0x5d2342(0x1d2))/0xb*(parseInt(_0x5d2342(0x1cb))/0xc);if(_0x3a00a0===_0x50f2d8)break;else _0x332d42['push'](_0x332d42['shift']());}catch(_0x3df376){_0x332d42['push'](_0x332d42['shift']());}}}(_0x5955,0xd39ae));{m.reply(mess[_0x2221a2(0x1cd)]);let buttons=[{'buttonId':_0x2221a2(0x1d1),'buttonText':{'displayText':_0x2221a2(0x1c7)},'type':0x1}],anu=await fetchJson(_0x2221a2(0x1c8)),buttonMessage={'image':{'url':''+anu['result']},'caption':_0x2221a2(0x1ca),'footer':global[_0x2221a2(0x1c6)],'buttons':buttons,'headerType':0x4};ZimBotInc[_0x2221a2(0x1c4)](m[_0x2221a2(0x1c3)],buttonMessage,{'quoted':m});}
                    break
                    
                    case 'antivirtex':

if (!m.isGroup) return m.reply(mess.group)
if (!isAdmins && !mek.key.fromMe) return m.reply(mess.admin)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!q) return m.reply(`Choose on or off`)
if (args[0].toLowerCase() === 'on'){
if (isAntiVirtex) return m.reply(`Already active`)
_antivirtex.push(m.chat)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
m.reply(`\`\`\`*Success , Activating the antivirtex feature in the group*\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'off'){
    let anuantivtex = _antivirtex.indexOf(m.chat)
    _antivirtex.splice(anuantivtex, 1)
    fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
    m.reply(`\`\`\`*Success , Disabling the antivirus feature in the group*\`\`\` *${groupMetadata.subject}*`)
    } else {
    m.reply(`*_Choose on or off_*`)
    }
    break
	    case 'couples': {
	    if (isBan) throw mess.ban
	           if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                ZimBotInc.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                ZimBotInc.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break        
            case 'coffe': case 'kopi': {
            if (isBan) throw mess.ban
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `*☕ Random Coffe*`,
                    footer: botname,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
           
            case 'wallpaper': {
            if (isBan) throw mess.ban
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Query Title*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let { wallpaper } = require('./lib/scraper3')
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `wallpaper ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `> Title : ${result.title}\n> Category : ${result.type}\n> Detail : ${result.source}\n> Media Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'slot':
                const sotoy = [
                    '🍊 : 🍒 : 🍐',
                    '🍒 : 🔔 : 🍊',
                    '🍇 : 🍇 : 🍐',
                    '🍊 : 🍋 : 🔔', //ANKER
                    '🔔 : 🍒 : 🍐',
                    '🔔 : 🍒 : 🍊',
                    '🍊 : 🍋 : 🔔',        
                    '🍐 : 🍒 : 🍋',
                    '🍐 : 🍒 : 🍐',
                    '🍊 : 🍒 : 🍒',
                    '🔔 : 🔔 : 🍇',
                    '🍌 : 🍌 : 🔔',
                    '🍐 : 🔔 : 🔔',
                    '🍊 : 🍋 : 🍒',
                    '🍋 : 🍋 : 🍋 Win👑',
                    '🔔 : 🔔 : 🍇',
                    '🔔 : 🍇 : 🍇', 
                    '🔔 : 🍐 : 🔔',
                    '🍌 : 🍌 : 🍌 Win👑'
                    ];
                   	
                    if (somtoyy  == '🍌 : 🍌 : 🍌') {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                    } else if (somtoyy == '🍒 : 🍒 : 🍒') {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                    } else if (somtoyy == '🔔 : 🔔 : 🔔') {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                    } else if (somtoyy == '🍐 : 🍐 : 🍐') {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                    } else if (somtoyy == '🍇 : 🍇 : 🍇') {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)
                    } else {
                    m.reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)
                    }
                     
              break

             
             
            case 'wikimedia': {
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Query Title*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let { wikimedia } = require('./lib/scraper3')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: 'NEXT PIC'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `> Title : ${result.title}\n> Source : ${result.source}\n> Media Url : ${result.image}`,
                    footer: ZimBotInc.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'kbbi': {            
if (isBan) throw mess.ban
            if (!text) throw `Example : ${prefix + command} kerbau`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            anu = await fetchJson(`https://hardianto.xyz/api/info/kbbi?kata=${text}&apikey=hardianto`)                                  
            m.reply(`${anu.result.lema}\n${anu.result.arti[0]}`)
            }
            break
            case 'kodepos': {            
            if (!text) throw `Nama Kotanya Mana contoh : Example : ${prefix + command} kediri`           
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            anu = await fetchJson(`https://cililitan.herokuapp.com/api/kodepos?kota=${text}`)       
            for (let g of anu.result.data) {            
            let helo = `*----「 KODEPOS 」----*\n\n*province* : ${g.province}\n*City* : ${g.city}\n*subdistrict* : ${g.subdistrict}\n*Urban* : ${g.urban}\n*postalcode* : ${g.postalcode}\n\n*ZED BOT INC*`
            m.reply(`${helo}`)
            }
            }
            break
            case 'quotesanime': case 'quoteanime': {
            if (isBan) throw mess.ban
            if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
		let { quotesAnime } = require('./lib/scraper3')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'NEXT'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wp': case 'wattpad': case 'wattpadsearch': {

if (!text) throw 'Enter query' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)                

                let urlnya = text

	            xa.Wattpad(urlnya)

	            .then(async(result) => {	  	                                	                      	            		                  			    				

				let link = await getBuffer(result[0].thumb)

                ZimBotInc.sendMessage(m.chat, { image: link, caption: `${result[0].description}\nTitle: ${result[0].judul}\nAuthor: Hxcker-263\nDibaca: ${result[0].dibaca}\nDivote: ${result[0].divote}\nBab: ${result[0].bab}\nWaktu: ${result[0].waktu}\nUrl: ${result[0].url}` }, { quoted: m })                                              

            }).catch((err) => m.reply(`*feature error*`))

            }		

			break

//━━━━━━━━━━━━━━━━━━━━[ TEXT MAKER, PHOTOOXY, IMAGE EFFECT,  ]━━━━━━━━━━━━━━━━━━━━
     
     case 'tahta': case 'hartatahta': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Enter Example Text : .hartatahta alyabot'
//if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
peh = `https://xteam.xyz/tahta?text=${text}&APIKEY=${setting.riy}`
ZimBotInc.sendMessage(m.chat, {image: await getBuffer(peh)}, {quoted:m}).catch ((err) => m.reply('error'))     
}
break

     case 'broken-glass': case 'neon-light': case 'black-pink': case 'hallowen': case 'art-papper': case 'magma': case 'glossy':  case 'grafity-text': case 'watercolor': case 'multi-color': case 'neon-devil': case 'sky-text': case 'vintage': case 'writing': case 'engraved': case 'glue-text': case 'holograpic': case 'deluxe-silver': case 'fabric': case 'wicker': case 'larva': case 'toxic': case 'koi': case 'bread': case 'horor-blood': case 'honey': case 'ice': case 'rusty': case 'christmas': case 'gradien': case 'drop-water': case 'harry-potter': case '3dstone': case '1917': case 'thunder2': case 'stroberi': case 'blood': case 'joker-logo': {
     if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/textpro/${command}?text=${text}&apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `Text Pro ${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
     case 'marvel-logo2': case 'lion-logo': case 'pornhub': case 'avengers-logo': case 'ninja-logo': case 'grafity-text2' : case 'astone': case 'space': case 'logo-wolf2': case 'logo-wolf': case 'captain': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api-riychdwayne.herokuapp.com/api/textpro/${command}?text=${text}&text2=.&apikey=${setting.riy}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `Text Pro ${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'silk':  case '3dnature': case 'bevel': case 'birthdaycake': case  'burnpaper':  case 'coffee': case 'coffee-heartcup': case 'embroiderytext': case 'flaming': case 'flowertypo': case 'funnycup': case 'fur': case 'gerbang': case 'glowrainbow': case 'gradientavatar': case 'graffititext': case 'harrypotter': case 'lovemessage': case 'luxuryroyal': case 'neonlight': case 'sweetcandy': case 'summertext': case 'woodheart': case 'woodblock': case 'yellowroses': case 'wolfmetal': case 'underwaterocean': {
                if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            anu = await getBuffer(`https://violetics.pw/api/photooxy/${command}?apikey=${setting.violkey}&text=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*PHOTO OXY ${command}*` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
     case 'wanted': case 'ytcomment': case 'beautiful': case 'jail': case 'fotojatoh': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'gay': case 'wanted': case 'rip': case 'delete': {
     if (isBan) throw mess.ban
     if (!isPremium && !isCreator) throw 'only premium'
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	            if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                ZimBotInc.sendMessage(m.chat, { image: buf, caption: `Effect ${command}` }, { quoted: m}).catch ((err) => m.reply('error'))
                }
                break
                //TRUTH OR DARE

                //EPHOTO HERE
                //EPHOTO HERE
                //COOL BOT
case 'graffiti': case 'angel': case 'queen':  {
if (isBan) throw mess.ban
if (!isPremium && !isCreator) throw 'only premium'
                if (!text) throw `Example : ${prefix + command} nama anime`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.akuari.my.id/ephoto/${command}?text=${text}&text_2=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
case '3d-wood': case 'angels-wings': case 'snake-text': case 'redhot-metal2': case 'sandsummer-beach': case 'snow-text': case 'water-3d': case 'water-effect': case 'wet-glass': case 'status-mood2': case 'summerysand': {
    if (isBan) throw mess.ban
    if (!isPremium && !isCreator) throw 'only premium'
                if (!text) throw `Example : ${prefix + command} nama anime`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
                if (isLimit < 1) return m.reply(mess.endLimit)
                    kurangLimit(m.sender, 1)
                     m.reply(`*1 limit used*`)
                    anu = await getBuffer(`https://violetics.pw/api/ephoto360/${command}?apikey=${setting.violkey}&text=${text}`)
                    ZimBotInc.sendMessage(m.chat, { image: anu, caption: `*EPHOTO ${command}*` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
                    }
                    break
                break
                case 'fuckboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckboy?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'fuckgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/fuckgirl?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'bucinserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/bucinserti?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'goodboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/goodboy?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'goodgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/goodgirl?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
                case 'badboyserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/badboy?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
               case 'badgirlserti': {
                if (!text) throw `Example : ${prefix + command} text`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await getBuffer(`https://api.lolhuman.xyz/api/badgirl?apikey=${setting.lolkey}&name=${text}`)
                ZimBotInc.sendMessage(m.chat, { image: anu, caption: `${command}` }, { quoted: m}).catch((err) => m.reply('*Sorry Xteam server is down*'))
	            }
                break
//━━━━━━━━━━━━━━━━━━━━[ FUN PRIMBON ]━━━━━━━━━━━━━━━━━━━━

	    case 'nomerhoki': case 'nomorhoki': {
	    ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!Number(text)) throw `Example : ${prefix + command} 6288292024190`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await primbon.nomer_hoki(Number(text))
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME HP :* ${anu.message.nomer_hp}\n> *CHECK POINT :* ${anu.message.angka_shuzi}\n> *ENERGY POSITION :*\n- Riches : ${anu.message.energi_positif.kekayaan}\n- Health : ${anu.message.energi_positif.kesehatan}\n- Love : ${anu.message.energi_positif.cinta}\n- Stability : ${anu.message.energi_positif.kestabilan}\n- Percentage : ${anu.message.energi_positif.persentase}\n> *Negative Energy :*\n- Dispute : ${anu.message.energi_negatif.perselisihan}\n- Loss : ${anu.message.energi_negatif.kehilangan}\n- Disaster: ${anu.message.energi_negatif.malapetaka}\n- destruction : ${anu.message.energi_negatif.kehancuran}\n- Percentage : ${anu.message.energi_negatif.persentase}`, m)
            }
            break
            case 'artimimpi': case 'tafsirmimpi': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} shopping`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await primbon.tafsir_mimpi(text)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Dream :* ${anu.message.mimpi}\n> *ARTI :* ${anu.message.arti}\n> *SOLUTION :* ${anu.message.solusi}`, m)
            }
            break
            case 'ramalanjodoh': case 'ramaljodoh': {
             ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Such as, 7, 7, 2005, Girlfriend, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *YOUR NAME :* ${anu.message.nama_anda.nama}\n> *YOUR BIRTH :* ${anu.message.nama_anda.tgl_lahir}\n> *Spouse Name :* ${anu.message.nama_pasangan.nama}\n> *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Results :* ${anu.message.result}\n> *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalanjodohbali': case 'ramaljodohbali': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *YOUR NAME :* ${anu.message.nama_anda.nama}\n> *YOUR BIRTH :* ${anu.message.nama_anda.tgl_lahir}\n> *SPOUSE NAME :* ${anu.message.nama_pasangan.nama}\n> *BORN COUPLE :* ${anu.message.nama_pasangan.tgl_lahir}\n> *RESULTS :* ${anu.message.result}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
            break
            case 'suamiistri': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.suami.nama}\n> *Husband Born :* ${anu.message.suami.tgl_lahir}\n> *Wife's name:* ${anu.message.istri.nama}\n> *Born Wife :* ${anu.message.istri.tgl_lahir}\n> *RESULTS :* ${anu.message.result}\n> *Notes :* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalancinta': case 'ramalcinta': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005, Novia, 16, 11, 2004`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
                let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Your name :* ${anu.message.nama_anda.nama}\n> *Your birth :* ${anu.message.nama_anda.tgl_lahir}\n> *Spouse Name :* ${anu.message.nama_pasangan.nama}\n> *Born Couple :* ${anu.message.nama_pasangan.tgl_lahir}\n> *Positive side :* ${anu.message.sisi_positif}\n> *Negative Side :* ${anu.message.sisi_negatif}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
            break
            case 'artinama': {            
                if (!text) throw `Example : ${prefix + command} Dika Ardianta`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await primbon.arti_nama(text)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *ARTI :* ${anu.message.arti}\n> *NOTES :* ${anu.message.catatan}`, m)
            }
            break
            case 'kecocokannama': case 'cocoknama': {
            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Life Path :* ${anu.message.life_path}\n> *Destiny :* ${anu.message.destiny}\n> *Destiny Desire :* ${anu.message.destiny_desire}\n> *Personality :* ${anu.message.personality}\n> *Percentage :* ${anu.message.persentase_kecocokan}`, m)
            }
            break
            case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
            // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika|Novia`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [nama1, nama2] = text.split`|`
                let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendImage(m.chat,  anu.message.gambar, `> *Your name :* ${anu.message.nama_anda}\n> *Spouse Name :* ${anu.message.nama_pasangan}\n> *Positive side :* ${anu.message.sisi_positif}\n> *Negative Side :* ${anu.message.sisi_negatif}`, m)
            }
            break
            case 'jadianpernikahan': case 'jadiannikah': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Tanggal Pernikahan :* ${anu.message.tanggal}\n> *characteristics:* ${anu.message.karakteristik}`, m)
            }
            break
            case 'sifatusaha': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Effort :* ${anu.message.usaha}`, m)
            }
            break
            case 'rejeki': case 'rezeki': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Sustenance:* ${anu.message.rejeki}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'pekerjaan': case 'kerja': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born :* ${anu.message.hari_lahir}\n> *Work :* ${anu.message.pekerjaan}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'ramalannasib': case 'ramalnasib': case 'nasib': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.ramalan_nasib(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Analysis :* ${anu.message.analisa}\n> *Root Number :* ${anu.message.angka_akar}\n> *Properties:* ${anu.message.sifat}\n> *Elemennt :* ${anu.message.elemen}\n> *Lucky Numbers :* ${anu.message.angka_keberuntungan}`, m)
            }
            break
            case 'potensipenyakit': case 'penyakit': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Analysis :* ${anu.message.analisa}\n> *SECTOR :* ${anu.message.sektor}\n> *Element :* ${anu.message.elemen}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'artitarot': case 'tarot': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendImage(m.chat, anu.message.image, `> *Born :* ${anu.message.tgl_lahir}\n> *Symbol tart :* ${anu.message.simbol_tarot}\n> *Arti :* ${anu.message.arti}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'fengshui': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 1, 2005\n\nNote : ${prefix + command} Name, gender, year of birth\nGender : 1 for boys & 2 for girlsn`
                let [nama, gender, tahun] = text.split`,`
                let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tahun_lahir}\n> *Gender :* ${anu.message.jenis_kelamin}\n> *Kua Numbers :* ${anu.message.angka_kua}\n> *Group :* ${anu.message.kelompok}\n> *CHARACTER :* ${anu.message.karakter}\n> *Good Sector :* ${anu.message.sektor_baik}\n> *Bad Sector :* ${anu.message.sektor_buruk}`, m)
            }
            break
            case 'haribaik': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.petung_hari_baik(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born :* ${anu.message.tgl_lahir}\n> *Kala Tinantang :* ${anu.message.kala_tinantang}\n> *Info :* ${anu.message.info}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'harisangar': case 'taliwangke': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born :* ${anu.message.tgl_lahir}\n> *Results :* ${anu.message.result}\n> *Info :* ${anu.message.info}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'harinaas': case 'harisial': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date : :* ${anu.message.tgl_lahir}\n> *fateful day :* ${anu.message.hari_naas}\n> *Info :* ${anu.message.catatan}\n> *NOTES* ${anu.message.info}`, m)
            }
            break
            case 'nagahari': case 'harinaga': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date :* ${anu.message.tgl_lahir}\n> *Dragon Day Direction :* ${anu.message.arah_naga_hari}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'arahrejeki': case 'arahrezeki': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Born Day :* ${anu.message.hari_lahir}\n> *Born Date : :* ${anu.message.tgl_lahir}\n> *Sustenance Direction:* ${anu.message.arah_rejeki}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'peruntungan': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} DIka, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
                let [nama, tgl, bln, thn, untuk] = text.split`,`
                let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'weton': case 'wetonjawa': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.weton_jawa(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Date :* ${anu.message.tanggal}\n> *Number of Neptune :* ${anu.message.jumlah_neptu}\n> *Character of the Day:* ${anu.message.watak_hari}\n> *Dragon Day :* ${anu.message.naga_hari}\n> *Good Hour :* ${anu.message.jam_baik}\n> *Birth Character :* ${anu.message.watak_kelahiran}`, m)
            }
            break
            case 'sifat': case 'karakter': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Lifeline :* ${anu.message.garis_hidup}`, m)
            }
            break
            case 'keberuntungan': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} Dika, 7, 7, 2005`
                let [nama, tgl, bln, thn] = text.split`,`
                let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *NAME :* ${anu.message.nama}\n> *Born :* ${anu.message.tgl_lahir}\n> *Results :* ${anu.message.result}`, m)
            }
            break
            case 'memancing': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
                let [tgl, bln, thn] = text.split`,`
                let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Date :* ${anu.message.tgl_memancing}\n> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'masasubur': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
                let [tgl, bln, thn, siklus] = text.split`,`
                let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Results :* ${anu.message.result}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'zodiak': case 'zodiac': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix+ command} 7 7 2005`
                let zodiak = [
                    ["capricorn", new Date(1970, 0, 1)],
                    ["aquarius", new Date(1970, 0, 20)],
                    ["pisces", new Date(1970, 1, 19)],
                    ["aries", new Date(1970, 2, 21)],
                    ["taurus", new Date(1970, 3, 21)],
                    ["gemini", new Date(1970, 4, 21)],
                    ["cancer", new Date(1970, 5, 22)],
                    ["leo", new Date(1970, 6, 23)],
                    ["virgo", new Date(1970, 7, 23)],
                    ["libra", new Date(1970, 8, 23)],
                    ["scorpio", new Date(1970, 9, 23)],
                    ["sagittarius", new Date(1970, 10, 22)],
                    ["capricorn", new Date(1970, 11, 22)]
                ].reverse()

                function getZodiac(month, day) {
                    let d = new Date(1970, month - 1, day)
                    return zodiak.find(([_,_d]) => d >= _d)[0]
                }
                let date = new Date(text)
                if (date == 'Invalid Date') throw date
                let d = new Date()
                let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
                let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

                let zodiac = await getZodiac(birth[1], birth[2])
                
                let anu = await primbon.zodiak(zodiac)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Zodiak :* ${anu.message.zodiak}\n> *NAME:* ${anu.message.nomor_keberuntungan}\n> *Aroma :* ${anu.message.aroma_keberuntungan}\n> *Planet :* ${anu.message.planet_yang_mengitari}\n> *Flower :* ${anu.message.bunga_keberuntungan}\n> *Warn :* ${anu.message.warna_keberuntungan}\n> *Batu :* ${anu.message.batu_keberuntungan}\n> *Element :* ${anu.message.elemen_keberuntungan}\n> *Zodiac Couple :* ${anu.message.pasangan_zodiak}\n> *NOTES* ${anu.message.catatan}`, m)
            }
            break
            case 'shio': {
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
                let anu = await primbon.shio(text)
                if (anu.status == false) return m.reply(anu.message)
                ZimBotInc.sendText(m.chat, `> *Results :* ${anu.message}`, m)
            }
            break
	    case 'stalker': case 'stalk': {
	    if (isBan) throw mess.ban
	 //   //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		//if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply('Limit Harian Anda Telah Habis')
                if (!text) return m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let [type, id, zone] = args
                if (type.toLowerCase() == 'ff') {
                    if (!id) throw `No Query id, Example ${prefix + command} ff 552992060`
                    let anu = await fetchJson(api('zenz', '/api/nickff', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ml') {
                    if (!id) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    if (!zone) throw `No Query id, Example : ${prefix + command} ml 214885010 2253`
                    let anu = await fetchJson(api('zenz', '/api/nickml', { apikey: global.APIKeys[global.APIs['zenz']], query: id, query2: zone }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nZone : ${anu.result.zoneId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'aov') {
                    if (!id) throw `No Query id, Example ${prefix + command} aov 293306941441181`
                    let anu = await fetchJson(api('zenz', '/api/nickaov', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'cod') {
                    if (!id) throw `No Query id, Example ${prefix + command} cod 6290150021186841472`
                    let anu = await fetchJson(api('zenz', '/api/nickcod', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'pb') {
                    if (!id) throw `No Query id, Example ${prefix + command} pb riio46`
                    let anu = await fetchJson(api('zenz', '/api/nickpb', { apikey: global.APIKeys[global.APIs['zenz']], query: id }))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`ID : ${anu.result.gameId}\nUsername : ${anu.result.userName}`)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'ig') {
                    if (!id) throw `No Query username, Example : ${prefix + command} ig cak_haho`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/ig', { username: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    ZimBotInc.sendMedia(m.chat, anu.caption.profile_hd, '', `> Full Name : ${anu.caption.full_name}\n> User Name : ${anu.caption.user_name}\n> ID ${anu.caption.user_id}\n> Followers : ${anu.caption.followers}\n> Following : ${anu.caption.following}\n> Bussines : ${anu.caption.bussines}\n> Profesional : ${anu.caption.profesional}\n> Verified : ${anu.caption.verified}\n> Private : ${anu.caption.private}\n> Bio : ${anu.caption.biography}\n> Bio Url : ${anu.caption.bio_url}`, m)
		    db.data.users[m.sender].limit -= 1
                } else if (type.toLowerCase() == 'npm') {
                    if (!id) throw `No Query username, Example : ${prefix + command} npm scrape-primbon`
                    let { result: anu } = await fetchJson(api('zenz', '/api/stalker/npm', { query: id }, 'apikey'))
                    if (anu.status == false) return m.reply(anu.result.message)
                    m.reply(`> Name : ${anu.name}\n> Version : ${Object.keys(anu.versions)}\n> Created : ${tanggal(anu.time.created)}\n> Modified : ${tanggal(anu.time.modified)}\n> Maintainers :\n ${anu.maintainers.map(v => `- ${v.name} : ${v.email}`).join('\n')}\n\n> Description : ${anu.description}\n> Homepage : ${anu.homepage}\n> Keywords : ${anu.keywords}\n> Author : ${anu.author.name}\n> License : ${anu.license}\n> Readme : ${anu.readme}`)
		    db.data.users[m.sender].limit -= 1
                } else {
                    m.reply(`Example : ${prefix +command} type id\n\nList Type :\n1. ff (Free Fire)\n2. ml (Mobile Legends)\n3. aov (Arena Of Valor)\n4. cod (Call Of Duty)\n5. pb (point Blank)\n6. ig (Instagram)\n7. npm (https://npmjs.com)`)
                }
            }
            break

            case 'tiktok4': { //DOWNLOADER
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'                
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                //m.reply(mess.wait)
                hx.ttdownloader(`${text}`).then(async (data) => {                      
                    let buttons = [                    
                    {buttonId: `${prefix}tiktokmp3 ${text}`, buttonText: {displayText: 'AUDIO'}, type: 1}
                ]
                let buttonMessage = {
                    video: { url: data.nowm },                    
                    caption: `${util.format(data)}`,
                    footer: 'Please Select Below',
                    buttons: buttons,
                    headerType: 5
                }
                ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })                
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            case 'tiktok2': {
if (!text) throw `Use example ${prefix + command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
anu = await fetchJson(`https://violetics.pw/api/downloader/tiktok?apikey=df7d-425a-3bc8&url=${text}`)
let listmn = `*▊▊▊TIKTOK DL▊▊▊*\n\n*Title:* ${anu.result.title}\n*Author:* ${anu.result.id}\n*Url:* ${anu.result.url}`
buf = await getBuffer(anu.result.thumb)
buf2 = await getBuffer(anu.result.link_dl2)
let message = await prepareWAMessageMedia({ video: buf2, gifPlayback:false, jpegThumbnail:buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: listmn,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/Team263Hacks'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/hacker-263/ZeD-Bot'
}
},{
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://www.instagram.com/young_money_zw'
}
}, {
quickReplyButton: {
displayText: 'PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'DONATE',
id: 'donadi'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break
case 'tiktok': case 'tiktoknowm': case 'tiktokwm': case 'tt': case 'ttnowm': case 'ttwm': {
if (isBan) throw mess.ban
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `
                  *▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : Hacker-263\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*QUALITY* : nowatermark\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKE* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ZED BOT INC*`
                  buf = await getBuffer(video.author.avatar)                
                  ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'tiktok5': case 'tt5': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `*▊▊▊TIKTOK DL▊▊▊*\n\n*AUTHOR* : Hxcker-263\n*NICKNAME* : ${video.author.nickname}\n*CAPTION* : ${video.description}\n*COMMENTS* : ${memek}\n*CREATE* ${hadir} Ago\n*LIKES* : ${hadi}\n*DISLIKES* : ${hadie}\n*SOURCE* : ${text}\n\n\n*ZED BOT INC*`
                  buf = await getBuffer(video.author.avatar)                
                  ZimBotInc.sendMessage(m.chat, { image: { url: video.author.avatar }, jpegThumbnail:buf, caption: `${caption}` }, { quoted: m })
                  ZimBotInc.sendMessage(m.chat, { video: { url: video.video.no_watermark }, jpegThumbnail:buf, mimetype: 'video/mp4', caption: `*Downloading From ${text}*` }, { quoted: m })               
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'tt3': case 'tiktok3': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'            
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let bocil = require('@bochilteam/scraper')    
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'                
                bocil.tiktokdlv3(`${text}`).then(async (video) => {           
                  var hadi = randomNomor(100)        
                   var hadie = randomNomor(200)     
                   var hadir = randomNomor(300)
                    var memek = randomNomor(1000)                      
                  let caption = `**▊▊▊TIKTOK DL▊▊▊**\n\n*⬤AUTHOR* : Hxcker-263\n*⬤NICKNAME* : ${video.author.nickname}\n*⬤CAPTION* : ${video.description}\n*⬤COMMENTS* : ${memek}\n*⬤CREATE* ${hadir} Ago\n*⬤LIKES* : ${hadi}\n*⬤DISLIKES* : ${hadie}\n*⬤ SOURCE* : ${text}`
                  buf = await getBuffer(video.author.avatar)                
                  let message = await prepareWAMessageMedia({ image: buf, jpegThumbnail: buf }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: caption,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SOURCE',
url: `${text}`
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/hacker-263/ZeD-Bot'
}
}, {
quickReplyButton: {
displayText: 'WATERMARK',
id: `ttwm ${text}`
}
}, {
quickReplyButton: {
displayText: 'NOWATERMARK',
id: `tiktoknowm ${text}`
}  
}, {
quickReplyButton: {
displayText: 'AUDIO',
id: `tiktokmp3 ${text}`
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })                
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'tiktokmp3': case 'tiktokaudio': { 	   
          if (isBan) throw mess.ban
             if (!text) throw '*Enter Link Tiktok!*'
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                let got = require('./lib/tiktok.js')
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                got.tiktokDown(`${text}`).then(async (data) => {
                ZimBotInc.sendMessage(m.chat, { audio: { url: data.result.nowatermark }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
            break
case 'ttmp3': {
if (!text) throw `*Enter link tiktok example ${prefix + command} https://vt.tiktok.com/zgjbtcsdq/`  
                if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) throw '*The link you provided is not valid*'
                let get = require('./lib/scraper.js')
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)                                
                get.aiovideodl(`${text}`).then(async (res) => {        
                var anu = await getBuffer(res.medias[2].url)         
                ZimBotInc.sendMessage(m.chat, { audio: anu, mimetype: 'audio/mpeg'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'ig': case 'igdl': case 'instagram': {

               if (isBan) throw mess.ban

                if (!text) throw '*Please Enter Instagarm Link*' 

                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)                

                let urlnya = text

	            hx.igdl(urlnya)

	            .then(async(result) => {	  


	            var halo = 0		


	            ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Amount Of Media :* ${result.medias.length}\n*⬤ Url :* ${text}\n\n*ZED BOT INC*` }, { quoted: m })	                                  	                      	            


		        for(let i of result.medias) {		


		        if(i.url.includes('mp4')){		           			    				


				let link = await getBuffer(i.url)

                ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })

                } else {


                let link = await getBuffer(i.url)

                ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })          


               }


              }

            }).catch((err) => m.reply(`*Sorry Instagram Instagram ${text} Not found*`))

            }		

			break
            case 'ig3': case 'igdl3': case 'instagram3': {
            if (isBan) throw mess.ban
                ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let bicil = require('@bochilteam/scraper')
                let urlnya = text
	            bicil.instagramdlv4(urlnya)
	            .then(async(result) => {
		        for(let i of result){
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*${botname}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => m.reply(`*Failed When Downloading And Sending Media*`))
            }		
			break
case 'ig2': case 'igdl2': case 'instagram2': {	            
                if (!text) throw '*Enter a Link Query!*'                
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
            anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)
            var oi = 1
            for(let i of anu.medias){                
                var txt = `*▊▊▊INSTA DL▊▊▊*\n\n*Username:* ${anu.user.username}\n*Fullname:* ${anu.user.fullName}\n*Followers:* ${anu.user.followers}\n*Type:* ${anu.medias[0].type}\n*Tipe:* ${anu.medias[0].fileType}\n*ID:* ${anu.user.id}\n*Amount Of Media:* ${oi++}\n*Url:* ${text}\n\n*ZED BOT INC*`
                var buf = await getBuffer(anu.user.profilePicUrl)        
                ZimBotInc.sendMessage(m.chat, { image: { url: anu.user.profilePicUrl }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('error'))
                ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m }).catch((err) => m.reply('error'))
               }
            }
            break
            case 'igimage': {	            
                if (!text) throw '*Enter a Link Query!*'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                instagramdlv3(`${text}`).then(async (data) => {
                for (let f of data) {                                      
                ZimBotInc.sendMedia(m.chat, f.url, '', `Download Url Instagram From ${text}`, m)
                }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            case 'igs': case 'igstory': case 'instagramstory': {

                if (isBan) throw mess.ban

                if (!text) throw 'Type  Username!' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)              

                let urlnya = text

	            hx.igstory(urlnya)

	            .then(async(result) => {

		        var halo = 0		

	            ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Filetype :* ${result.medias[0].fileType}\n*⬤ Type :* ${result.medias[0].type}\n*⬤ Media :* ${result.medias.length}\n*⬤ Bio :* ${result.user.biography}\n\n*ZED BOT INC*` }, { quoted: m })	                                  	                      	            

		        for(let i of result.medias) {

			    if(i.url.includes('mp4')){

				let link = await getBuffer(i.url)

                ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 

                } else {

                    let link = await getBuffer(i.url)

                  ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  

                }

            }

            }).catch((err) => m.reply(`*Sorry Story Instagram ${text} not found*`))

            }		

			break
case 'igs2': case 'igstory2': case 'instagramstory2':{
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
             //   if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/igStory?username=${text}`)        
                for (let i of anu) {
                tummb = await getBuffer(i.preview)         
                ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:tummb, caption: `*${botname}*`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
                }
            }
            break
case 'igs3': case 'igstory3': case 'instagramstory3': {
               if (isBan) throw mess.ban
                if (!text) throw 'Enter Username!' 
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let bicil = require('@bochilteam/scraper')
                let urlnya = text
	            bicil.instagramStoryv2(urlnya)
	            .then(async(result) => {	  
	            var halo = 1		
	            ZimBotInc.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTA DOWNLOADER 」----*\n\n*⬤ Username :* ${result.user.username}\n*⬤ Fullname :* ${result.user.fullName}\n*⬤ Followers :* ${result.user.followers}\n*⬤ Following :* ${result.user.following}\n*⬤ ID :* ${result.user.id}\n*⬤ Media :* ${halo++}\n*⬤ Bio :* ${result.user.biography}\n\n*ZED BOT INC*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.results) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.sourceUrl)
                ZimBotInc.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                ZimBotInc.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.thumbnail), caption: `*Story ${i.type}*` }, { quoted: m })          
               }
              }
            }).catch((err) => m.reply(`*Sorry Story Instagram ${text} Tnot found*`))
            }		
			break
            case 'igtv': {	            
                if (!text) throw '*Enter a Link Query!*'
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                ZimBotInc.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
            case 'joox': case 'jooxdl': {
            if (isBan) throw mess.ban
                if (!text) throw '*Enter a Query Title*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://api.lolhuman.xyz/api/jooxplay?apikey=${setting.lolkey}&query=${text}`)
                let msg = `*▊▊▊JOOX DL▊▊▊*\n\n*Title :* ${anu.result.info.song}\n*Album :* ${anu.result.info.album}\n*Singer :* ${anu.result.info.song}\n*Publish :* ${anu.result.info.date}\n*Link :* ${anu.result.audio[0].link}\n\n*ZED BOT INC*`
                buf = await getBuffer(anu.result.image)
                ZimBotInc.sendMessage(m.chat, { image: { url: anu.result.image }, jpegThumbnail:buf, caption: `${msg}` }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
                ZimBotInc.sendMessage(m.chat, { audio: { url: anu.result.audio[0].link }, mimetype: 'audio/mpeg' }, { quoted: m }).catch((err) => m.reply('*Sorry An error occurred*'))
            }
            break
            case 'soundcloud': case 'scdl': {               
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                xa.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*▊▊▊SOUNDCLOUD DL▊▊▊*\n\n`
                    txt += `*⬤Title :* ${data.title}\n`
                    txt += `*⬤Quality :* ${data.medias[0].quality}\n`
                    txt += `*⬤Type :* ${data.medias[0].extension}\n`
                    txt += `*⬤Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*⬤Url Source :* ${data.url}\n\n`
                    txt += `*ZED BOT INC*`
                buf = await getBuffer(data.thumbnail)   
                ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply('link error'))    
                ZimBotInc.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
            break
case 'mediafire': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)            
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 100) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*▊▊▊MEDIAFIRE DL▊▊▊*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}\n
_whoa wait ZeD-BOT is processing..._

*ZED BOT INC*`
m.reply(`${result4}`)
ZimBotInc.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => m.reply('*Failed to download File*'))
}
break
case 'savefrom': {

      if (isBan) throw mess.ban

  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} link url`) 

  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
  let noh = require('@bochilteam/scraper')                

  noh.savefrom(`${text}`).then(async (data) => {

  let sections = []   

  for (let i of data.url) {

  const list = {title: `${i.type}`,

  rows: [

	    {

	     title: `Quality ${i.subname}`, 

	     rowId: `${prefix}get ${text}`,

	     description: `${data.hosting}`	     

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  ZimBotInc.sendMessage(

      m.chat, 

      {

       text: `${data.meta.title} *Here is the list of videos, click the button below to choose, here is the list of videos, click the button below to choose*`,

       footer: `©ZED BOT INC 2022`,

       title: "**▊▊▊SAVEFROM DL▊▊▊**",

       buttonText: "CLICK HERE",

       sections

      }, { quoted : m })                 

                }).catch((err) => {

                    m.reply(`*Sorry An Error Occurred*`)

                })

            }

            break		

            case 'get': {

            if (isBan) throw mess.ban

                if (!text) throw 'Enter a Link' 

                if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)

                let bicil = require('@bochilteam/scraper')

                let urlnya = text

	            bicil.savefrom(urlnya)

	            .then(async(result) => {	  	                                	                      	            

		        for(let i of result.url) {		

		        if(i.url.includes('mp4')){		           			    				

				let link = await getBuffer(i.url)

                ZimBotInc.sendMessage(m.chat, { video: link, caption: `*quality ${i.subname}*` }, { quoted: m })                  

               }

              }

            }).catch((err) => m.reply(`*Sorry Future Error*`))

            }		

			break
case 'linkedin': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Enter the link!\nExample : .linkedin https://www.linkedin.com/posts/franklintempletonindia_reachforbetter-activity-6575703402104348672-SBuX'
if (!isUrl(args[0]) && !args[0].includes('https://www.linkedin.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
anu = await fetchJson(`https://xteam.xyz/dl/linkedin?url=${text}&APIKEY=${setting.riy}`)
ZimBotInc.sendMessage(m.chat, {video: await getBuffer(anu.result.resurl), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('Failed to download File'))     
}
break
case 'smule': {

////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

if (!text) throw 'Enter the link!\nExample : .smule https://www.smule.com/p/1998769355_3504039030'

if (!isUrl(args[0]) && !args[0].includes('https://www.smule.com')) throw '*The link you provided is not valid*'

if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)

anu = await fetchJson(`https://xteam.xyz/dl/smule?url=${text}&APIKEY=${setting.riy}`)

ZimBotInc.sendMessage(m.chat, {video: await getBuffer(anu.result[0]), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     

}

break
case 'vimeo': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw 'Enter link Example : .vimeo https://vimeo.com/384611645'
if (!isUrl(args[0]) && !args[0].includes('vimeo.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
anu = await fetchJson(`https://xteam.xyz/dl/vimeo?url=${text}&APIKEY=${setting.riy}`)
ZimBotInc.sendMessage(m.chat, {video: await getBuffer(anu.result.hd.url), mimetype: 'video/mp4'}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
case 'zippyshare': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
ZimBotInc.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
case 'googledrive': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw '*Enter a Link Query!*'
if (!isUrl(args[0]) && !args[0].includes('googledrive.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
anu = await fetchJson(`https://xteam.xyz/dl/drive?url=${text}&APIKEY=${setting.riy}`)
m.reply(`${util.format(anu)}`)
ZimBotInc.sendMessage(m.chat, {document: await getBuffer(anu.result.server2), mimetype: 'application/zip', fileName: `${anu.result.title}`}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
case 'imagetopdf': {
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
 if (!/image/.test(mime)) throw `*Send/Reply Image With Caption* ${prefix + command}`
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let medi = await ZimBotInc.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(medi)            
hayo = `https://xteam.xyz/imagetopdf?url=${anu}&APIKEY=${setting.riy}`
ZimBotInc.sendMessage(m.chat, {document: await getBuffer(hayo), mimetype: 'application/pdf', fileName: `${botname}.pdf`}, {quoted:m}).catch ((err) => m.reply('*Failed to download File*'))     
}
break
case 'twitter': case 'td': case 'twitterdl': {     	             
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                xa.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*▊▊▊TWITTER DL▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*⬤TYPE :* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤DURATION :* ${data.medias.length}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*ZED BOT INC*`
                buf = await getBuffer(data.thumbnail)    
                ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*Downloading From ${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    m.reply(`*Failed to download media and send videos*`)
                })
            }
            break
case 'twitter2': case 'td2': case 'twitterdl2': {     	             
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                xa.Twitter(`${text}`).then(async (data) => {
                for (let x of data.medias) {
                    let txt = `*▊▊▊TWITTER DL▊▊▊*n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${x.quality}\n`
                    txt += `*⬤TYPE:* ${x.extension}\n`
                    txt += `*⬤SIZE:* ${x.formattedSize}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*Hi ${pushname}The bot is doing great job dont forget to subcribe*`
                buf = await getBuffer(data.thumbnail)    
                ZimBotInc.sendMessage(m.chat, { video: { url: x.url }, jpegThumbnail:buf, caption: `${txt}`}, { quoted: m })
                }
                }).catch((err) => m.reply(`Sorry the faiture is error`))   
            }
            break

case 'twittermp3': case 'twitteraudio': { 	             
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                xa.Twitter(`${text}`).then(async (data) => {
                ZimBotInc.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    m.reply(`*Failed to download media and send audio*`)
                })
            }
            break
case 'fbdl': case 'fb': case 'facebook': case 'pesbuk': {     	    
             if (isBan) throw mess.ban         
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)         
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   

                    let txt = `*▊▊▊FB DOWNLOAD▊▊▊*\n\n`

                    txt += `*⬤TITLE :* ${data.title}\n`

                    txt += `*⬤QUALITY :* ${data.result[0].quality}\n`

                    txt += `*⬤DESCRIPTION :* ${data.description}\n`

                    txt += `*⬤ID :* ZED BOT INC\n`

                    txt += `*⬤URL :* ${text}\n\n`

                    txt += `*ZED BOT INC*`                

                buf = await getBuffer(data.thumbnail)    

                ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         

                for (let i of data.result) {     

                ZimBotInc.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${i.quality}`}, { quoted: m })

                }          

                }).catch((err) => {

                    m.reply(`*Failed When Downloading Media and Sending Files*`)

                })

            }

            break
case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
               if (isBan) throw mess.ban
                  if (!text) return m.reply(`Use${prefix + command} enter facebook link`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  ZimBotInc.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    m.reply(`*Failed to link to audio*`)
                })
            }
            break
case 'fb6': {   	    
             if (isBan) throw mess.ban         
             if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)            
                xa.Facebook(`${text}`).then(async (data) => {                   
                    let txt = `*▊▊▊FB6 DOWNLOAD▊▊▊*\n\n`
                    txt += `*⬤TITLE :* ${data.title}\n`
                    txt += `*⬤QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*:⬤TYPE* ${data.medias[1].extension}\n`
                    txt += `*⬤SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*⬤URL :* ${data.url}\n\n`
                    txt += `*ZED BOT INC*`
                buf = await getBuffer(data.thumbnail)    
                ZimBotInc.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })              
                ZimBotInc.sendMessage(m.chat, { video: { url: data.medias[1].url }, jpegThumbnail:buf, caption: `*⬤ Quality :* ${data.medias[1].quality}`}, { quoted: m })                
                }).catch((err) => {
                    m.reply(`*Failed When Downloading Media and Sending Files*`)
                })
            }
            break
            case 'youtube': case 'ytdl': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 10) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 10)
            m.reply(`10 limit used`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 100000) return m.reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                ZimBotInc.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break
            case 'igreal': case 'instagramreal': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/igdl?link=${text}`)        
                tummb = await getBuffer(anu.medias[0].preview)         
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.medias[0].url }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is in error*'))
            }
            break
            case 'fb3': case 'facebook3': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://api-riychdwayne.herokuapp.com/api/downloader/facebook?url=${text}&apikey=${setting.riy}`)        
                tummb = await getBuffer(anu.thumbnail)         
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.medias }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.title}\n*Filesize* : ${anu.medias[1].formattedSize}\n*Quality* : ${anu.medias[1].quality}\n*Ext* : ${anu.medias[1].extension}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is currently  not working*'))
            }
            break
case 'fb2': case 'facebook2': {
	            ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw '*Enter a Link Query!*'
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) throw '*The link you provided is not valid*'
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://violetics.pw/api/downloader/facebook?apikey=${setting.violkey}&url=${text}`)
                tummb = await getBuffer('https://telegra.ph/file/9789a09c964cee5597a05.jpg')    
                ZimBotInc.sendMessage(m.chat, { video: { url: anu.result.url[0].url }, jpegThumbnail:tummb, caption: `*📽️ FACEBOOK DOWNLOADER*\n\n*Name* : ${anu.result.meta.title}\n*Quality* : ${anu.result.url[0].subname}\n*Ext* : ${anu.result.url[0].ext}\n`}, { quoted: m }).catch((err) => m.reply('*Sorry, the feature is currently not working*'))
            }
            break
	        case 'pindl': case 'pinterestdl': {
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Use${prefix + command}put in link pin`)
  if (!isUrl(args[0]) && !args[0].includes('pinterest.com')) throw '*The link you provided is not valid*'               
               if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
  let noh = require('./lib/lol.js')                
  noh.pin(`${text}`).then(async (data) => {    
  ZimBotInc.sendMessage(m.chat, { video: { url: data.data.url }, caption: `${data.data.file}` }, { quoted: m })  
                }).catch((err) => {
                    m.reply(`*${text}  ZED BOT INC*`)
                })
            }
            break
case 'translate': case 'terjemahan': case 'tr': {
if (!args.join(" ")) return m.reply("Text?")
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
m.reply(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
           case 'git': case 'gitclone':
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                       
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw 'link github  EXAMPLE: https://github.com/hacker-263/ZeD-Bot'
    if (!regex1.test(args[0])) throw 'link!'
    if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    // 'attachment; filenameq=ZidniGanz.zip'
    m.reply(`*Please wait, sending repository..*`)
    ZimBotInc.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply('*Sorry, the github link you provided is private, and cant be made into a file*'))
			break    
            case 'umma': case 'ummadl': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
     	        if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
     	        if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let { umma } = require('./lib/scraper2')
         		let anu = await umma(isUrl(text)[0])
        		if (anu.type == 'video') {
    		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'SONG'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'VIDEO'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
*TITLE :* ${anu.title}
*AUTHOR :* ${anu.author.name}
*LIKE :* ${anu.like}
*CAPTION :* ${anu.caption}
*URL :* ${anu.media[0]}
*To download media, please click one of the buttons below or enter the ytmp3/ytmp4 command with the url above*
`,
			footer: ZimBotInc.user.name,
			buttons,
			headerType: 4
		    }
		    ZimBotInc.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        ZimBotInc.sendMessage(m.chat, { image: { url }, caption: `> Title : ${anu.title}\n> Author : ${anu.author.name}\n> Like : ${anu.like}\n> Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break

//━━━━━━━━━━━━━━━━━━━

        case 'resepmasakan2': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
				if (!text) throw `Example : ${prefix + command} Nasi padang`
				    anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/resepmakanan?query=${text}&apikey=${setting.HunterApi}`)
					hasilresep = `❏ *${anu.results.title}*\n\n❏ Porsi : ${anu.results.servings}\n❏ Waktu : ${anu.results.times}\n❏ Kesulitan : ${anu.results.dificulty}\n❏ Pengguna : ${anu.results.author.user}\n❏ Tanggal Diterbitkan : ${anu.results.author.datePublished}\n❏ Deskripsi : ${anu.results.desc}\n\n━━━━━━━━━━━━━━━━━━━━\n❏ *Tutorial*\n\n❏ Bahan : ${anu.results.ingredient}\n❏ Langkah : ${anu.results.step}`										
					ZimBotInc.sendImage(m.chat, anu.results.thumb, `${hasilresep}`, m).catch((err) => m.reply('*Sorry, the feature currently not working*'))
					}
		break
case 'resep': case 'resepmasakan': {
                if (!text) return m.reply(`Use${prefix + command} nama_makanan`)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)                
                let sections = []   
  for (let i of anu.results) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.key}\n`, 
	     rowId: `${prefix}makanan ${text}`,
	     description: `${i.difficulty}\n${i.times}\n${i.serving}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ZimBotInc.sendMessage(
      m.chat, 
      {
       text: `*Results of*  ${text}`,
       footer: botname,
       title: "[ Recipes ]",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
}
  break
case 'makanan': {
                 if (!text) throw 'masakan aap?'         
                 if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://mnazria.herokuapp.com/api/resep-search?text=${text}`)       
                buf = await getBuffer(anu.results[1].thumb)  
                ZimBotInc.sendMessage(m.chat, { image: { url: anu.results[3].thumb }, jpegThumbnail:buf, caption: `${util.format(anu)}` }, { quoted: m }).catch((err) => m.reply('error'))
}
break

case 'cariquotes': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
           if (!text) throw `Example : ${prefix + command} cinta`            
            anu = await fetchJson(`https://api.akuari.my.id/search/quotes?query=${text}`)                       
            ini_txt = '*Cari Quotes*\n\n'
            for (let i of anu.result.data) {       
            ini_txt += `*Name* : ${i.author}\n`            
            ini_txt += `*Bio* : ${i.bio}\n`
            ini_txt += `*Quotes* : ${i.quote}`
            }
            m.reply(`${ini_txt}`)
            }            
            break

case 'apk': case 'apkmod': case 'apkdl': {      
      if (isBan) throw mess.ban
  if (!text) return m.reply(`Use${prefix + command} vpn`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `CATEGORY: ${i.kategori}\nPUBLISH: ${i.upload_date}\nINFORMATION: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  ZimBotInc.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer: `© ZED BOT INC`,
       title: "*▊▊▊APK DOWNLOAD▊▊▊*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    m.reply(`*${text} Not found*`)
                })
            }
            break
case 'download': {                
if (isBan) throw mess.ban
                if (!text) return m.reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) throw '*The link you provided is not valid*'
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 5) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 5)
            m.reply(`*5 limits used*`)
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return m.reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*▊▊▊APK DOWNLOAD▊▊▊*\n\n*TITLE:* ${i.title}\n*UPDATE:* ${i.up}\n*VERSION:* ${i.vers}\n*FILESIZE:* ${i.size}\n*URL:* \n*DESCRIPTION:* ${i.desc}\n\n*ZED BOT INC*`         
                ZimBotInc.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                ZimBotInc.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    m.reply(`*Failed When Downloading Media and Sending Files*`)
                }) 
                }                          
                break
case 'tagme': {
ZimBotInc.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}

break
        case 'wiki': case 'wikipedia': {
       // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} ZeD`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${setting.lolkey}&query=${text}`)
                m.reply(`*Wikipedia*\n\n${anu.result}`)
            }
        break
        case 'covid': {                
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/zimbabwe?apikey=${setting.lolkey}`)
                m.reply(`*Total corona Zimbabwe*\n*Positive* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
                }
	    break
        case 'covidglobal': {	       
           //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${setting.lolkey}`)
					m.reply(`*Total corona global*\n*Positive* : ${ngtod.result.positif}\n*Sembuh* : ${ngtod.result.sembuh}\n*Dirawat* : ${ngtod.result.dirawat}\n*Meninggal* : ${ngtod.result.meninggal}`)
					}
	    break
        case 'jadwaltv': {				  
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)                      
					ngtod = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=${setting.lolkey}`)
					m.reply(`*Jadwal Tv Hari Ini*\n*ANTV* : ${ngtod.result.antv}\n*GTV* : ${ngtod.result.gtv}\n*INDOSIAR* : ${ngtod.result.indosiar}\n*KOMPASTV* : ${ngtod.result.kompastv}\n*INEWSTV* : ${ngtod.result.inewstv}\n*MNCTV* : ${ngtod.result.mnctv}\*RCTI* : ${ngtod.result.rcti}\n*SCTV* : ${ngtod.result.sctv}\n*TRANSTV* : ${ngtod.result.transtv}\n*TVRI* : ${ngtod.result.tvri}\n*TRANS7* : ${ngtod.result.trans7}\n*NETTV* : ${ngtod.result.nettv}`)
					}
	    break
        case 'cuaca': {
               // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
				if (!text) throw `Example : ${prefix + command} Jawatimur`
				if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
					anu = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${text}?apikey=${setting.lolkey}`)
					m.reply(`*Tempat* : ${anu.result.tempat}\n*Cuaca* : ${anu.result.cuaca}\n*Angin* ${anu.result.angin}\n*Kelembapan* : ${anu.result.kelembapan}\n*Suhu* ${anu.result.suhu}\n*Permukaan_Laut* : ${anu.result.permukaan_laut}\n*Latitude* : ${anu.result.latitude}\n*Longitude* : ${anu.result.longitude}`)
					}
        break
        case 'ringtone': {
        //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!text) throw `Example : ${prefix + command} black rover`
        let { ringtone } = require('./lib/scraper3')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		ZimBotInc.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
		case 'iqra': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) throw oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		ZimBotInc.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
		}
		break
		case 'juzamma': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (args[0] === 'pdf') {
		m.reply(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		m.reply(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		m.reply(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		m.reply(mess.wait)
		ZimBotInc.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		m.reply(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
		if (!args[1]) throw `How many hadiths? \ N \ nexample:\n${prefix + command} muslim 1`
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		m.reply(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		m.reply(`Hadith not found !`)
		}
		}
		break

case 'listsurah': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${setting.lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `📖${x}. ${get_result[x]}\n`
}
m.reply(ini_txt)
}
break

case 'alquran2': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Which Surah Number You Want To Find\nExample : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`
urls = `https://api.lolhuman.xyz/api/quran/${text}?apikey=${setting.lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
m.reply(ini_txt)
}
break

case 'alquranaudio': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Which Surah Number You Want To Find\nExample : ${prefix + command} 18 or ${prefix + command} 18/10`
m.reply('Sabar Sedang Proses...')
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=${setting.lolkey}`)
ZimBotInc.sendMessage(m.chat, { audio: ini_buffer, mimetype: 'audio/mpeg', fileName: `mp3` }, { quoted: m }).catch ((err) => m.reply('Gagal saat mengirim audio'))
}
break

case 'asmaulhusna': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `💌 No : ${get_result.index}\n`
txt_nya += `📖 Latin: ${get_result.latin}\n`
txt_nya += `🌏 Arab : ${get_result.ar}\n`
txt_nya  += `🌏 Indonesia : ${get_result.id}\n`
txt_nya += `🌏 English : ${get_result.en}`
m.reply(txt_nya)
}
break

case 'kisahnabi': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${text}?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `💌 Name : ${get_result.name}\n`
txt_nya += `😇 Born : ${get_result.thn_kelahiran}\n`
txt_nya += `😇 Age : ${get_result.age}\n`
txt_nya += `🌏 Birth Pace : ${get_result.place}\n`
txt_nya += `📖 Story : \n${get_result.story}`
m.reply(txt_nya)
}
break

case 'jadwalsholat': {
//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
if (!text) throw `Which City Name\nExample : ${prefix + command} Yogyakarta`
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=${setting.lolkey}`)
get_result = get_result.result
txt_nya = `🌏 Wilayah : ${get_result.wilayah}\n`
txt_nya += `💌 Date : ${get_result.tanggal}\n`
txt_nya += `🍴 Sahur : ${get_result.sahur}\n`
txt_nya += `🎑 Imsak : ${get_result.imsak}\n`
txt_nya += `🌅 Subuh : ${get_result.subuh}\n`
txt_nya += `🌅 Terbit : ${get_result.terbit}\n`
txt_nya += `🌝 Dhuha : ${get_result.dhuha}\n`
txt_nya += `🌞 Dzuhur : ${get_result.dzuhur}\n`
txt_nya += `🌇 Ashar : ${get_result.ashar}\n`
txt_nya += `🌆 Maghrib : ${get_result.imsak}\n`
txt_nya += `🌃 Isya : ${get_result.isya}`
m.reply(txt_nya)
}
break
		case 'alquran': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Use Example:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		if (!args[1]) throw `Use Example:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		ZimBotInc.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		//if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		if (!args[0]) throw `Use Example:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		if (!args[1]) throw `Use Example:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		m.reply(txt)
		}
		break



		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
		  // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
		  if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                m.reply(mess.wait)
                let media = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                ZimBotInc.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
                case 'runtime': {

                m.reply(`*━━ 「 ${botname} 」 ━━*\n\n*UPTIME* : _${runtime(process.uptime())}_`)

                }

                break
//━━━━━━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━━━━

            case 'setcmd': {
           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `*For What Commands?*`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `No hashes`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                ZimBotInc.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {            
                if (!isCreator) throw mess.owner
                if (!m.quoted) throw 'Reply Message!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break
            case 'addmsg': {
             ////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!m.quoted) throw 'Reply Message u want to save to Database'
                if (!text) throw `Example : ${prefix + command} name file`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' *has been registered in the message list*`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`*Successfully added message in message list as* '${text}'
    
Access with ${prefix}getmsg ${text}

*View list of Messages With* ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
          //  //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' not registered in the message list`
                ZimBotInc.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n━━━━━━━━━━━━━━━━━━━━━━━━\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' *not listed in the message list*`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted'${text}' from the message list`)
            }
	    break
//━━━━━━━━━━━━━━━━━━━━[ SHORTLINK ]━━━━━━━━━━━━━━━━━━━━
           
            case 'bitly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} https://github.com`
               // if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                anu = await fetchJson(`https://xteam.xyz/shorturl/bitly?url=${text}&APIKEY=${setting.riy}`)
                m.reply(`${anu.result.link}`)
            }
            break
            case 'gg': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/gg?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
            break
            case 'sid': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/sid?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
            break
            case 'cuttly': {
                //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (!text) throw `Example : ${prefix + command} https://github.com`
                anu = await fetchJson(`https://xteam.xyz/shorturl/cuttly?url=${text}&nama=alyabot&APIKEY=${setting.riy}`)
                m.reply(`${anu.result}`)
            }
            break

//━━━━━━━━━━━━━━━━━━━━[ ANONYMOUS CHAT ]━━━━━━━━━━━━━━━━━━━━

	    case 'anonymous': {
	    if (!isPremium && !isCreator) throw 'only premium'
	     //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('*Features Cannot Be Used For Groups!*')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                ]
                ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await ZimBotInc.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, ZimBotInc.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('*Features Cannot Be Used For Groups!*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`*You are not in an anonymous session, press the button to find a partner* \`\`\``)
                    throw false
                }
                m.reply('Ok')
                let other = room.other(m.sender)
                if (other) await ZimBotInc.sendText(other, `\`\`\`*Partner Has Left Anonymous Session*\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('*Features Cannot Be Used For Groups!*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`*You are still in an anonymous session, press the button below to terminate your anonymous session*\`\`\``, ZimBotInc.user.name, m)
                    throw false
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(room.a, buttons, `\`\`\`*Successfully Found Partner, now you can send message*\`\`\``, ZimBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZimBotInc.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, ZimBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`*Please wait, looking for a partner*\`\`\``, ZimBotInc.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            if (!isPremium && !isCreator) throw 'only premium'
             //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)
                if (m.isGroup) return m.reply('*Features Cannot Be Used For Groups!*')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner*\`\`\``)
                    throw false
                }
                let other = romeo.other(m.sender)
                if (other) await ZimBotInc.sendText(other, `\`\`\`*Partner Has Left Anonymous Session*\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: 'SKIP' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(room.a, buttons, `\`\`\`*Successfully Found Partner, now you can send message*\`\`\``, ZimBotInc.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await ZimBotInc.sendButtonText(room.b, buttons, `\`\`\`*Successfully Found Partner, now you can send message*\`\`\``, ZimBotInc.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: 'STOP' }, type: 1 }
                    ]
                    await ZimBotInc.sendButtonText(m.chat, buttons, `\`\`\`*Please Wait Looking For Partner*\`\`\``, ZimBotInc.user.name, m)
                }
                break
            }
            case 'public': {
                if (!isCreator) throw mess.owner
                ZimBotInc.public = true
                m.reply('*Bot working as public now hope you will enjoy*')
            }
            break
            case 'self': {
                if (!isCreator) throw mess.owner
                ZimBotInc.public = false
                m.reply('*Bot working as private now hope you will enjoy*')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
*RESPOND SPEED* ${latensi.toFixed(4)} *SECONDS* \n ${oldd - neww} *MILLISECONDS*\n\n*RUNTIME* : ${runtime(process.uptime())}

💻 *INFO SERVERS*
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

*NODEJS MEMORY USAGE*
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `*Total CPU USAGE*
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
            let o
            try {
            o = await exec('python speed.py')
            } catch (e) {
            o = e
            } finally {
            let { stdout, stderr } = o
            if (stdout.trim()) m.reply(stdout)
            if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                ZimBotInc.sendContact(m.chat, global.owner, m)
                const devsound = fs.readFileSync('./ZimbBot/bot.mp3')
           ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            
            }
            
            break
            case 'developer': case 'botdev': {
                ZimBotInc.sendContact(m.chat, global.botdev, m)
                const devsound = fs.readFileSync('./ZimbBot/bot.mp3')
           ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }

            
            break
            
            case 'bothelp':  {
                ZimBotInc.sendContact(m.chat, global.bothelp, m)
                const devsound = fs.readFileSync('./ZimbBot/bot.mp3')
           ZimBotInc.sendMessage(m.chat, { audio: devsound, mimetype: 'audio/mp4', ptt: true, quoted: m })
            }
            
            break
            
case 'once': case 'toonce': { //by Hxcker-263
        if (!quoted) throw 'Reply Image'
        if (/image/.test(mime)) {
anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
ZimBotInc.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await ZimBotInc.downloadAndSaveMediaMessage(quoted)
        ZimBotInc.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
            m.reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              m.reply(`${anu.data}`)
              } catch (e) {
              emror = String(e)
              m.reply(`${e}`)
            }
        }
        break
        case 'searchgroups':
        if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
        mel.linkwa(q)
        .then(result => {
        let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
        for (let i of result) {
        res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
        }
        m.reply(res)
        });
        break
        case 'tes': case 'test': case 'alive': case 'bot': case 'robot': case 'zed': case 'hacker':const _0x12fbc6=_0xa830;function _0x5a3e(){const _0x1d2e27=['\x0a┃┃\x0a┃🏮𝗣𝗟𝗔𝗧𝗙𝗢𝗥𝗠\x20:\x20','ownername','Message','\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋▋\x0a\x20+\x202\x207\x206\x20\x203\x20\x204\x20\x200\x20\x209\x20\x200\x202\x20\x200\x20\x203\x0a\x20','botname','\x0a\x0a╭▬▬❪\x20*ZED\x20BOT\x20INC*❫▬▬▬\x0a┃🏮\x20*LIBRARY:*\x20Baileys-md\x0a┃┃\x0a┃🏮𝗕𝗢𝗧𝗡𝗔𝗠𝗘:\x20','1195460RyNtVa','\x0a┃┃\x0a┃🏮𝗢𝗪𝗡𝗘𝗥𝗡𝗔𝗠𝗘:\x20','LIST','key','6523785MZSaHJ','ZED\x20BOT\x20IS\x20ALIVE','5878536uJnrmT','\x0a⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯⧯\x0a\x0a*ZeD-BOT\x20V3\x20WELCOMES\x20YOU*\x20','imageMessage','OWNER','owner','waUploadToServer','467946xkzyQz','uptime','2369958VHTLog','377875gbZphs','platform','ping','listmenu','chat','184vBAXES','SPEED','https://github.com/hacker-263/ZeD-Bot','\x0a┃┃\x0a┃🏮𝗡𝗨𝗠𝗕𝗘𝗥:\x20','SUBSCRIBE','3595404noXmcO','GITHUB','relayMessage'];_0x5a3e=function(){return _0x1d2e27;};return _0x5a3e();}(function(_0x2241bd,_0x3fade8){const _0x5e1c6a=_0xa830,_0x587e66=_0x2241bd();while(!![]){try{const _0x19d1c9=parseInt(_0x5e1c6a(0x1aa))/0x1+parseInt(_0x5e1c6a(0x1a9))/0x2+-parseInt(_0x5e1c6a(0x1a7))/0x3+parseInt(_0x5e1c6a(0x1b4))/0x4+parseInt(_0x5e1c6a(0x19f))/0x5+parseInt(_0x5e1c6a(0x1a1))/0x6+parseInt(_0x5e1c6a(0x1bd))/0x7*(-parseInt(_0x5e1c6a(0x1af))/0x8);if(_0x19d1c9===_0x3fade8)break;else _0x587e66['push'](_0x587e66['shift']());}catch(_0x5934cf){_0x587e66['push'](_0x587e66['shift']());}}}(_0x5a3e,0xa1b18));function _0xa830(_0x4b8bc2,_0x133f6d){const _0x5a3e80=_0x5a3e();return _0xa830=function(_0xa83019,_0x49a73f){_0xa83019=_0xa83019-0x19f;let _0x58eca5=_0x5a3e80[_0xa83019];return _0x58eca5;},_0xa830(_0x4b8bc2,_0x133f6d);}{anu=_0x12fbc6(0x1a2)+pushname+_0x12fbc6(0x1bc)+global[_0x12fbc6(0x1bb)]+_0x12fbc6(0x1be)+global[_0x12fbc6(0x1b8)]+_0x12fbc6(0x1b2)+global[_0x12fbc6(0x1a5)]+_0x12fbc6(0x1b7)+os[_0x12fbc6(0x1ab)]()+'\x0a▙▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x0a🏮\x20*UPTIME:*\x20'+runtime(process[_0x12fbc6(0x1a8)]())+_0x12fbc6(0x1ba),ZimBotInc=await getBuffer(picak+_0x12fbc6(0x1a0));let message=await prepareWAMessageMedia({'image':ZimBotInc,'jpegThumbnail':ZimBotInc},{'upload':ZimBotInc[_0x12fbc6(0x1a6)]});const template=generateWAMessageFromContent(m[_0x12fbc6(0x1ae)],proto[_0x12fbc6(0x1b9)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message[_0x12fbc6(0x1a3)],'hydratedContentText':anu,'hydratedFooterText':''+global['botname'],'hydratedButtons':[{'urlButton':{'displayText':_0x12fbc6(0x1b3),'url':'https://www.youtube.com/c/Team263Hacks'}},{'urlButton':{'displayText':_0x12fbc6(0x1b5),'url':_0x12fbc6(0x1b1)}},{'quickReplyButton':{'displayText':_0x12fbc6(0x1b0),'id':_0x12fbc6(0x1ac)}},{'quickReplyButton':{'displayText':_0x12fbc6(0x1a4),'id':_0x12fbc6(0x1a5)}},{'quickReplyButton':{'displayText':_0x12fbc6(0x1bf),'id':_0x12fbc6(0x1ad)}}]}}}),{'userJid':m['chat'],'quoted':m});ZimBotInc[_0x12fbc6(0x1b6)](m[_0x12fbc6(0x1ae)],template['message'],{'messageId':template[_0x12fbc6(0x1c0)]['id']});}
        
        break
        
        
        // Upload status
        
//━━━━━━━━━━━━━━━━━━━━[ LIMIT & EXP ]━━━━━━━━━━━━━━━━━━━━
   
            case 'tfxp': case 'transfer': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Use: ${prefix}tfxp @tag 10`)
            bal = text.split(" ")[1]
            const tag2 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
            addBalance(tag2, nebal(bal), balance)
            m.reply(`SUCESS transfer Xp`)
            }
            break            
           case 'limit': {
            //if (isBanned) return m.reply(mess.banned)
            let limite = `${isPremium ? 'Unlimited' : `${getLimit(m.sender, limitCount, limit)}`}`
            m.reply(`Limit ${pushname} *${getLimit(m.sender)}*`)
            }
            break
case 'inventori': case 'profile':{
if (q.includes('--help')) return m.reply(examkosong) 
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
   try {
                    ppuser = await ZimBotInc.profilePictureUrl(m.sender, 'image')
                } catch {
                    ppuser = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
                }
       let Levele = level.getLevelingLevel(m.sender, _level)
              let Xp = level.getLevelingXp(m.sender, _level)
              let Xplu = 10 * Math.pow(Levele, 2) + 50 * Levele + 100         
     var profile = `*▊▊▊USER PROFILE ▊▊▊*\n\n⬤ *USERNAME:* ${pushname}\n⬤ *PREMIUM*: \n⬤ *ADMIN*: \n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\n*YOUR PROGRESS:*\n⬤ *YOUR LEVEL*: ${Levele}\n⬤ *YOUR XP*: (${Xp} / ${Xplu})\n*⬤ YOUR BLOOD* : ${getDarah(m.sender)}\n⬤ *YOUR IRON:* ${getBesi(m.sender)}\n⬤ *YOUR EMAS:* ${getEmas(m.sender)}\n⬤ *YOUR EMERALD* : ${getEmerald(m.sender)}\n⬤ *YOUR POTION* : ${getPotion(m.sender)}\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nHurry up:\n⬤ *YOUR FISH* : ${getIkan(m.sender)}\n⬤ *YOUR CHICKEN* : ${getAyam(m.sender)}\n⬤ *YOUR RABBIT* : ${getKelinci(m.sender)}\n⬤ *SHEEP* : ${getDomba(m.sender)}\n⬤ *YOUR COW* : ${getSapi(m.sender)}\n⬤ *YOUR ELEPHANTS* : ${getGajah(m.sender)}\n\n*ZED BOT INC*`
     ZimBotInc.sendMessage(m.chat, { image: { url: ppuser }, jpegThumbnail: await getBuffer(ppuser), caption: `${profile}` }, { quoted: m }).catch((err) => m.reply('link error'))    
  }
  break

case 'beli': case 'buy':{
ZimBotInc.sendButtonText(m.chat, [{ buttonId: 'wgheo', buttonText: { displayText: 'BUY LIMIT' }, type: 1 }], `🎉 ${ucapannya2} ${pushname}\n\n*Want to buy a limit??\nPlease click the button below*`, global.botname, m)
}
break

case 'wgheo': {
 var Liya = randomNomor(10)
 addLimit(m.sender, Liya)
 m.reply(`Congratulations you got as much Limit *${Liya}*`)
 }
 break
            
            case 'tflimit': case 'givelimit': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Use: ${prefix + command} @tag 10`)
lim = text.split(" ")[1]
const tag1 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addLimit(tag1, lim, limit)
m.reply('Succes')
            }
            break
            case 'tfmonay': {
            if (!isCreator) throw mess.owner	
            if (!text)return m.reply(`Use: ${prefix + command} @tag 10`)
lim = text.split(" ")[1]
tag1 = `${text.split(" ")[0].replace("@",'')}@s.whatsapp.net`
addMonay(tag1, lim, monay)
m.reply('Succes')
            }
            break

case 'report': {
if (!args.join(" ")) return m.reply(`Example : \n- ${prefix + command} feature ig error min\n- ${prefix + command} this user is spamming min`)
teks = `*▊▊▊REPORT FEATURE▊▊▊*`
teks1 = `\n\nNUMBER : @${m.sender.split("@")[0]}\n*REPORT :* ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'request': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} min add a downloader feature`)
teks = `*▊▊▊REQUEST FEATURE▊▊▊*`
teks1 = `\n\n*NUMBER :* @${m.sender.split("@")[0]}\n*REQUEST :* ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
ZimBotInc.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
ZimBotInc.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'domain': {

           // //if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return m.reply(mess.endLimit)

                if (!text) throw `Example : ${prefix + command} nurutomo`
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                anu = await fetchJson(`https://xteam.xyz/search/domainesia?q=${text}&APIKEY=${setting.riy}`)

                m.reply(`${util.format(anu)}`)

                }

            break
//━━━━━━━━━━━━━━━━━━━━[ MENU MENU MENU ]━━━━━━━━━━━━━━━━━━━━
case 'amino': {
                if (!text) throw `what are you looking for!, example : ${prefix + command} naruto`
                if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
                let anu = await fetchJson(`https://violetics.pw/api/search/amino?apikey=${setting.violkey}&query=${text}`)
                m.reply(`${util.format(anu)}`)
                }
            break
case 'anime': {

            if (isBan) throw mess.ban 

if (!text) return m.reply(`you are looking for what anime apa?\n\nEXAMPLE ${prefix}anime naruto`)

if (!isInventoryLimit){ addInventoriLimit(m.sender) }

            if (isLimit < 1) return m.reply(mess.endLimit)

            kurangLimit(m.sender, 1)

            m.reply(`*1 limit used*`)

anu = await fetchJson(`https://api.jikan.moe/v4/anime?q=${text}`)

let sections = []   

  for (let i of anu.data) {

  const list = {title: `${i.title}`,

  rows: [

	    {

	     title: `${i.title}`, 

	     rowId: `${prefix}animee ${i.mal_id}`,

	     description: `${i.synopsis}`

	    }, 

	    ]

     }

     sections.push(list)   

     }

  const sendm =  ZimBotInc.sendMessage(

      m.chat, 

      {

       text: `*Search Results From* ${text}`,

       footer: botname,

       title: "*▊▊▊ANIME▊▊▊*",

       buttonText: "CLICK HERE",

       sections

      }, { quoted : m })

}

  break
case 'animee': {
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
            if (isLimit < 1) return m.reply(mess.endLimit)
            kurangLimit(m.sender, 1)
            m.reply(`*1 limit used*`)
res = await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
let txt = `𝗔𝗻𝗶𝗺𝗲 𝗜𝗻𝗳𝗼\n\n*TITLE:* *${res.data.title}*\n*ENGLISH:* *${res.data.title_english}*\n*JAPANESE:* *${res.data.title_japanese}*\n*TYPE ANIME:* *${res.data.type}*\n*ADAPTER:* *${res.data.source}*\n*TOTAL EPISODE:* *${res.data.episodes}*\n*STATUS:* *${res.data.status}*\n*ONGOING:* *${res.data.airing ? 'Ya' : 'DRIS'}*\n*AIRED:* *${res.data.aired.string}*\n*DURATION:* *${res.data.duration}*\n*RATING:* *${res.data.rating}*\n*SCORE:* *${res.data.score}*\n*RANK:* *${res.data.rank}*\n*STUDIO:* *${res.data.studios[0].name}* `
ZimBotInc.sendMessage(m.chat, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }).catch((err) => m.reply('sorry error'))
}
break

//━━━━━━━━━━━━━━━━━━━━[ MENUUUUU ]━━━━━━━━━━━━━━━━━━━━

case 'listmenu': case 'list': {
    
    let Levele2 = level.getLevelingLevel(m.sender, _level)
    let sections = []   
    let listmenu = [`allmenu`,`mainmenu`,`groupmenu`,`expmenu`,`downloadmenu`,`searchingmenu`,`randommenu`,`textpromenu`,`photooxymenu`,`funmenu`,`imageeffectmenu`,`ephotomenu`,`primbonmenu`,`convertmenu`,`databasemenu`,`photofiltermenu`,`anonymousmenu`,`islammenu`,`voicemenu`,`toolsmenu`,`internetmenu`,`shortmenu`,`ownermenu`,`nsfwmenu`,`donasi`]
    let listmenuu = [`𝗔𝗟𝗟 𝗠𝗘𝗡𝗨`,`𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨`,`𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨`,`𝗫𝗣 𝗠𝗘𝗡𝗨`,`𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨`,`𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨`,`𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨`,`𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗠𝗘𝗡𝗨`,`𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬`,`𝗙𝗨𝗡 𝗠𝗘𝗡𝗨`,`𝗜𝗠𝗔𝗚𝗘 𝗘𝗙𝗙𝗘𝗖𝗧`,`𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨`,`𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨`,`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨`,`𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨`,`𝗣𝗛𝗢𝗧𝗢 𝗙𝗜𝗟𝗧𝗘𝗥`,`𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨`,`𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨`,`𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨`,`𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨`,`𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗠𝗘𝗡𝗨`,`𝗦𝗛𝗢𝗥𝗧 𝗠𝗘𝗡𝗨`,`𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨`,`𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪`,`𝗗𝗢𝗡𝗔𝗧𝗘`]
            
            let nombor = 1
            let startnum = 0
            
            for (let x of listmenu) {
            const list = {title: 'MENU NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        
                        rowId: `${prefix}${x}`
	        }, 
      	    ]
            }
            sections.push(list)   
            }
            const sendm =  ZimBotInc.sendMessage(
            m.chat, 
           {
       text: `
*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  *ZeD-Bot-Inc*
╰━━━━━━━━━━━━━━━━━━╯`,
       footer: ZimBotInc.user.name,
       title: `${ucapannya2} ${pushname}`,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      }
      
     break

case 'setmenu': const _0x82f741=_0x10db;function _0x10db(_0x237750,_0x385d3f){const _0x511702=_0x5117();return _0x10db=function(_0x10db44,_0x596302){_0x10db44=_0x10db44-0x7d;let _0x44663a=_0x511702[_0x10db44];return _0x44663a;},_0x10db(_0x237750,_0x385d3f);}function _0x5117(){const _0x55f57b=['4569NOCauN','3976QKgpog','𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗟𝗢𝗖𝗔𝗧𝗜𝗢𝗡','success','templateGif','templateList','Change\x20menu\x20bot\x20to\x20Template\x20Image','templateLocation','setmenu\x20templateDoc','𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗟𝗜𝗦𝗧','setmenu\x20templateList','414132SgZwnp','𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗜𝗠𝗔𝗚𝗘','34413QPRLmc','setmenu\x20templateImage','settings','templateImage','117gNPFAM','*Hello\x20Owner\x20Cheers\x20to\x20that!*','templateMsg','Change\x20menu\x20bot\x20to\x20Template\x20Gif','916745ZKMUHO','𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗠𝗘𝗦𝗦𝗔𝗚𝗘','408710BbeqRt','setmenu\x20templateMessage','templateDoc','reply','162Qmmgsv','name','owner','*Please\x20choose\x20the\x20menu\x20you\x20want\x20to\x20change!\x20I\x20hope\x20you\x20will\x20enjoy🔥*','575736LhEXlv','T𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗚𝗜𝗙','©️𝗭ED\x20𝗕𝗢𝗧\x20𝗜𝗡𝗖','sendListMsg','setmenu\x20templateLocation','CLICK\x20HERE','data','setmenu\x20templateGif','𝗧𝗘𝗠𝗣𝗟𝗔𝗧𝗘\x20𝗗𝗢𝗖𝗨𝗠𝗘𝗡𝗧','Change\x20menu\x20bot\x20to\x20Template\x20List','3504dkmSbr'];_0x5117=function(){return _0x55f57b;};return _0x5117();}(function(_0x1c5d29,_0x2a099d){const _0x52c262=_0x10db,_0x4d87c1=_0x1c5d29();while(!![]){try{const _0x4ea884=parseInt(_0x52c262(0x91))/0x1+-parseInt(_0x52c262(0x9f))/0x2*(-parseInt(_0x52c262(0x84))/0x3)+parseInt(_0x52c262(0xa3))/0x4+parseInt(_0x52c262(0x99))/0x5+-parseInt(_0x52c262(0x8f))/0x6+-parseInt(_0x52c262(0x85))/0x7*(-parseInt(_0x52c262(0x83))/0x8)+parseInt(_0x52c262(0x95))/0x9*(-parseInt(_0x52c262(0x9b))/0xa);if(_0x4ea884===_0x2a099d)break;else _0x4d87c1['push'](_0x4d87c1['shift']());}catch(_0x4f1045){_0x4d87c1['push'](_0x4d87c1['shift']());}}}(_0x5117,0x2097a));{if(!isCreator)throw mess[_0x82f741(0xa1)];let setbot=db[_0x82f741(0x7f)][_0x82f741(0x93)][botNumber];if(args[0x0]==='templateImage')setbot[_0x82f741(0x94)]=!![],setbot[_0x82f741(0x8b)]=![],setbot['templateGif']=![],setbot[_0x82f741(0x97)]=![],setbot[_0x82f741(0x89)]=![],setbot[_0x82f741(0x9d)]=![],m[_0x82f741(0x9e)](mess['success']);else{if(args[0x0]==='templateLocation')setbot['templateImage']=![],setbot[_0x82f741(0x8b)]=!![],setbot[_0x82f741(0x88)]=![],setbot[_0x82f741(0x97)]=![],setbot[_0x82f741(0x89)]=![],setbot['templateDoc']=![],m[_0x82f741(0x9e)](mess['success']);else{if(args[0x0]==='templateGif')setbot[_0x82f741(0x94)]=![],setbot[_0x82f741(0x8b)]=![],setbot[_0x82f741(0x88)]=!![],setbot[_0x82f741(0x97)]=![],setbot[_0x82f741(0x89)]=![],setbot['templateDoc']=![],m[_0x82f741(0x9e)](mess[_0x82f741(0x87)]);else{if(args[0x0]==='templateMessage')setbot[_0x82f741(0x94)]=![],setbot[_0x82f741(0x8b)]=![],setbot[_0x82f741(0x88)]=![],setbot[_0x82f741(0x97)]=!![],setbot[_0x82f741(0x89)]=![],setbot['templateDoc']=![],m[_0x82f741(0x9e)](mess[_0x82f741(0x87)]);else{if(args[0x0]===_0x82f741(0x89))setbot['templateImage']=![],setbot['templateLocation']=![],setbot[_0x82f741(0x88)]=![],setbot['templateMsg']=![],setbot[_0x82f741(0x89)]=!![],setbot['templateDoc']=![],m[_0x82f741(0x9e)](mess[_0x82f741(0x87)]);else{if(args[0x0]===_0x82f741(0x9d))setbot[_0x82f741(0x94)]=![],setbot[_0x82f741(0x8b)]=![],setbot[_0x82f741(0x88)]=![],setbot[_0x82f741(0x97)]=![],setbot['templateList']=![],setbot[_0x82f741(0x9d)]=!![],m['reply'](mess['success']);else{let sections=[{'title':_0x82f741(0xa5),'rows':[{'title':_0x82f741(0x90),'rowId':_0x82f741(0x92),'description':_0x82f741(0x8a)},{'title':_0x82f741(0x86),'rowId':_0x82f741(0x7d),'description':'Change\x20menu\x20bot\x20to\x20Template\x20Location'},{'title':_0x82f741(0xa4),'rowId':_0x82f741(0x80),'description':_0x82f741(0x98)},{'title':_0x82f741(0x9a),'rowId':_0x82f741(0x9c),'description':'Change\x20menu\x20bot\x20to\x20Template\x20Message'},{'title':_0x82f741(0x8d),'rowId':_0x82f741(0x8e),'description':_0x82f741(0x82)},{'title':_0x82f741(0x81),'rowId':_0x82f741(0x8c),'description':'Change\x20menu\x20bot\x20to\x20Template\x20Document'}]}];ZimBotInc[_0x82f741(0xa6)](m['chat'],_0x82f741(0xa2),ZimBotInc['user'][_0x82f741(0xa0)],_0x82f741(0x96),_0x82f741(0x7e),sections,m);}}}}}}}
            break

            case 'allmenu': case 'menu': case 'help': {
ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
let Levelnye = level.getLevelingLevel(m.sender, _level)
let datane = fs.readFileSync('./lib/random.js')
jsonData = JSON.parse(datane)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex];
buffer = await getBuffer(randKey.result)      
let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  *ZeD-Bot-Inc*
╰━━━━━━━━━━━━━━━━━━╯

    
┏━❰ *EXP & LIMIT* ❱
┃⬤${prefix}sel
┃⬤${prefix}buy
┃⬤${prefix}limit 
┃⬤${prefix}heal
┃⬤${prefix}limit
┃⬤${prefix}profile
┃⬤${prefix}mining
┃⬤${prefix}berburu
┃⬤${prefix}limituser
┃⬤${prefix}leaderboard
┗━━━━━━━━━━⦿

                 
┏━❰ *MAIN MENU* ❱
┃⬤${prefix}ping
┃⬤${prefix}listpc
┃⬤${prefix}listgc
┃⬤${prefix}owner
┃⬤${prefix}botdev
┃⬤${prefix}bothelp
┃⬤${prefix}delete
┃⬤${prefix}infochat
┃⬤${prefix}quoted
┃⬤${prefix}listonline
┃⬤${prefix}runtime
┃⬤${prefix}speedtest
┃⬤${prefix}menu
┗━━━━━━━━━━⦿


┏━❰ *SHORTLINK* ❱
┃⬤${prefix}shortlink
┃⬤${prefix}tinyurl
┗━━━━━━━━━━⦿


┏━❰ *ANONYMOUS* ❱
┃⬤${prefix}start
┃⬤${prefix}next
┃⬤${prefix}keluar
┃⬤${prefix}sendcontact
┃⬤${prefix}anonymous
┗━━━━━━━━━━━⦿


┏━❰ *FUN FAITURE* ❱
┃⬤${prefix}family100
┃⬤${prefix}hilih 
┃⬤${prefix}simi
┃⬤ ${prefix}holoh
┃⬤${prefix}delttt
┃⬤${prefix}halah
┃⬤${prefix}huluh
┃⬤${prefix}heleh
┃⬤${prefix}suitpvp
┃⬤${prefix}jadian
┃⬤${prefix}math
┃⬤${prefix}jodohku
┃⬤${prefix}tictactoe
┃⬤${prefix}tebak
┗━━━━━━━━━━⦿


┏━❰ *PHOTO-OXY* ❱
┃⬤${prefix}broken-glass
┃⬤${prefix}neon-light 
┃⬤${prefix}black-pink
┃⬤ ${prefix}hallowen 
┃⬤${prefix}art-papper
┃⬤${prefix}magma 
┃⬤${prefix}glossy
┃⬤${prefix}grafity-text
┃⬤${prefix}watercolor
┃⬤${prefix}multi-color
┃⬤${prefix}neon-devil
┃⬤${prefix}sky-text
┗━━━━━━━━━━⦿


┏━❰ *EPHOTO-363* ❱
┃⬤${prefix}3d-wood
┃⬤${prefix}angels-wings
┃⬤${prefix}snake-text
┃⬤${prefix}redhot-metal2
┃⬤${prefix}sandsummer-beach
┃⬤${prefix}snow-text
┃⬤${prefix}water-3d
┃⬤${prefix}water-effect
┗━━━━━━━━━━⦿


┏━❰ *OWNER MENU* ❱
┃⬤${prefix}leave
┃⬤${prefix}tfxp
┃⬤ ${prefix}join
┃⬤${prefix}bctext
┃⬤${prefix}bcall
┃⬤${prefix}bcloc
┃⬤${prefix}tflimit
┃⬤${prefix}block
┃⬤${prefix}react
┃⬤${prefix}bctext
┃⬤${prefix}setexif
┃⬤${prefix}chat
┃⬤${prefix}bcvideo
┃⬤${prefix}bcgroup
┃⬤ ${prefix}bcimage
┃⬤${prefix}unblock
┃⬤${prefix}setppbot
┗━━━━━━━━━━⦿


┏━❰ *TEXT MAKER* ❱
┃⬤${prefix}vintage
┃⬤${prefix}writing
┃⬤${prefix}engraved
┃⬤${prefix}glue-text
┃⬤${prefix}holograpic
┃⬤${prefix}deluxe-silver
┃⬤${prefix}fabric
┃⬤${prefix}wicker
┃⬤${prefix}larva
┃⬤${prefix}toxic
┃⬤${prefix}koi
┃⬤${prefix}bread
┃⬤${prefix}horor-blood
┃⬤${prefix}honey
┃⬤${prefix}ice
┃⬤${prefix}rusty
┃⬤${prefix}christmas
┃⬤${prefix}gradien
┃⬤${prefix}1917
┃⬤${prefix}harry-potter
┃⬤${prefix}3dstone
┃⬤${prefix}thunder2
┃⬤${prefix}sroberi
┃⬤${prefix}blood
┃⬤${prefix}joker-logo
┃⬤${prefix}marvel-logo2
┃⬤${prefix}lion-logo
┃⬤${prefix}pornhub
┃⬤${prefix}avengers-logo
┃⬤${prefix}ninja-logo
┃⬤${prefix}grafity-text2
┃⬤${prefix}astone
┃⬤${prefix}space
┃⬤${prefix}captain
┃⬤${prefix}logo-wolf2
┃⬤${prefix}logo-wolf
┃⬤${prefix}silk
┃⬤${prefix}3dnature
┃⬤${prefix}bevel
┃⬤${prefix}birthdaycake
┃⬤${prefix}burnpaper
┃⬤${prefix}coffee
┃⬤${prefix}coffee-heartcup
┃⬤${prefix}embroiderytext
┃⬤${prefix}flaming
┃⬤${prefix}flowertypo
┃⬤${prefix}funnycup
┃⬤${prefix}fur
┃⬤${prefix}gerbang
┃⬤${prefix}glowrainbow
┃⬤${prefix}gradientavatar
┃⬤${prefix}graffititext
┃⬤${prefix}harrypotter
┃⬤${prefix}lovemessage
┃⬤${prefix}luxuryroyal
┃⬤${prefix}neonlight
┃⬤${prefix}sweetcandy
┃⬤${prefix}summertext
┃⬤${prefix}woodenheart
┃⬤${prefix}woodblock
┃⬤${prefix}yellowroses
┃⬤${prefix}wolfmetal
┃⬤${prefix}underwaterocean
┃⬤${prefix}graffiti
┃⬤${prefix}angel
┃⬤${prefix}queen
┃⬤${prefix}wet-glass
┃⬤${prefix}status-mood2
┃⬤${prefix}summerysand
┗━━━━━━━━━⦿


┏━❰ *CERTIFICATEMAKER* ❱
┃⬤${prefix}tololserti
┃⬤${prefix}blackpink
┃⬤${prefix}badgirlserti
┃⬤${prefix}badgirlserti
┃⬤${prefix}igcertificate
┃⬤${prefix}fuckgirlserti
┃⬤${prefix}ytcertificate
┃⬤${prefix}badboyserti
┃⬤${prefix}fuckboyserti
┃⬤${prefix}goodboyserti
┃⬤${prefix}goodgirlserti
┗━━━━━━━━━━⦿


┏━❰ *GROUP MENU* ❱
┃⬤${prefix}devote 
┃⬤${prefix}upvote
┃⬤${prefix}cekvote 
┃⬤${prefix}linkgroup
┃⬤${prefix}hapusvote
┃⬤${prefix}kick
┃⬤${prefix}vote
┃⬤${prefix}tagall
┃⬤${prefix}setdesc
┃⬤${prefix}group
┃⬤${prefix}hidetag
┃⬤${prefix}mute
┃⬤${prefix}antibadword
┃⬤${prefix}setname
┃⬤${prefix}promote
┃⬤${prefix}demote
┃⬤${prefix}antilink
┃⬤${prefix}antibule
┃⬤${prefix}setppgc
┃⬤${prefix}antifb
┃⬤${prefix}antiinsta
┃⬤${prefix}antilinkall
┃⬤${prefix}antitiktok
┃⬤${prefix}antitelegram
┃⬤${prefix}antiytchannel
┃⬤${prefix}antivirtex
┃⬤${prefix}editinfo
┃⬤${prefix}antiviewonce
┃⬤${prefix}antionce
┃⬤${prefix}dare
┃⬤${prefix}truth
┃⬤${prefix}toonce / once
┃⬤${prefix}antilinkyt
┃⬤${prefix}antiwame
┃⬤${prefix}ephemeral
┗━━━━━━━━━━⦿


┏━❰ *INTERNET MENU* ❱
┃⬤${prefix}detik
┃⬤${prefix}news
┃⬤${prefix}infobmkg
┃⬤${prefix}covidindo
┃⬤${prefix}covidglobal
┃⬤${prefix}kbbi
┃⬤${prefix}carigc
┃⬤${prefix}brainly
┃⬤${prefix}kodepos
┃⬤${prefix}cuaca
┃⬤${prefix}playstore
┃⬤${prefix}wikipedia
┃⬤${prefix}jadwalsalat
┃⬤${prefix}resep
┃⬤${prefix}resepmasakan
┗━━━━━━━━━━━⦿


┏━❰ *TOOLS MENU* ❱
┃⬤${prefix}git
┃⬤${prefix}nulis
┃⬤${prefix}ssweb
┃⬤${prefix}gitclone
┃⬤${prefix}nuliskiri
┃⬤${prefix}translate
┃⬤${prefix}nuliskanan
┃⬤${prefix}magernulis
┃⬤${prefix}magernulis2
┃⬤${prefix}magernulis3
┃⬤${prefix}magernulis4
┃⬤${prefix}magernulis5
┃⬤${prefix}magernulis6
┗━━━━━━━━━━━━⦿


┏━❰ *ISLAMIC MENU* ❱
┃⬤${prefix}listsurah
┃⬤${prefix}tafsirsurah
┃⬤${prefix}iqra
┃⬤${prefix}hadist
┃⬤${prefix}alquran
┃⬤${prefix}juzamma
┃⬤${prefix}jadwalsholat
┃⬤${prefix}alquran2
┃⬤${prefix}kisahnabi
┃⬤${prefix}alquranaudio
┗━━━━━━━━━━⦿


┏━❰ *VOICE-CHANGER* ❱
┃⬤${prefix}fat 
┃⬤${prefix}deep 
┃⬤${prefix}robot 
┃⬤${prefix}slow 
┃⬤${prefix}tupai 
┃⬤${prefix}fast 
┃⬤${prefix}bass 
┃⬤${prefix}blown 
┃⬤${prefix}reverse 
┃⬤${prefix}earrape 
┃⬤${prefix}nightcore 
┗━━━━━━━━━━⦿


┏━❰ *SEARCH MENU* ❱
┃⬤${prefix}yts
┃⬤${prefix}lirik
┃⬤${prefix}play
┃⬤${prefix}amino
┃⬤${prefix}domain
┃⬤${prefix}anime
┃⬤${prefix}google
┃⬤${prefix}gimage
┃⬤${prefix}wattpad
┃⬤${prefix}ytsearch
┃⬤${prefix}ytsaudio
┃⬤${prefix}ytsvideo
┃⬤${prefix}ringtone
┃⬤${prefix}readmore
┃⬤${prefix}layarkaca
┃⬤${prefix}pinterest
┃⬤${prefix}wallpaper
┃⬤${prefix}layarkaca
┃⬤${prefix}wikimedia
┃⬤${prefix}gsmarena
┃⬤${prefix}cariquotes
┃⬤${prefix}igstalk
┃⬤${prefix}pixivsearch
┃⬤${prefix}sfilesearch
┃⬤${prefix}mangatoon
┃⬤${prefix}palingmurah
┃⬤${prefix}stalk
┃⬤${prefix}stickersearch
┃⬤${prefix}animesearch
┃⬤${prefix}tiktokstalk
┃⬤${prefix}githubstalk
┃⬤${prefix}twitterstalk
┗━━━━━━━━━━⦿


┏━❰ *CONVERT-STICKER* ❱
┃⬤${prefix}sticker
┃⬤${prefix}ttp
┃⬤${prefix}attp
┃⬤${prefix}ttp2
┃⬤${prefix}smeme
┃⬤${prefix}sticker
┃⬤${prefix}ebinary
┃⬤${prefix}dbinary
┃⬤${prefix}styletext
┃⬤${prefix}emojimix2
┃⬤${prefix}stickerly
┃⬤${prefix}stickerline
┃⬤${prefix}stickerwm
┃⬤${prefix}emojimix
┃⬤${prefix}togif
┃⬤${prefix}tourl
┃⬤${prefix}tovn
┃⬤${prefix}tovideo
┃⬤${prefix}tomp3 
┃⬤${prefix}toaudio 
┃⬤${prefix}toimage
┃⬤${prefix}removebg
┃⬤${prefix}imagetopdf 
┗━━━━━━━━━━━⦿


┏━❰ *DATABASE-MENU* ❱
┃⬤${prefix}setcmd 
┃⬤${prefix}listcmd
┃⬤${prefix}delcmd 
┃⬤${prefix}addmsg 
┃⬤${prefix}listmsg
┃⬤${prefix}getmsg
┃⬤${prefix}delmsg
┃⬤${prefix}lockcmd 
┗━━━━━━━━⦿


┏━❰ *DOWNLOADER* ❱
┃⬤${prefix}apk
┃⬤${prefix}joox
┃⬤${prefix}pindl
┃⬤${prefix}fbmp3
┃⬤${prefix}savefrom
┃⬤${prefix}ytsvideo
┃⬤${prefix}getmusic
┃⬤${prefix}getvideo
┃⬤${prefix}ytsaudio
┃⬤${prefix}tiktok
┃⬤${prefix}tiktok2
┃⬤${prefix}tiktok3
┃⬤${prefix}tiktok4
┃⬤${prefix}smule
┃⬤${prefix}vimeo
┃⬤${prefix}twitter
┃⬤${prefix}twitter2
┃⬤${prefix}igtv
┃⬤${prefix}ytmp3
┃⬤${prefix}ytmp4
┃⬤${prefix}umma
┃⬤${prefix}tiktokwm
┃⬤${prefix}linkedin
┃⬤${prefix}tiktokmp3
┃⬤${prefix}youtube
┃⬤${prefix}igimage
┃⬤${prefix}twitteraudio
┃⬤${prefix}tiktoknowm
┃⬤${prefix}instagramstory
┃⬤${prefix}instagramstory2
┃⬤${prefix}instagramstory3
┃⬤${prefix}ig
┃⬤${prefix}mediafire
┃⬤${prefix}facebook
┃⬤${prefix}fb
┃⬤${prefix}facebook2
┃⬤${prefix}facebook3
┃⬤${prefix}instagram
┃⬤${prefix}instagram2
┃⬤${prefix}zippyshare
┃⬤${prefix}googledrive
┃⬤${prefix}ytshorts
┃⬤${prefix}soundcloud
┃⬤${prefix}instagramreal
┗━━━━━━━━━━⦿


┏━❰ *IMAGE-EFFECT* ❱
┃⬤${prefix}jail
┃⬤${prefix}shit
┃⬤${prefix}rip
┃⬤${prefix}blur
┃⬤${prefix}gay
┃⬤${prefix}invert
┃⬤${prefix}burn
┃⬤${prefix}wanted
┃⬤${prefix}beautiful
┃⬤${prefix}pixelate
┃⬤${prefix}fotojatoh
┃⬤${prefix}ytcomment
┃⬤${prefix}imagesketch
┃⬤${prefix}triggeredwebp
┗━━━━━━━━━━━⦿


┏━❰ *PHOTO-FILTER* ❱
┃⬤${prefix}aria 
┃⬤${prefix}attic
┃⬤${prefix}ruby 
┃⬤${prefix}sand 
┃⬤${prefix}eva
┃⬤${prefix}lisa 
┃⬤${prefix}hdr
┃⬤${prefix}lana 
┃⬤${prefix}lomo 
┃⬤${prefix}milk 
┃⬤${prefix}milk 
┃⬤${prefix}hana 
┃⬤${prefix}plumy 
┃⬤${prefix}movie 
┃⬤${prefix}orton 
┃⬤${prefix}molly  
┃⬤${prefix}sepia 
┃⬤${prefix}sphnik 
┃⬤${prefix}venus
┃⬤${prefix}solarixe 
┃⬤${prefix}creamy 
┃⬤${prefix}paretro 
┃⬤${prefix}duotone 
┃⬤${prefix}retorolga 
┃⬤${prefix}sapphire 
┃⬤${prefix}japanese 
┃⬤${prefix}lavender 
┃⬤${prefix}morning 
┃⬤${prefix}lighteak 
┃⬤${prefix}softsepia 
┃⬤${prefix}viewfinder 
┃⬤${prefix}lemonande 
┃⬤${prefix}warmsunset 
┃⬤${prefix}goldenhour  
┃⬤${prefix}chrome1977 
┃⬤${prefix}monochrome 
┃⬤${prefix}perfectbandw 
┃⬤${prefix}blackandwhite 
┃⬤${prefix}constrastbandw  
┗━━━━━━━━━━⦿


┏━❰ *PRIMBON-MENU* ❱
┃⬤${prefix}shio 
┃⬤${prefix}tarot
┃⬤${prefix}nasib
┃⬤${prefix}rezeki
┃⬤${prefix}weton
┃⬤${prefix}zodiak
┃⬤${prefix}harisial
┃⬤${prefix}nomorhoki
┃⬤${prefix}sifatusaha
┃⬤${prefix}haribaik
┃⬤${prefix}penyakit 
┃⬤${prefix}karakter
┃⬤${prefix}fengshui
┃⬤${prefix}pekerjaan
┃⬤${prefix}nagahari
┃⬤${prefix}artinama
┃⬤${prefix}harisangar
┃⬤${prefix}artimimpi
┃⬤${prefix}arahrezeki
┃⬤${prefix}masasubur
┃⬤${prefix}jadiannikah
┃⬤${prefix}memancing
┃⬤${prefix}peruntungan
┃⬤${prefix}keberuntungan
┃⬤${prefix}suamiistri 
┃⬤${prefix}pasangan
┃⬤${prefix}ramalcinta
┃⬤${prefix}ramaljodoh
┃⬤${prefix}cocoknama
┃⬤${prefix}ramaljodohbali
┗━━━━━━━━━━━━━⦿

©️𝗭ED 𝗕𝗢𝗧 𝗜𝗡𝗖
`
let btn = [{
                                urlButton: {
                                    displayText: 'SUBSCRIBE',
                                    url: 'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'
                                }
                            },{
                                urlButton: {
                                    displayText: 'INSTAGRAM',
                                    url: 'https://www.instagram.com/young_money_zw'
                                }
                            },{
                                urlButton: {
                                    displayText: 'GITHUB',
                                    url: 'https://github.com/hacker-263/ZeD-Bot'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'SPEED',
                                    id: 'ping'
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'OWNER',
                                    id: 'owner'
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'LIST',
                                    id: 'listmenu'
                                }
                            }]
                        let setbot = db.data.settings[botNumber]
                        if (setbot.templateImage) {
                        let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `${global.botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://www.instagram.com/young_money_zw'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/hacker-263/ZeD-Bot'
}
}, {
quickReplyButton: {
displayText: 'SPEED',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'LIST',
id: 'listmenu'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateGif) {
                        let message = await prepareWAMessageMedia({ video: global.visoka, gifPlayback:true, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
videoMessage: message.videoMessage,
hydratedContentText: anu,
hydratedFooterText: `${botname}`,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/hacker-263/ZeD-Bot'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://www.instagram.com/young_money_zw'
}
}, {
quickReplyButton: {
displayText: 'SPEED',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'LIST',
id: 'listmenu'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateLocation) {
                        const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                           hydratedContentText: anu,
                            locationMessage: {
                            jpegThumbnail: buffer},
                            hydratedFooterText: botname,
hydratedButtons: [{
urlButton: {
displayText: 'SUBSCRIBE',
url: 'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'
}
}, {
urlButton: {
displayText: 'GITHUB',
url: 'https://github.com/hacker-263/ZeD-Bot'
}
}, {
urlButton: {
displayText: 'INSTAGRAM',
url: 'https://www.instagram.com/young_money_zw'
}, {
quickReplyButton: {
displayText: 'SPEED',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: 'LIST',
id: 'listmenu'
}
}]
}
}
}), { userJid: m.chat, quoted: m })
ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                        } else if (setbot.templateMsg) {
                        ZimBotInc.send5ButMsg(m.chat, anu, global.botname, btn)
                        } else if (setbot.templateList) {                       
            let sections = []   
            let listmenu = [`allmenu`,`mainmenu`,`groupmenu`,`expmenu`,`downloadmenu`,`searchingmenu`,`randommenu`,`textpromenu`,`photooxymenu`,`funmenu`,`imageeffectmenu`,`ephotomenu`,`primbonmenu`,`convertmenu`,`databasemenu`,`photofiltermenu`,`anonymousmenu`,`islammenu`,`voicemenu`,`toolsmenu`,`internetmenu`,`shortmenu`,`ownermenu`,`nsfwmenu`,`donasi`]
            let listmenuu = [`𝗔𝗟𝗟 𝗠𝗘𝗡𝗨`,`𝗠𝗔𝗜𝗡 𝗠𝗘𝗡𝗨`,`𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨`,`𝗫𝗣 𝗠𝗘𝗡𝗨`,`𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨`,`𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨`,`𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨`,`𝗧𝗘𝗫𝗧𝗣𝗥𝗢 𝗠𝗘𝗡𝗨`,`𝗣𝗛𝗢𝗧𝗢𝗢𝗫𝗬`,`𝗙𝗨𝗡 𝗠𝗘𝗡𝗨`,`𝗜𝗠𝗔𝗚𝗘 𝗘𝗙𝗙𝗘𝗖𝗧`,`𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨`,`𝗣𝗥𝗜𝗠𝗕𝗢𝗡 𝗠𝗘𝗡𝗨`,`𝗖𝗢𝗡𝗩𝗘𝗥𝗧 𝗠𝗘𝗡𝗨`,`𝗗𝗔𝗧𝗔𝗕𝗔𝗦𝗘 𝗠𝗘𝗡𝗨`,`𝗣𝗛𝗢𝗧𝗢 𝗙𝗜𝗟𝗧𝗘𝗥`,`𝗔𝗡𝗢𝗡𝗬𝗠𝗢𝗨𝗦 𝗠𝗘𝗡𝗨`,`𝗜𝗦𝗟𝗔𝗠 𝗠𝗘𝗡𝗨`,`𝗩𝗢𝗜𝗖𝗘 𝗠𝗘𝗡𝗨`,`𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨`,`𝗜𝗡𝗧𝗘𝗥𝗡𝗘𝗧 𝗠𝗘𝗡𝗨`,`𝗦𝗛𝗢𝗥𝗧 𝗠𝗘𝗡𝗨`,`𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨`,`𝗠𝗘𝗡𝗨 𝗡𝗦𝗙𝗪`,`𝗗𝗢𝗡𝗔𝗧𝗘`]
                    
                    let nombor = 1
                    let startnum = 0
                    
                    for (let x of listmenu) {
                    const list = {title: 'MENU NUMBER ' + nombor++,
                    rows: [
                       {
                        title: `${listmenuu[startnum++]}`,
                        
                        rowId: `${prefix}${x}`
	        }, 
      	    ]
            }
            sections.push(list)   
            }
            const sendm =  ZimBotInc.sendMessage(
            m.chat, 
           {
       text: `
*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯`,
       footer: `ZED BOT INC`,
       title: `*LIST MENU*`,
       jpegThumbnail: buffer,
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })
      } else if (setbot.templateDoc) {
      const buttonsDefault = [{ urlButton: { displayText: `SUBSCRIBE`, url : `https://www.youtube.com/c/Team263Hacks?sub_confirmation=1` } }, { urlButton: { displayText: `GITHUB`, url : `https://github.com/hacker-263/ZeD-Bot` } },
   {					
					quickReplyButton: {
						displayText: 'SPEED',
						id: 'ping'
					}
				},
				{
					quickReplyButton: {
						displayText: 'OWNER',
						id: 'owner'
					}
				},	
				  {
					quickReplyButton: {
						displayText: 'LIST',
						id: 'listmenu'
					}},]
	
			ZimBotInc.sendMessage(m.chat,{
	caption: anu,

	document:fs.readFileSync('./lib/tes.xlsx'), 
	mimetype: feler,
	jpegThumbnail: buffer,
	fileName: `${ucapannya2} ${pushname}`,
	fileLength: 99999999999999,
	templateButtons: buttonsDefault,footer: `${botname}`, quoted: m })
      }
      }
     break
//let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
//const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
//templateMessage: {
//hydratedTemplate: {
//imageMessage: message.imageMessage,
//hydratedContentText: anu,
//hydratedFooterText: `${global.botname}`,
//hydratedButtons: [{
//urlButton: {
//displayText: 'SUBSCRIBE',
//url: 'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'
//}
//}, {
//urlButton: {
//displayText: 'GITHUB',
//url: 'https://github.com/hacker-263/ZeD-Bot'
//}
//}, {
//quickReplyButton: {
//displayText: 'SPEED',
//id: 'ping'
//}
//}, {
//quickReplyButton: {
//displayText: 'OWNER',
//id: 'owner'
//}  
//}, {
//quickReplyButton: {
//displayText: 'LIST',
//id: 'list'
//}
//}]
//}
//}
//}), { userJid: m.chat, quoted: m })
//ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
//}
//break



case 'mainmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'MAIN MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  

                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *MAIN MENU* ❱
┃⬤${prefix}ping
┃⬤${prefix}listpc
┃⬤${prefix}listgc
┃⬤${prefix}owner
┃⬤${prefix}delete
┃⬤${prefix}infochat
┃⬤${prefix}quoted
┃⬤${prefix}listonline
┃⬤${prefix}runtime
┃⬤${prefix}speedtest
┃⬤${prefix}menu
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
const _0x5c8923=_0x3878;(function(_0x4cbfbe,_0xacef25){const _0x8ea93=_0x3878,_0xf7c2ca=_0x4cbfbe();while(!![]){try{const _0x36f3fe=-parseInt(_0x8ea93(0x187))/0x1+parseInt(_0x8ea93(0x186))/0x2+-parseInt(_0x8ea93(0x193))/0x3+-parseInt(_0x8ea93(0x191))/0x4*(-parseInt(_0x8ea93(0x18e))/0x5)+parseInt(_0x8ea93(0x18a))/0x6+parseInt(_0x8ea93(0x190))/0x7*(-parseInt(_0x8ea93(0x18b))/0x8)+parseInt(_0x8ea93(0x189))/0x9*(-parseInt(_0x8ea93(0x192))/0xa);if(_0x36f3fe===_0xacef25)break;else _0xf7c2ca['push'](_0xf7c2ca['shift']());}catch(_0x414c20){_0xf7c2ca['push'](_0xf7c2ca['shift']());}}}(_0x123b,0x2f5d7));function _0x123b(){const _0x2f0f04=['fromObject','Message','key','727336srpvwq','384852AXndYJ','GITHUB','2250gziVnA','1729008psFOlG','16LNJOyb','SUBSCRIBE','imageMessage','10KCnDsr','chat','177163ETUuAR','532052VAkVia','9250iOSaTj','171405WytGWt','message'];_0x123b=function(){return _0x2f0f04;};return _0x123b();}let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc['waUploadToServer']});const template=generateWAMessageFromContent(m[_0x5c8923(0x18f)],proto[_0x5c8923(0x184)][_0x5c8923(0x183)]({'templateMessage':{'hydratedTemplate':{'imageMessage':message[_0x5c8923(0x18d)],'hydratedContentText':anu,'hydratedFooterText':''+global['botname'],'hydratedButtons':[{'urlButton':{'displayText':_0x5c8923(0x18c),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x5c8923(0x188),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x5c8923(0x18f)]});function _0x3878(_0x2496c4,_0xe8d08e){const _0x123b1e=_0x123b();return _0x3878=function(_0x387861,_0x2d31c4){_0x387861=_0x387861-0x183;let _0x8acd87=_0x123b1e[_0x387861];return _0x8acd87;},_0x3878(_0x2496c4,_0xe8d08e);}ZimBotInc['relayMessage'](m[_0x5c8923(0x18f)],template[_0x5c8923(0x194)],{'messageId':template[_0x5c8923(0x185)]['id']});
                }
            break
case 'nsfwmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'HORNY MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  

                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *NSFW MENU* ❱
┃⬤${prefix}cum
┃⬤ ${prefix}ass
┃⬤ ${prefix}culo
┃⬤ ${prefix}hentai
┃⬤ ${prefix}blowjob
┃⬤ ${prefix}bdsm
┃⬤ ${prefix}gangbang
┃⬤ ${prefix}pussy
┃⬤ ${prefix}yuri
┃⬤ ${prefix}ero
┃⬤ ${prefix}thighs
┃⬤ ${prefix}panties
┃⬤ ${prefix}masturbation
┃⬤ ${prefix}neko
┃⬤ ${prefix}orgy
┃⬤ ${prefix}foot
┃⬤ ${prefix}glasses
┃⬤ ${prefix}fendom
┃⬤ ${prefix}cuckold
┃⬤ ${prefix}ahegao
┗━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x3217(_0x37715e,_0x2f6592){const _0xa94637=_0xa946();return _0x3217=function(_0x32173c,_0x1faa3c){_0x32173c=_0x32173c-0x123;let _0x3b0d30=_0xa94637[_0x32173c];return _0x3b0d30;},_0x3217(_0x37715e,_0x2f6592);}const _0x3ea3f4=_0x3217;(function(_0x329815,_0x3187af){const _0x1742ff=_0x3217,_0x11de18=_0x329815();while(!![]){try{const _0x2af702=parseInt(_0x1742ff(0x12e))/0x1*(-parseInt(_0x1742ff(0x133))/0x2)+-parseInt(_0x1742ff(0x132))/0x3*(parseInt(_0x1742ff(0x138))/0x4)+-parseInt(_0x1742ff(0x134))/0x5*(parseInt(_0x1742ff(0x127))/0x6)+parseInt(_0x1742ff(0x12f))/0x7*(parseInt(_0x1742ff(0x136))/0x8)+-parseInt(_0x1742ff(0x128))/0x9+-parseInt(_0x1742ff(0x129))/0xa+-parseInt(_0x1742ff(0x12b))/0xb*(-parseInt(_0x1742ff(0x131))/0xc);if(_0x2af702===_0x3187af)break;else _0x11de18['push'](_0x11de18['shift']());}catch(_0x573d7e){_0x11de18['push'](_0x11de18['shift']());}}}(_0xa946,0x26ed7));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x3ea3f4(0x130)]});function _0xa946(){const _0x2a0735=['imageMessage','127KwzpDy','7qrwpSX','waUploadToServer','12123564BOwpfZ','784317yPMltC','4158aFgTZO','97980uRbCpG','relayMessage','424624qYNVeq','https://www.youtube.com/c/Team263Hacks?sub_confirmation=1','4SXNURK','chat','SUBSCRIBE','key','Message','84npVzAw','485649YpjWQW','501510MVGWCT','botname','11WGaHFz','https://github.com/hacker-263/ZeD-Bot'];_0xa946=function(){return _0x2a0735;};return _0xa946();}const template=generateWAMessageFromContent(m[_0x3ea3f4(0x123)],proto[_0x3ea3f4(0x126)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message[_0x3ea3f4(0x12d)],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x3ea3f4(0x12a)],'hydratedButtons':[{'urlButton':{'displayText':_0x3ea3f4(0x124),'url':_0x3ea3f4(0x137)}},{'urlButton':{'displayText':'GITHUB','url':_0x3ea3f4(0x12c)}}]}}}),{'userJid':m['chat']});ZimBotInc[_0x3ea3f4(0x135)](m['chat'],template['message'],{'messageId':template[_0x3ea3f4(0x125)]['id']});
                }
                break
                case 'expmenu': {
                    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                                buffer = await getBuffer(picak+'EXP MENU')
                                let Levele2 = level.getLevelingLevel(m.sender, _level)
                let Xp1 = level.getLevelingXp(m.sender, _level)
                let Xp2 = randomNomor(2000)       
                let hao = randomNomor(200)  
                
                                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
                ╭━━━━━━━━━━━━━━━━━━╮
                ┃         ${global.botname}
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃
                ┃ *${ucapannya2}*, *${pushname}*
                ┃
                ┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
                ┃ *✧ʀᴏʟᴇ: ${role}*
                ┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
                ┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
                ┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
                ┃ 
                ┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
                ┃https://tinyurl.com/Young-Money-Zw
                ┃
                ┃━━━━━━━━━━━━━━━━━━┃
                ┃                  ZeD BOT INC
                ╰━━━━━━━━━━━━━━━━━━╯
                
                     
                ┏━❰ *EXP & LIMIT* ❱
                ┃⬤${prefix}sel
                ┃⬤${prefix}buy
                ┃⬤${prefix}limit 
                ┃⬤${prefix}heal
                ┃⬤${prefix}limit
                ┃⬤${prefix}profile
                ┃⬤${prefix}mining
                ┃⬤${prefix}limituser
                ┃⬤${prefix}leaderboard
                ┗━━━━━━━━━━⦿
                
                ©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
                `
                function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                                }
            break
case 'groupmenu': case 'grupmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'GROUP MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *GROUP MENU* ❱
┃⬤${prefix}devote 
┃⬤${prefix}upvote
┃⬤${prefix}cekvote 
┃⬤${prefix}linkgroup
┃⬤${prefix}hapusvote
┃⬤${prefix}kick
┃⬤${prefix}vote
┃⬤${prefix}tagall
┃⬤${prefix}setdesc
┃⬤${prefix}group
┃⬤${prefix}hidetag
┃⬤${prefix}mute
┃⬤${prefix}setname
┃⬤${prefix}promote
┃⬤${prefix}demote
┃⬤${prefix}antilink
┃⬤${prefix}antibule
┃⬤${prefix}setppgc
┃⬤${prefix}antifb
┃⬤${prefix}antiinsta
┃⬤${prefix}antilinkall
┃⬤${prefix}antitiktok
┃⬤${prefix}antitelegram
┃⬤${prefix}antiytchannel
┃⬤${prefix}antivirtex
┃⬤${prefix}antibardword
┃⬤${prefix}editinfo
┃⬤${prefix}antiviewonce
┃⬤${prefix}antionce
┃⬤${prefix}dare
┃⬤${prefix}truth
┃⬤${prefix}toonce / once
┃⬤${prefix}antilinkyt
┃⬤${prefix}antiwame
┃⬤${prefix}ephemeral
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'downloadmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'DOWNLOAD')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *DOWNLOADER* ❱
┃⬤${prefix}apk
┃⬤${prefix}joox
┃⬤${prefix}pindl
┃⬤${prefix}fbmp3
┃⬤${prefix}savefrom
┃⬤${prefix}ytsvideo
┃⬤${prefix}getmusic
┃⬤${prefix}getvideo
┃⬤${prefix}ytsaudio
┃⬤${prefix}tiktok
┃⬤${prefix}tiktok2
┃⬤${prefix}tiktok3
┃⬤${prefix}tiktok4
┃⬤${prefix}smule
┃⬤${prefix}vimeo
┃⬤${prefix}twitter
┃⬤${prefix}twitter2
┃⬤${prefix}igtv
┃⬤${prefix}ytmp3
┃⬤${prefix}ytmp4
┃⬤${prefix}umma
┃⬤${prefix}tiktokwm
┃⬤${prefix}linkedin
┃⬤${prefix}tiktokmp3
┃⬤${prefix}youtube
┃⬤${prefix}igimage
┃⬤${prefix}twitteraudio
┃⬤${prefix}tiktoknowm
┃⬤${prefix}instagramstory
┃⬤${prefix}instagramstory2
┃⬤${prefix}instagramstory3
┃⬤${prefix}mediafire
┃⬤${prefix}facebook
┃⬤${prefix}facebook2
┃⬤${prefix}facebook3
┃⬤${prefix}instagram
┃⬤${prefix}instagram2
┃⬤${prefix}zippyshare
┃⬤${prefix}googledrive
┃⬤${prefix}ytshorts
┃⬤${prefix}soundcloud
┃⬤${prefix}instagramreal
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'searchingmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'SEARCH')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *SEARCH MENU* ❱
┃⬤${prefix}yts
┃⬤${prefix}lirik
┃⬤${prefix}play
┃⬤${prefix}amino
┃⬤${prefix}domain
┃⬤${prefix}anime
┃⬤${prefix}google
┃⬤${prefix}gimage
┃⬤${prefix}wattpad
┃⬤${prefix}ytsearch
┃⬤${prefix}ytsaudio
┃⬤${prefix}ytsvideo
┃⬤${prefix}ringtone
┃⬤${prefix}readmore
┃⬤${prefix}layarkaca
┃⬤${prefix}pinterest
┃⬤${prefix}wallpaper
┃⬤${prefix}layarkaca
┃⬤${prefix}wikimedia
┃⬤${prefix}gsmarena
┃⬤${prefix}cariquotes
┃⬤${prefix}igstalk
┃⬤${prefix}pixivsearch
┃⬤${prefix}sfilesearch
┃⬤${prefix}mangatoon
┃⬤${prefix}palingmurah
┃⬤${prefix}stalk
┃⬤${prefix}stickersearch
┃⬤${prefix}animesearch
┃⬤${prefix}tiktokstalk
┃⬤${prefix}githubstalk
┃⬤${prefix}twitterstalk
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'randommenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'RANDOM')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰*RANDOM* ❱
┃ ${prefix}bts
┃ ${prefix}exo
┃ ${prefix}yeet
┃ ${prefix}lick
┃ ${prefix}cry
┃ ${prefix}hug
┃ ${prefix}kiss
┃ ${prefix}pat
┃ ${prefix}bonk
┃ ${prefix}bully
┃ ${prefix}awoo
┃ ${prefix}waifu
┃ ${prefix}neko
┃ ${prefix}bully
┃ ${prefix}bonk
┃ ${prefix}bully
┃ ${prefix}puisi
┃ ${prefix}neko
┃ ${prefix}meme
┃ ${prefix}cecan
┃ ${prefix}cogan
┃ ${prefix}coffe
┃ ${prefix}couple
┃ ${prefix}anime
┃ ${prefix}waifu
┃ ${prefix}husbu
┃ ${prefix}smug
┃ ${prefix}cuddle
┃ ${prefix}husbu2
┃ ${prefix}shinobu
┃ ${prefix}shinobu
┃ ${prefix}meme2
┃ ${prefix}motivasi
┃ ${prefix}megumin
┃ ${prefix}katasenja
┃ ${prefix}darkjokes
┃ ${prefix}dilanquote
┃ ${prefix}bucinquote
┃ ${prefix}darkjokes2
┃ ${prefix}quotesanime
┗━━━━

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'textpromenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'TEXTPRO')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *TEXT MAKER* ❱
┃⬤${prefix}vintage
┃⬤${prefix}writing
┃⬤${prefix}engraved
┃⬤${prefix}glue-text
┃⬤${prefix}holograpic
┃⬤${prefix}deluxe-silver
┃⬤${prefix}fabric
┃⬤${prefix}wicker
┃⬤${prefix}larva
┃⬤${prefix}toxic
┃⬤${prefix}koi
┃⬤${prefix}bread
┃⬤${prefix}horor-blood
┃⬤${prefix}honey
┃⬤${prefix}ice
┃⬤${prefix}rusty
┃⬤${prefix}christmas
┃⬤${prefix}gradien
┃⬤${prefix}1917
┃⬤${prefix}harry-potter
┃⬤${prefix}3dstone
┃⬤${prefix}thunder2
┃⬤${prefix}sroberi
┃⬤${prefix}blood
┃⬤${prefix}joker-logo
┃⬤${prefix}marvel-logo2
┃⬤${prefix}lion-logo
┃⬤${prefix}pornhub
┃⬤${prefix}avengers-logo
┃⬤${prefix}ninja-logo
┃⬤${prefix}grafity-text2
┃⬤${prefix}astone
┃⬤${prefix}space
┃⬤${prefix}captain
┃⬤${prefix}logo-wolf2
┃⬤${prefix}logo-wolf
┃⬤${prefix}silk
┃⬤${prefix}3dnature
┃⬤${prefix}bevel
┃⬤${prefix}birthdaycake
┃⬤${prefix}burnpaper
┃⬤${prefix}coffee
┃⬤${prefix}coffee-heartcup
┃⬤${prefix}embroiderytext
┃⬤${prefix}flaming
┃⬤${prefix}flowertypo
┃⬤${prefix}funnycup
┃⬤${prefix}fur
┃⬤${prefix}gerbang
┃⬤${prefix}glowrainbow
┃⬤${prefix}gradientavatar
┃⬤${prefix}graffititext
┃⬤${prefix}harrypotter
┃⬤${prefix}lovemessage
┃⬤${prefix}luxuryroyal
┃⬤${prefix}neonlight
┃⬤${prefix}sweetcandy
┃⬤${prefix}summertext
┃⬤${prefix}woodenheart
┃⬤${prefix}woodblock
┃⬤${prefix}yellowroses
┃⬤${prefix}wolfmetal
┃⬤${prefix}underwaterocean
┃⬤${prefix}graffiti
┃⬤${prefix}angel
┃⬤${prefix}queen
┃⬤${prefix}wet-glass
┃⬤${prefix}status-mood2
┃⬤${prefix}summerysand
┗━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'photooxymenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'PHOTOOXY')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *PHOTO-OXY* ❱
┃⬤${prefix}broken-glass
┃⬤${prefix}neon-light 
┃⬤${prefix}black-pink
┃⬤ ${prefix}hallowen 
┃⬤${prefix}art-papper
┃⬤${prefix}magma 
┃⬤${prefix}glossy
┃⬤${prefix}grafity-text
┃⬤${prefix}watercolor
┃⬤${prefix}multi-color
┃⬤${prefix}neon-devil
┃⬤${prefix}sky-text
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'ephotomenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'EPHOTO')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *EPHOTO-363* ❱
┃⬤${prefix}3d-wood
┃⬤${prefix}angels-wings
┃⬤${prefix}snake-text
┃⬤${prefix}redhot-metal2
┃⬤${prefix}sandsummer-beach
┃⬤${prefix}snow-text
┃⬤${prefix}water-3d
┃⬤${prefix}water-effect
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'sertimenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'CERTIFICATE')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *CERTIFICATEMAKER* ❱
┃⬤${prefix}tololserti
┃⬤${prefix}blackpink
┃⬤${prefix}badgirlserti
┃⬤${prefix}badgirlserti
┃⬤${prefix}igcertificate
┃⬤${prefix}fuckgirlserti
┃⬤${prefix}ytcertificate
┃⬤${prefix}badboyserti
┃⬤${prefix}fuckboyserti
┃⬤${prefix}goodboyserti
┃⬤${prefix}goodgirlserti
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'imageeffectmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'IMAGE EF')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *IMAGE-EFFECT* ❱
┃⬤${prefix}jail
┃⬤${prefix}shit
┃⬤${prefix}rip
┃⬤${prefix}blur
┃⬤${prefix}gay
┃⬤${prefix}invert
┃⬤${prefix}burn
┃⬤${prefix}wanted
┃⬤${prefix}beautiful
┃⬤${prefix}pixelate
┃⬤${prefix}fotojatoh
┃⬤${prefix}ytcomment
┃⬤${prefix}imagesketch
┃⬤${prefix}triggeredwebp
┗━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'funmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'FUN MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *FUN FEATURE* ❱
┃⬤${prefix}family100
┃⬤${prefix}hilih 
┃⬤${prefix}simi
┃⬤ ${prefix}holoh
┃⬤${prefix}delttt
┃⬤${prefix}halah
┃⬤${prefix}huluh
┃⬤${prefix}heleh
┃⬤${prefix}suitpvp
┃⬤${prefix}jadian
┃⬤${prefix}math
┃⬤${prefix}jodohku
┃⬤${prefix}tictactoe
┃⬤${prefix}tebak
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'primbonmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'PRIMBON')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *PRIMBON-MENU* ❱
┃⬤${prefix}shio 
┃⬤${prefix}tarot
┃⬤${prefix}nasib
┃⬤${prefix}rezeki
┃⬤${prefix}weton
┃⬤${prefix}zodiak
┃⬤${prefix}harisial
┃⬤${prefix}nomorhoki
┃⬤${prefix}sifatusaha
┃⬤${prefix}haribaik
┃⬤${prefix}penyakit 
┃⬤${prefix}karakter
┃⬤${prefix}fengshui
┃⬤${prefix}pekerjaan
┃⬤${prefix}nagahari
┃⬤${prefix}artinama
┃⬤${prefix}harisangar
┃⬤${prefix}artimimpi
┃⬤${prefix}arahrezeki
┃⬤${prefix}masasubur
┃⬤${prefix}jadiannikah
┃⬤${prefix}memancing
┃⬤${prefix}peruntungan
┃⬤${prefix}keberuntungan
┃⬤${prefix}suamiistri 
┃⬤${prefix}pasangan
┃⬤${prefix}ramalcinta
┃⬤${prefix}ramaljodoh
┃⬤${prefix}cocoknama
┃⬤${prefix}ramaljodohbali
┗━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'convertmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'CONVERT')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *CONVERT-STICKER* ❱
┃⬤${prefix}sticker
┃⬤${prefix}ttp
┃⬤${prefix}attp
┃⬤${prefix}ttp2
┃⬤${prefix}smeme
┃⬤${prefix}sticker
┃⬤${prefix}ebinary
┃⬤${prefix}dbinary
┃⬤${prefix}styletext
┃⬤${prefix}emojimix2
┃⬤${prefix}stickerly
┃⬤${prefix}stickerline
┃⬤${prefix}stickerwm
┃⬤${prefix}emojimix
┃⬤${prefix}togif
┃⬤${prefix}tourl
┃⬤${prefix}tovn
┃⬤${prefix}tovideo
┃⬤${prefix}tomp3 
┃⬤${prefix}toaudio 
┃⬤${prefix}toimage
┃⬤${prefix}removebg
┃⬤${prefix}imagetopdf 
┗━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'databasemenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'DATABASE')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *DATABASE-MENU* ❱
┃⬤${prefix}setcmd 
┃⬤${prefix}listcmd
┃⬤${prefix}delcmd 
┃⬤${prefix}addmsg 
┃⬤${prefix}listmsg
┃⬤${prefix}getmsg
┃⬤${prefix}delmsg
┃⬤${prefix}lockcmd 
┗━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'photofiltermenu': case 'photofilter': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'PHOTO FILTER')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *PHOTO-FILTER* ❱
┃⬤${prefix}aria 
┃⬤${prefix}attic
┃⬤${prefix}ruby 
┃⬤${prefix}sand 
┃⬤${prefix}eva
┃⬤${prefix}lisa 
┃⬤${prefix}hdr
┃⬤${prefix}lana 
┃⬤${prefix}lomo 
┃⬤${prefix}milk 
┃⬤${prefix}milk 
┃⬤${prefix}hana 
┃⬤${prefix}plumy 
┃⬤${prefix}movie 
┃⬤${prefix}orton 
┃⬤${prefix}molly  
┃⬤${prefix}sepia 
┃⬤${prefix}sphnik 
┃⬤${prefix}venus
┃⬤${prefix}solarixe 
┃⬤${prefix}creamy 
┃⬤${prefix}paretro 
┃⬤${prefix}duotone 
┃⬤${prefix}retorolga 
┃⬤${prefix}sapphire 
┃⬤${prefix}japanese 
┃⬤${prefix}lavender 
┃⬤${prefix}morning 
┃⬤${prefix}lighteak 
┃⬤${prefix}softsepia 
┃⬤${prefix}viewfinder 
┃⬤${prefix}lemonande 
┃⬤${prefix}warmsunset 
┃⬤${prefix}goldenhour  
┃⬤${prefix}chrome1977 
┃⬤${prefix}monochrome 
┃⬤${prefix}perfectbandw 
┃⬤${prefix}blackandwhite 
┃⬤${prefix}constrastbandw  
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break



case 'anonymousmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'ANONYMOUS')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *ANONYMOUS* ❱
┃⬤${prefix}start
┃⬤${prefix}next
┃⬤${prefix}keluar
┃⬤${prefix}sendcontact
┃⬤${prefix}anonymous
┗━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'islammenu': case 'islamicmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'ISLAM')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *ISLAMIC MENU* ❱
┃⬤${prefix}listsurah
┃⬤${prefix}tafsirsurah
┃⬤${prefix}iqra
┃⬤${prefix}hadist
┃⬤${prefix}alquran
┃⬤${prefix}juzamma
┃⬤${prefix}jadwalsholat
┃⬤${prefix}alquran2
┃⬤${prefix}kisahnabi
┃⬤${prefix}alquranaudio
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break
case 'voicemenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'VOICE CHANGER')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *VOICE-CHANGER* ❱
┃⬤${prefix}fat 
┃⬤${prefix}deep 
┃⬤${prefix}robot 
┃⬤${prefix}slow 
┃⬤${prefix}tupai 
┃⬤${prefix}fast 
┃⬤${prefix}bass 
┃⬤${prefix}blown 
┃⬤${prefix}reverse 
┃⬤${prefix}earrape 
┃⬤${prefix}nightcore 
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
let message = await prepareWAMessageMedia({ image: buffer, jpegThumbnail:buffer }, { upload: ZimBotInc.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: anu,
hydratedFooterText: `${global.botname}`,
hydratedButtons: [{        
    "urlButton": {
      "displayText": "SUBSCRIBE",
      "url": "https://www.youtube.com/c/Team263Hacks?sub_confirmation=1"
    }
}, {
urlButton: {
    displayText: 'GITHUB',
    url: 'https://github.com/hacker-263/ZeD-Bot'
}
}
]
}
}
               }), { userJid: m.chat })
                ZimBotInc.relayMessage(m.chat, template.message, { messageId: template.key.id })
                }
            break

case 'toolsmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'TOOLS')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *TOOLS MENU* ❱
┃⬤${prefix}git
┃⬤${prefix}nulis
┃⬤${prefix}ssweb
┃⬤${prefix}gitclone
┃⬤${prefix}nuliskiri
┃⬤${prefix}translate
┃⬤${prefix}nuliskanan
┃⬤${prefix}magernulis
┃⬤${prefix}magernulis2
┃⬤${prefix}magernulis3
┃⬤${prefix}magernulis4
┃⬤${prefix}magernulis5
┃⬤${prefix}magernulis6
┗━━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break
case 'internetmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'INTERNET')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *INTERNET MENU* ❱
┃⬤${prefix}detik
┃⬤${prefix}news
┃⬤${prefix}infobmkg
┃⬤${prefix}covidindo
┃⬤${prefix}covidglobal
┃⬤${prefix}kbbi
┃⬤${prefix}carigc
┃⬤${prefix}searchgroup
┃⬤${prefix}google
┃⬤${prefix}brainly
┃⬤${prefix}kodepos
┃⬤${prefix}cuaca
┃⬤${prefix}playstore
┃⬤${prefix}wikipedia
┃⬤${prefix}jadwalsalat
┃⬤${prefix}resep
┃⬤${prefix}resepmasakan
┗━━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'shortmenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'SHORTLINK')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *SHORTLINK* ❱
┃⬤${prefix}shortlink
┃⬤${prefix}tinyurl
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'ownermenu': {
    ZimBotInc.sendMessage(m.chat, { react: { text: `${global.reactmoji}`, key: m.key }})
                buffer = await getBuffer(picak+'OWNER MENU')
                let Levele2 = level.getLevelingLevel(m.sender, _level)
let Xp1 = level.getLevelingXp(m.sender, _level)
let Xp2 = randomNomor(2000)       
let hao = randomNomor(200)  
                anu = `*✧ᴜᴘᴛɪᴍᴇ: ${runtime(process.uptime())}*
╭━━━━━━━━━━━━━━━━━━╮
┃         ${global.botname}
┃━━━━━━━━━━━━━━━━━━┃
┃
┃ *${ucapannya2}*, *${pushname}*
┃
┃ *✧ʟɪᴍɪᴛ: ${getLimit(m.sender)}*
┃ *✧ʀᴏʟᴇ: ${role}*
┃ *✧ʟᴇᴠᴇʟ:* ${Levele2} 
┃ *✧ᴄᴀʟᴇɴᴅᴀʀ:* *${thisDay}*, *${day}* 
┃ *✧ᴛɪᴍᴇ:* *${moment.tz('Africa/Harare').format('HH:mm:ss')}*
┃ 
┃      ↣𝐘𝐨𝐮𝐭𝐮𝐛𝐞↢ 
┃https://tinyurl.com/Young-Money-Zw
┃
┃━━━━━━━━━━━━━━━━━━┃
┃                  ZeD BOT INC
╰━━━━━━━━━━━━━━━━━━╯

     
┏━❰ *OWNER MENU* ❱
┃⬤${prefix}leave
┃⬤${prefix}tfxp
┃⬤ ${prefix}join
┃⬤${prefix}bctext
┃⬤${prefix}bcall
┃⬤${prefix}bcloc
┃⬤${prefix}tflimit
┃⬤${prefix}block
┃⬤${prefix}react
┃⬤${prefix}bctext
┃⬤${prefix}setexif
┃⬤${prefix}chat
┃⬤${prefix}bcvideo
┃⬤${prefix}bcgroup
┃⬤${prefix}bcimage
┃⬤${prefix}setmenu
┃⬤${prefix}unblock
┃⬤${prefix}setppbot
┗━━━━━━━━━━⦿

©️𝗭eD 𝗕𝗢𝗧 𝗜𝗡𝗖
`
function _0x186b(){const _0x16c1b5=['135080AGrzDU','Message','GITHUB','10mzHMwO','chat','21bZsKRC','552424zUneQH','1429756BqfDSd','key','240mbdKBv','relayMessage','844052JLGZth','146104dkkfWS','1857480tcaVPE','595awiboR','16150698mclKJV','botname','waUploadToServer','SUBSCRIBE'];_0x186b=function(){return _0x16c1b5;};return _0x186b();}const _0x36f452=_0x131e;(function(_0x25c54b,_0x526416){const _0x54eaa5=_0x131e,_0x24b40d=_0x25c54b();while(!![]){try{const _0x437851=-parseInt(_0x54eaa5(0x193))/0x1+-parseInt(_0x54eaa5(0x1a0))/0x2+parseInt(_0x54eaa5(0x19e))/0x3*(-parseInt(_0x54eaa5(0x19f))/0x4)+parseInt(_0x54eaa5(0x199))/0x5*(parseInt(_0x54eaa5(0x1a2))/0x6)+-parseInt(_0x54eaa5(0x194))/0x7*(-parseInt(_0x54eaa5(0x1a5))/0x8)+parseInt(_0x54eaa5(0x195))/0x9*(parseInt(_0x54eaa5(0x19c))/0xa)+parseInt(_0x54eaa5(0x1a4))/0xb;if(_0x437851===_0x526416)break;else _0x24b40d['push'](_0x24b40d['shift']());}catch(_0x459222){_0x24b40d['push'](_0x24b40d['shift']());}}}(_0x186b,0xeba1d));let message=await prepareWAMessageMedia({'image':buffer,'jpegThumbnail':buffer},{'upload':ZimBotInc[_0x36f452(0x197)]});const template=generateWAMessageFromContent(m['chat'],proto[_0x36f452(0x19a)]['fromObject']({'templateMessage':{'hydratedTemplate':{'imageMessage':message['imageMessage'],'hydratedContentText':anu,'hydratedFooterText':''+global[_0x36f452(0x196)],'hydratedButtons':[{'urlButton':{'displayText':_0x36f452(0x198),'url':'https://www.youtube.com/c/Team263Hacks?sub_confirmation=1'}},{'urlButton':{'displayText':_0x36f452(0x19b),'url':'https://github.com/hacker-263/ZeD-Bot'}}]}}}),{'userJid':m[_0x36f452(0x19d)]});function _0x131e(_0xb57061,_0x1d708f){const _0x186b37=_0x186b();return _0x131e=function(_0x131e55,_0x4245fa){_0x131e55=_0x131e55-0x193;let _0x47b1da=_0x186b37[_0x131e55];return _0x47b1da;},_0x131e(_0xb57061,_0x1d708f);}ZimBotInc[_0x36f452(0x1a3)](m[_0x36f452(0x19d)],template['message'],{'messageId':template[_0x36f452(0x1a1)]['id']});
                }
            break

case 'sond': {

            hey = fs.readFileSync('./media/tes.mp3')

            ZimBotInc.sendMessage(m.chat, {audio: hey, mimetype: 'audio/mpeg', ptt:true }, {quoted:m})

            }

            break

            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }
                if (antiToxic)
                if (bad.includes(messagesD)) {
                if (m.text) {
                bvl = `*▊▊▊ANTIBAD WORDS▊▊▊*\n\n*Lucky you, you are admin*`
                if (isAdmins) return m.reply(bvl)
                if (m.key.fromMe) return m.reply(bvl)
                if (isCreator) return m.reply(bvl)
                kice = m.sender
                await ZimBotInc.groupParticipantsUpdate(m.chat, [kice], 'remove')
                ZimBotInc.sendMessage(from, {text:`*▊▊▊ANTIBAD WORDS▊▊▊*\n\n@${kice.split("@")[0]} *was kicked because of being rude to others in this group*`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
                }
                
                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Find Partner', 'Leave', 'Continue', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    ZimBotInc.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
