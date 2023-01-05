declare var connect:()=>Promise<void>;
declare var handshake:()=>void;
declare var sendtocloud:(name:string,value:number)=>void;
declare var parsedata:(data:string,clouddatas:Object)=>{changedlists:string[],clouddatas:Object};
declare var setpredata:(clouds:string[])=>Object;
declare var login:()=>Promise<any>;
declare var setdatas:(username:string,password:string,projectid:string,process:(data:string)=>void,clouddata:any)=>void;
export {connect,handshake,sendtocloud,parsedata,setpredata,login,setdatas}