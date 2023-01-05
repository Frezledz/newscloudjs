/**Connect to cloud variables server. */
declare var connect:()=>Promise<void>;
/**Connect to a Scratch project */
declare var handshake:()=>void;
/**Change the value of cloud variables. */
declare var sendtocloud:(name:string,value:number)=>void;
/**Convert messages from server to datas which is easy to read. */
declare var parsedata:(data:string,clouddatas:Object)=>{changedlists:string[],clouddatas:Object};
/**Add names of cloud variables if you know. */
declare var setpredata:(clouds:string[])=>Object;
/**Log in to Scratch account. */
declare var login:()=>Promise<any>;
/** Set required datas for scloudjs.*/
declare var setdatas:(username:string,password:string,projectid:string,process:(data:string)=>void,clouddata:any)=>void;
export {connect,handshake,sendtocloud,parsedata,setpredata,login,setdatas}