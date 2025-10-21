const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "TKT-CYBER~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkpueTlNbVdnOEJQbTY3UGZUbE41QWlYTk1LOW11U0QzUlhtRUpJeTVsST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUt1cEQxeERyS2xNUnd3MEpNWXBwaklreTdpcE1wU1JRZnhtZExIZ2xVMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQ0lRSnBXLzdBL2tlZTFlVnhHZGdldHBsUHJYRkM4TWY3bzlrWXBUdjJrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMeDlXalNXeThhQUR3SWtySjlCT0pKN0JFZEJIT29VRjhPazdVZmxCZUJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldBWFdEamw3endaMWxBMDFjVTEwVVVjaFA0d1ZUZHlqV0ZqYnV1RWY1VUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVMQlUvWG9wczRmK2FnZ1krWmhwNzROcmFrdUFTaWtURFFVcmxBbnJoeDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0YzVUV6SzM1T0QvZzJVSmVXM1dGRG82OTJvMWJwc1IwN2IyNEk3ZTQyRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSzdrZVVSeFFmTUNJVlN4MmkxZGwzRnpJa1k3Nk9TQkVtVjY4dE93UitYWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndYYVV4bENJN3pweFA4Zmo2dDJFNGw2Y2RQbzhYM3RUTFIyNlJPbmZ0L0d1TDdlZGo1S2FtUnhXUVlERTR0WEhYN0N0V1o0SzVYekFwM2dqblVnUkRBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM5LCJhZHZTZWNyZXRLZXkiOiIyWWhiVWpXQ3IwQkFzcjBVODJRVC9RZ0M3MXlVbmdOb1h1SldsZWdWaGtrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI5RkdGV0RFNiIsIm1lIjp7ImlkIjoiMjYzNzgxNjk2NDMxOjNAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMDQ0NzU0MDcwMTYxNDk6M0BsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1Bqa3lQSUdFTm0zM3NjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9CdkEwa21wUnErcXZ0NEJQeTlxWERyQWNhTzV0LzZjQkZiMGRpMjFmVlE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVaR3JoN1F1aEUwa3hEeVU1TnZBZmcwdDJYVkpDd3dOeVN1WGdRRUdpbHRZVW8wWmNYRUFOdDY3d0VUNm5mNVd2ZXh5OE9RVUVOZUF6U0ZGNG4yMURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJCR01EeXdrUlNVWWRKLzFOc0xXUGlUc29od05saEx4R1dabUZEeW9xUWJBZFdwbW9OUFBlYlptbVVxK0hFWnVSOFBWWEN6TmlrcWV1akI0eXhKLzVEUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MTY5NjQzMTozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRnYndOSkpxVWF2cXI3ZUFUOHZhbHc2d0hHanViZituQVJXOUhZdHRYMVUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MTA1Nzc2NywibGFzdFByb3BIYXNoIjoiMkc0QW11In0",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status it
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY TKT-CYBER-XMD-V3🇿🇼*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "false",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/d622xc.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "TKT-CYBER-XMD-V3",
// add bot namw here for menu
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// true to get auto status react
STICKER_NAME: process.env.STICKER_NAME || "TKT-CYBER-TECH",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "263718095555",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "𝐓𝐀𝐅𝐀𝐃𝐙𝐖𝐀-𝐓𝐊𝐓",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©𝙿𝙾𝚆𝙴𝚁𝙴𝙳 𝙱𝚈 𝐓𝐊𝐑-𝐓𝐄𝐂𝐇🇿🇼*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/d622xc.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*TKT-CYBER-XMD*🇿🇼",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "263718095555",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
