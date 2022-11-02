let _adatas = {username:"",password:"",projectid:"",process:"",clouddata:""};
const _setdatas = (username,password,projectid,process,clouddata)=>{
    _adatas.username = username;
    _adatas.password = password;
    _adatas.projectid = projectid;
    _adatas.process = process;
    _adatas.clouddata=clouddata
}

module.exports = {adatas:_adatas,setdatas:_setdatas};