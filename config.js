const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : ",260971816956";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_55_07_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAzMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODAsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgNCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDYxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMCxcbiAgICAgICAgNjksXG4gICAgICAgIDgyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDUyLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDU3LFxuICAgICAgICA1MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICA5NyxcbiAgICAgICAgMjQwLFxuICAgICAgICAzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYzLFxuICAgICAgICA1MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAzNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDkzLFxuICAgICAgICAxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2OSxcbiAgICAgICAgODksXG4gICAgICAgIDczLFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA3NyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDgzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgxLFxuICAgICAgICA5NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxODgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY1LFxuICAgICAgICAyMixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDMzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDIwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA0MixcbiAgICAgICAgMjUyLFxuICAgICAgICAyNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5NCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ3R2pCcFJXdWVnUVJJRFFaWVcwVjNTK0U0UVB1TndmL3JITWpRVk5HVXNjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ4Q190NENFYlRxcUVxUDN6ZkV0NnFnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg3ZTMwM2I0LTIxMjYtNGFlNi1hYTI1LThjNGJhYjc3ZGY3ZVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzOSxcbiAgICAgIDIyNixcbiAgICAgIDEzNyxcbiAgICAgIDI1LFxuICAgICAgNzIsXG4gICAgICA5NSxcbiAgICAgIDI0OCxcbiAgICAgIDE2MSxcbiAgICAgIDExOCxcbiAgICAgIDM1LFxuICAgICAgMTAsXG4gICAgICA1MyxcbiAgICAgIDEyOCxcbiAgICAgIDEwMixcbiAgICAgIDEwLFxuICAgICAgMTAyLFxuICAgICAgMTE2LFxuICAgICAgMTA3LFxuICAgICAgMjE5LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMixcbiAgICAgIDE0NSxcbiAgICAgIDcyLFxuICAgICAgOTksXG4gICAgICAxNzgsXG4gICAgICAyNTIsXG4gICAgICAxOSxcbiAgICAgIDMxLFxuICAgICAgNjAsXG4gICAgICAyMjQsXG4gICAgICA5MCxcbiAgICAgIDE3NyxcbiAgICAgIDczLFxuICAgICAgMjAzLFxuICAgICAgMTczLFxuICAgICAgMjI5LFxuICAgICAgNTcsXG4gICAgICA5MCxcbiAgICAgIDI0NSxcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZSlFUSkY3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYwOTcxODE2OTU2OjU5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTWFrb1wiLFxuICAgIFwibGlkXCI6IFwiMjEzNTYzMjcyNjA5OTcyOjU5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ttcGxza0VFSmEya2JRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiOXd0Z0F5aEV2N2xFZEFBSmwxQU5kTzZLNDN5U08zelAzRGdKY0tTT2ltdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxNmpzUGZQZzJaVDA2OW1qSGxKczVZMjZvSS9HRUxhVTFDRGtadHFmcGZ5emN2UU5jMFRlT2lQcFdKc2N2eUd0NlExb2ZySFZEbGhOaGo4MlFxeEdCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQVXdOczgrMVJoRDN4ZlVoNGxlM0ZvYWxWcitncmxySUtTM0QwSEVEZDJHaW1TeFVGd2F1Q1dYbFVlcFRHQ0FYa2QybWU0NVNWSnQxMnZmTXpiZXFDQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjA5NzE4MTY5NTY6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5OTUwMTA3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "KING👑MAKO",
  ownername:process.env.OWNER_NAME|| "KING👑MAKO",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "❤️MAKO❤️"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
