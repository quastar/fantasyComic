import { directory } from '../model/directoryModel'
import localforage from 'localforage'

export default class handleConversationView {
    totalDirName: Array<directory> = []
    public async formDir(dirName: string, parentDirId: number = 0, totalChapters?: number): Promise<Array<directory>> {
        let saveResult: Array<directory> | [] = []
        let dirResult: Array<directory> | null = await localforage.getItem('dir')
        const existDir = dirResult ? dirResult.filter(dir => {
            return dir.name === dirName
        }) : []
        if (existDir.length === 0) {
            const timestamp = new Date().getTime()
            if (dirResult) {
                if (totalChapters) {
                    for (let i = 1; i <= totalChapters; i++) {
                        let eachTimeStamp = new Date().getTime() + i
                        dirResult.push({
                            dirId: eachTimeStamp,
                            parentDirId: parentDirId,
                            name: '第' + i + '话'
                        })
                    }
                } else {
                    dirResult.push({
                        dirId: timestamp,
                        parentDirId: parentDirId,
                        name: dirName
                    })
                }
                saveResult = await localforage.setItem('dir', dirResult)
            } else {
                let dirList: Array<directory> = []
                dirList.push({
                    dirId: timestamp,
                    parentDirId: 0,
                    name: dirName
                })
                saveResult = await localforage.setItem('dir', dirList)
            }
        }
        return saveResult
    }
    public async dirShowPage(dirId: number = 0): Promise<Array<directory>> {
        const dir: Array<directory> | null = await localforage.getItem('dir')
        return dir && dir.length ? dir.filter(d => {
            return d.parentDirId === dirId
        }) : []
    }
}