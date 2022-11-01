const https = require("https");
const adatas = require("./setdata").adatas;
let _tokens = {sessionsid:"",token:"",isloggedin:0};
const _login = ()=>{
 return new Promise((resolve) =>{
   const reqoptions = {
       hostname: 'scratch.mit.edu',
       path: '/login/',
       headers: {
         "x-csrftoken": "a",
         "x-requested-with": "XMLHttpRequest",
         "Cookie": "scratchcsrftoken=a;scratchlanguage=en;",
         "referer": "https://scratch.mit.edu"
       },
       method: "POST"
     }
     const data = JSON.stringify({ username:adatas.username, password:adatas.password, useMessages: true })
     const req = https.request(reqoptions, res => {

      let datas = [];
         res.on('data', (a) => {
          datas.push(a);
         });
         res.on("end",()=>{
          for(c of res.rawHeaders){             
            if(c.includes("scratchsessionsid")){
              _tokens.sessionsid = c.match(/\"(.*)\"/g)[0];
            break;
          }
          }
          const a = Buffer.concat(datas);
          const reg = JSON.parse(Buffer.from(a,"utf-8").toString())
          _tokens.token = reg[0].token;
          resolve(tokens);
         })
     })
       
     req.on('error', error => {
       console.error(error);
     })
       
     req.write(data);
     req.end();
 
 })
 
}

exports.login = _login;
exports.tokens = _tokens;