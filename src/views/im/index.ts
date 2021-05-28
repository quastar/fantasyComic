import { Component, Vue } from 'vue-property-decorator'
import {Image,PullRefresh,Icon,Button,Field} from 'vant'
import {Message} from '../../components/class/model/messageModel'
@Component({
    inheritAttrs : false,
    components:{
        'van-Image':Image,
        PullRefresh,
        Vicon:Icon,
        Vbutton:Button,
        Vfield:Field
    }
})
export default class IM extends Vue {
    isFreshing:boolean=false;
    message:string=''
    get person() {
        return {
            id: 'user1',
            name: '强子',
            status: 0
        }
    }

    get chosedConversation(){
        return this.$attrs.chosedConversation
    }
    onRefresh(){
        setTimeout(() => {
            this.isFreshing = false;
        }, 1000);
    }
    changeShow(){
        const data = {
            page: 'home'
        }
        this.$emit('switchPage',data)
    }
    sendMessage(){
        if(!this.message){
            return;
        }

    }
    judgeAvatar(messageBody: Array<Message>): object {
        let talkerAvatar = {
            avatar: '',
            name: ''
        }
        messageBody.map((item: Message) => {
            if (item.talkerId !== this.person.id) {
                talkerAvatar.avatar = item.avatar
                talkerAvatar.name = item.talkerName
                return talkerAvatar;
            }
        })
        return talkerAvatar;
    }
    
}