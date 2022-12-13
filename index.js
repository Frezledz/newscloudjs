const _connect = require("./libraries/cloud").connect;
const _handshake = require("./libraries/cloud").handshake;
const _sendtocloud = require("./libraries/cloud").sendtocloud;
const _login = require("./libraries/login").login;
const _setdatas = require("./libraries/setdata").setdatas;
const _parsedata = require("./libraries/cloud").parsedata;
const _setpredata = require("./libraries/cloud").setpredata;
module.exports = (
    {
        connect:_connect,
        handshake:_handshake,
        sendtocloud:_sendtocloud,
        login:_login,
        setdatas:_setdatas,
        parsedata:_parsedata,
        setpredata:_setpredata
    }
    )