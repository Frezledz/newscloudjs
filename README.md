# NEW ScloudJS

I remade old [Scloudjs](https://github.com/xxXFreezerXxx/ScloudJS) for better usability like make it able to use it as a package, better interface and so on.  
[説明(日本語版)](https://github.com/xxXFreezerXxx/newscloudjs/wiki/Description%5B%E6%97%A5%E6%9C%AC%E8%AA%9E%E7%89%88%5D)
## requirements
Node.js (Should be new and stable version)
## Usage
1. Setup & Download package
```
npm init -y
npm i scloudjs
```
2. Create javascript and write a few codes

# Code examples
```
const scloudjs = require("scloudjs"); //Able to use ScloudJS as a module
let clouddatas = new Object();//Cloud variable's data will be written here
clouddatas = scloudjs.setpredata(["CLIENT","HOST_1"]);//Name of cloud datas(optional)

const process = (data)=>{//Codes you want to run when you received a message from server
   const temp = scloudjs.parsedata(data,clouddatas);//sort datas
   clouddatas = temp.clouddatas;//Cloud variable's data
   const changedlists = temp.changedlists;//List of cloud variables that has been changed
   scloudjs.sendtocloud("HOST",19);//Change value "HOST" to 19
   clouddatas["HOST"].value = 19 //Config your object because you'll not receive message when you send datas.
};

scloudjs.setdatas("username","password:","project id",process);//Config some datas

const func = async()=>{//run

    await scloudjs.login();//Login to scratch
    await scloudjs.connect();//Connect to scratch server
    await scloudjs.handshake();//connect to your project
};
func();

```
## etc
I recommend to use[ScloudJS GUI Edition](https://github.com/xxXFreezerXxx/ScloudjsGUI) if you don't have enough coding skills.
## credit
libraries used : ws
