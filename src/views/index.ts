import { Component, Vue } from 'vue-property-decorator'
import home from './home/index.vue'
type switchPage='home'|'reader'|'default'

@Component({
    components:{
        'im-home':home
    }
})
export default class container extends Vue {
    currentPage:switchPage='home'
    created(){
        
    }
    get Page():switchPage{
        return this.currentPage
    }
   
}