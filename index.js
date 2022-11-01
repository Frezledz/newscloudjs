const _connect = require("./libraries/cloud").connect;
const _handshake = require("./libraries/cloud").handshake;
const _sendtocloud = require("./libraries/cloud").sendtocloud;
const _login = require("./libraries/login").login;
const _setdatas = require("./libraries/setdata").setdatas;
module.exports = (
    {
        connect:_connect,
        handshake:_handshake,
        sendtocloud:_sendtocloud,
        login:_login,
        setdatas:_setdatas,
    }
    )