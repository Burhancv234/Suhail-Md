const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="burhancv007@gmail.com"
global.location="kerala,India"


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://sizkvkkvkfkb:<password>@cluster0.prykfbh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://burhancv234_gtgb_user:TkniX5x78rY4GpTXnDqqR8PpNOfDKWXE@dpg-cq9kgnbv2p9s73ck8c7g-a.oregon-postgres.render.com/burhancv234_gtgb"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/kerla";
global.github=process.env.GITHUB|| "https://github.com/Burhancv234";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/Caf2WX6iKtc7TeRaeefFEh";
global.website=process.env.GURL || "https://chat.whatsapp.com/Caf2WX6iKtc7TeRaeefFEh" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://gist.github.com/jimmieego/ce235126a487d17c5845223584aab60a?permalink_comment_id=5121378#gistcomment-5121378" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "𝐌𝐀𝐃-𝐁𝐎𝐓" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "919995790973";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "919995790973";




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
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "919995790973";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_37_07_15_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDg1LFxuICAgICAgICA3MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0NixcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA1MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgNixcbiAgICAgICAgMjUxLFxuICAgICAgICA0MixcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNCxcbiAgICAgICAgNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgODMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNixcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTksXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA5OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOSxcbiAgICAgICAgNzksXG4gICAgICAgIDY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNzYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwLFxuICAgICAgICA1MixcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA2LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICA2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAyMjksXG4gICAgICAgIDcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMDksXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTU5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzksXG4gICAgICAgIDUxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTUsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyLFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTIsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUzLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDc5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTksXG4gICAgICAgIDE0LFxuICAgICAgICA0LFxuICAgICAgICAxODYsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICA5NCxcbiAgICAgICAgNyxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ5NTIwb0tSL3JJNGRDVzV4UUErY004c3RRcUtNWmk4Y3hTZzRUeVpXNm44PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkxOTYwNTgzMjE2NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNjRCMkI5Q0FCQ0ZFOUU2NjRDOERDRDcyQ0M4QzY2QURcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMDE0NjI2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTE5NjA1ODMyMTY1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJBOEVERDE0NDdBNDQ0QTBCQkM0QUI3NTVGMEYxMjI1N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjEwMTQ2MjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZ3dCS0xxMGNRbHVnb3lQVkRiV0twQVwiLFxuICBcInBob25lSWRcIjogXCJlN2JiM2Y1My1jYWZiLTQ3MjctODlkNy0zMDRlZWYxZTIyMmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjMyLFxuICAgICAgMTcyLFxuICAgICAgMTkzLFxuICAgICAgMTg0LFxuICAgICAgMTM1LFxuICAgICAgMTIwLFxuICAgICAgMTI0LFxuICAgICAgOTEsXG4gICAgICAyOCxcbiAgICAgIDE2LFxuICAgICAgMTI3LFxuICAgICAgMTY5LFxuICAgICAgMjE3LFxuICAgICAgMjI2LFxuICAgICAgMTIzLFxuICAgICAgMTAwLFxuICAgICAgMjgsXG4gICAgICAzNSxcbiAgICAgIDIsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDEsXG4gICAgICAxMTgsXG4gICAgICAxMTgsXG4gICAgICA3NCxcbiAgICAgIDcxLFxuICAgICAgMTQ3LFxuICAgICAgMTE2LFxuICAgICAgMTE0LFxuICAgICAgMTkzLFxuICAgICAgMTk0LFxuICAgICAgMTE3LFxuICAgICAgMjE2LFxuICAgICAgMjA3LFxuICAgICAgMTkxLFxuICAgICAgMTEyLFxuICAgICAgMjcsXG4gICAgICAyNDMsXG4gICAgICA4MCxcbiAgICAgIDEyNixcbiAgICAgIDI0MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQSDROQUs5VFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTE5NjA1ODMyMTY1OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNDcwODEwMDUxMzkwNjoxMEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOj8J2TsfCdk64g8J2TnPCdk6rwnZOtIPCdk5fwnZO+8J2Tt/Cdk73wnZOu8J2Tu1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0w3ang3OEZFTnV5MHJRR0dBWWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwib25ZYlU0SndlaWtnOXR6UFI2UnBXVFhUNElZb1o1d3JmT0lNZ1JYVm95Yz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIvcVc4MjhYbWNicEVMbWF0enF3TmxFYWEzdlFMczhIRGlEckQreGdzOWMzaXdEbllHM2d3VUpQc1dqMFZWQVU2dzkzTTJHaUdCZytrWFhKUU5mWmFBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQbFJ0VWhjM3MxZTBObUZaaEtKamExMzlZMXQ4ZHA4UlBtU3lBZEhUM3lxSWUweStzZEkxSXh4OVJXRVhTQXJ2amxiR3lTTjFaTFFFWE9GdWFFSVVBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MTk2MDU4MzIxNjU6MTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDM5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjEwMTQ2MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEeTBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUR5MC5qc29uIjogIntcImtleURhdGFcIjpcIlNtT0t5K0lBemZRWThvdVNsSDUvNEZjalVzZHlhZ01GZmJOQlZ5K3M2S2c9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQ3NTQ3Mzg1MyxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 𝐌𝐀𝐃-𝐁𝐎𝐓 』```", //*『𝐁𝐔𝐑𝐇𝐀𝐍』*\n https://www.instagram.com/burhancv?igsh=MW11NmxqM2gwM3M="),
 
  author : process.env.PACK_AUTHER|| "mad",
  packname: process.env.PACK_NAME || "mad",
  botname : process.env.BOT_NAME  || "𝐌𝐀𝐃 𝐁𝐎𝐓",
  ownername:process.env.OWNER_NAME|| "Burhan",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
