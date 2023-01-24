const connect = require("./libraries/cloud").connect;
const handshake = require("./libraries/cloud").handshake;
const sendtocloud = require("./libraries/cloud").sendtocloud;
const parsedata = require("./libraries/cloud").parsedata;
const setpredata = require("./libraries/cloud").setpredata;
const login = require("./libraries/login").login;
const setdatas = require("./libraries/setdata").setdatas;
module.exports = (
    {
        connect,
        handshake,
        sendtocloud,
        login,
        setdatas,
        parsedata,
        setpredata
    }
    )
