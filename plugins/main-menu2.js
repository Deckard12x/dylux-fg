
import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use estos comandos sin el prefijo_

▢ Si tienes más  audios   
envíame por t.me/fgsupp_bot el *audio + comando* con en el que responderá

┌─⊷ *AUDIOS* 
▢ Bot
▢ Buenos días
▢ Buenas tardes 
▢ Buenas noches
└──────────────
`
//const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    let pp = './src/fg_logo.jpg' 
    conn.sendButton(m.chat, m2, '▢ DyLux  ┃ ᴮᴼᵀ\n▢ Sígueme en Instagram\nhttps://www.instagram.com/fg98._\n', pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 

export default handler
