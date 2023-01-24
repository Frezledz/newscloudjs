const WebSocket = require("ws");
const tokens = require("./login").tokens;
const adatas = require("./setdata").adatas;

let Socket;
const _connect = ()=>{
    return new Promise((resolve)=>{
        Socket = new WebSocket("wss://clouddata.scratch.mit.edu/",{
            headers:{
                "origin":"https://scratch.mit.edu",
                "referer":"https://scratch.mit.edu",
                "Cookie":`scratchsessionsid=${tokens.sessionsid};`
            }
        })
        Socket.onopen=()=>{
            resolve();
            Socket.onmessage = (event)=>{
                adatas.process(event.data);
            }
        }
    })
}
const _handshake = ()=>{
    Socket.send(
        `${JSON.stringify(
            { "method": "handshake", "user": adatas.username, "project_id": adatas.projectid , 
            headers : {
                cookie: `scratchsessionsid=${tokens.sessionsid};`, origin: 'https://scratch.mit.edu'
            }
        }
    )}\n`)
}

const _sendtocloud =(name,value)=>{
    Socket.send(`${JSON.stringify({"method":"set","user":adatas.username,"project_id":adatas.projectid,"name":"☁ "+name,"value":value,
    headers : {cookie: `scratchsessionsid=+${tokens.sessionsid};`,origin: 'https://scratch.mit.edu'}})}\n`);
}

const _parsedata = (data,clouds)=>{
    
    let temp = data.split("\n");
    temp.splice(temp.length-1,1);
    for(let i=0;i<temp.length;i++){
        temp[i]=JSON.parse(temp[i]);
        temp[i].name=temp[i].name.replace("☁ ","");
    }
    let changedlists = [];
    for(c of temp){
        clouds[c.name] = {method:c.method,project_id:c.project_id,value:c.value};
        changedlists.push(c.name);
    }
    return {changedlists:changedlists,clouddatas:clouds};
}
const _setpredata = (clouds)=>{
    let arr =new Object;
    for(c of clouds){
        arr[c]={method:null,project_id:null,value:null};
    }
    return arr;
}
module.exports = {
    connect:_connect,
    handshake:_handshake,
    sendtocloud:_sendtocloud,
    parsedata:_parsedata,
    setpredata:_setpredata
}
