import { Component, Vue, Watch } from 'vue-property-decorator'
import { Tabbar, TabbarItem, Search, Image, Badge, Icon, PullRefresh, Uploader, Dialog, Field, Toast } from 'vant'
import handleCreateDirView from '../../components/class/view/handleCreateDirView'
import { directory } from '@/components/class/model/directoryModel';
@Component({
    inheritAttrs: false,
    components: {
        [Dialog.Component.name]: Dialog.Component,
        Tabbar,
        TabbarItem,
        Search,
        'van-Image': Image,
        Badge,
        VIcon: Icon,
        PullRefresh,
        Uploader,
        Field

    }
})

export default class Home extends Vue {
    @Watch('$route',{immediate:true, deep:true})
    onchange(newval,oldval){
       this.getCurrentPage();
    }
    createDirView = new handleCreateDirView()
    isFreshing: boolean = false;
    searchKeyWord: string = ''
    active: number = 0;
    localforage: any = null
    showDialog = false
    dirName = ''
    currDirDeep = 0;
    dirShowOnPage: Array<directory> = []
    queryParam: number = 0;
    showMounts=false
    totalChapters=0;
    icon = {
        active: 'https://img01.yzcdn.cn/vant/user-active.png',
        inactive: 'https://img01.yzcdn.cn/vant/user-inactive.png',
    }
    constructor() {
        super()
    }
    reset(){
        this.showMounts=false;
        this.totalChapters=0
    }
    addDir(): void {
        this.reset()
        if(this.queryParam!==0){
            this.showMounts=true;
        }
        this.showDialog = true;
    }
    async confirmDirName(action: string, done: Function): Promise<void> {
        if (action === 'confirm') {
            if (!this.dirName) {
                if(!this.showMounts){
                    Toast('名称不能为空')
                    done()
                    return
                }
            }
            const dirResult: Array<directory> = await this.createDirView.formDir(this.dirName,this.queryParam,this.totalChapters)
            if (dirResult.length) {
                this.dirShowOnPage = dirResult
                Toast('添加成功')
            } else {
                Toast("文件夹已存在,请重新命名")
            }
        }
        done()
        this.dirName = ''
        this.getCurrentPage()
    }
    async afterRead(file): Promise<void> {
        await this.localforage.setItem('img', file.content)
        const value = await this.localforage.getItem('img')
        console.log(value)
    }

    onRefresh() {
        setTimeout(() => {
            this.isFreshing = false;
        }, 1000);
    }
    async intoDir(dirId: number):Promise<void> {
        this.$router.push({
            path:'/',
            query:{dirId:dirId.toString()}
        })
    }
    async getCurrentPage():Promise<void>{
        this.queryParam=Number(location.href.split("=")[1]?location.href.split("=")[1]:0)
        this.dirShowOnPage = await this.createDirView.dirShowPage(this.queryParam)
    }
    async backDir():Promise<void>{
       this.$router.go(-1)
    }
}