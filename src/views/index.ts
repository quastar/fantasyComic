import { Component, Vue } from 'vue-property-decorator'
import home from './home/index.vue'
import im from './im/index.vue'
import consersationController from '../components/class/controller/conversationController'
import {conversations} from '../components/class/model/messageModel'

import {Person} from '../components/class/model/personModel'
type switchPage='home'|'im'|'default'
interface switchData{
    conversation?:conversations,
    page:switchPage
}
@Component({
    components:{
        'im-home':home,
        'im-im':im
    }
})
export default class container extends Vue {
    consersationController=new consersationController()
    public conversations:Array<conversations>|null=null;
    Page:switchPage='home' 
    chosedConversation:conversations|null=null;   
    created(){
       this.init()
    }
    async init(){
       const res=await this.consersationController.getConversations()
       this.conversations=res;
    }
    switchPage(data:switchData):void{
        this.Page=data.page
        this.chosedConversation=data.conversation?data.conversation:null
      
    }
    
   
}