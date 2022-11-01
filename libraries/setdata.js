let _adatas = {username:"",password:"",projectid:""};
const _setdatas = (username,password,projectid)=>{
    _adatas.username = username;
    _adatas.password = password;
    _adatas.projectid = projectid;
}

module.exports = {adatas:_adatas,setdatas:_setdatas};