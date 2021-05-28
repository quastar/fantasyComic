/**
 * 消息体
 */
export interface Message{
    messageId:string,
    talkerId:string,
    avatar:string,
    talkerName:string,
    message:string,
    timestamp?:number
}
/**
 * 会话
 */
export interface conversations{
    conversationId:string,
    messageBody:Array<Message>,
    isGroup:boolean,
    avartar?:string,
    tag:number,
    groupName?:string
}