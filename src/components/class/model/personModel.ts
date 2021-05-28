/**
 * 用户信息体
 */
export  interface Person{
    id:string,
    name:string,
    status:number,//0为在线，1为离线
    sex:number,//0为男，1为女
    avatar:string,
    setting:{
        background:string,
        sigin?:string,
        level:number,
        isVip:boolean
    }
}