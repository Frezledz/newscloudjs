const WebSocket = require("ws");
const tokens = require("./login").tokens;
const adatas = require("./setdata").adatas;


const _connect = ()=>{
    return new Promise((resolve)=>{
        const Socket = new WebSocket("wss://clouddata.scratch.mit.edu/",{
            headers:{
                "origin":"https://scratch.mit.edu",
                "referer":"https://scratch.mit.edu",
                "Cookie":`scratchsessionsid=${tokens.sessionsid};`
            }
        })
        socket = Socket;
        Socket.on("open",()=>{
            resolve();
            Socket.onmessage = (event)=>{
                console.log(event.data);
            }
        })
    })
}
const _handshake = ()=>{
    socket.send(
        `${JSON.stringify(
            { "method": "handshake", "user": adatas.username, "project_id": adatas.projectid , 
            headers : {
                cookie: `scratchsessionsid=${tokens.sessionsid};`, origin: 'https://scratch.mit.edu'
            }
        }
    )}\n`)
}

const _sendtocloud =(name,value)=>{
    socket.send(`${JSON.stringify({"method":"set","user":adatas.username,"project_id":adatas.projectid,"name":"☁ "+name,"value":value,
    headers : {cookie: `scratchsessionsid=+${sessionid};`,origin: 'https://scratch.mit.edu'}})}\n`);
    sort(JSON.stringify({"name":`☁ ${name}`,"value":value})+"\n");
}



module.exports = {
    connect:_connect,
    handshake:_handshake,
    sendtocloud:_sendtocloud
}
