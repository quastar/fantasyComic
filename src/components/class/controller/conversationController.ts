import handleConversationView from '../view/handleConversationView'
import {conversations} from '../model/messageModel'
export default class conversationController  {
    public handleConversationView=new handleConversationView()
    public async getConversations():Promise<Array<conversations>>{
      return await this.handleConversationView.getConversations()
    }
}