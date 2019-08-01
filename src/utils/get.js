// 获取模板（使用download-git-repo）
import { getAll } from './rc'
import downloadGit from 'download-git-repo'

export const downloadLocal = async (templateName, projectName) => {
    let config = await getAll()
    let api = `${config.registry}/${templateName}`
    return new Promise((resolve, reject) => {
        // projectName 为下载到本地的目录
        downloadGit(api, projectName, err => {
            if (err)
                reject(err)
            resolve()
        })
    })
}