import { Component, Vue } from 'vue-property-decorator'
import { Tabbar, TabbarItem, Search, Image, Badge, Icon, PullRefresh } from 'vant'
import { conversations, Message } from '../../components/class/model/messageModel'
@Component({
    inheritAttrs : false,
    components: {
        Tabbar,
        TabbarItem,
        Search,
        'van-Image': Image,
        Badge,
        VIcon: Icon,
        PullRefresh
    }
})

export default class Home extends Vue {
    
    isFreshing: boolean = false;
    searchKeyWord: string = ''
    active: number = 0;
    icon = {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    }
    messageList = [
        { id: '1', avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg', name: 'aa', message: '55555555555', tag: '2', isGroup: true, talker: '找超强' },
        { id: '2', avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg', name: 'aa', message: '55555555555', tag: '2' },
        { id: '3', avatar: 'https://img01.yzcdn.cn/vant/cat.jpeg', name: 'aa', message: '55555555555', tag: '2' }
    ]
    touch_this: string = '';
    showSetting: boolean = false;
    hideSetting: boolean = false;

    get person() {
        return {
            id: 'user1',
            name: '强子',
            status: 0
        }
    }
    get conversations() {
        return this.$attrs.conversations
    }
    created() {

    }

    check_message_detail(conversation: conversations) {
        // this.touch_this = conversation.conversationId
        const data = {
            conversation,
            page: 'im'
        }
        this.$emit('switchPage', data)
    }
    onRefresh() {
        setTimeout(() => {
            this.isFreshing = false;
        }, 1000);
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