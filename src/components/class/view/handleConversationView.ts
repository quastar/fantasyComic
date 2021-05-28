
import {conversations} from '../model/messageModel'
import request from '../../request/request'

export default class handleConversationView  {
    
    public async getConversations():Promise<Array<conversations>>{
        const res= await request.get('http://localhost:8085/testJSON/conversations.json')
        return res.data;
    }
}