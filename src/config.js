// 管理cli配置文件 xzxldl config set registry vuejs-templates更新使用的模板
import { get, set, getAll, remove } from './utils/rc'

let config = async (action, key, value) => {
    switch (action) { // 配置config 各个配置项
        case 'get': 
            if (key) {
                let result = await get(key)
                console.log(result)
            } else {
                let obj = await getAll()
                Object.keys(obj).forEach(key => {
                    console.log(`${key}=${obj[key]}`)
                })
            }
            break
        case 'set':
            set(key, value)
            break
        case 'remove':
            remove(key)
            break
        default:
            break
    }
}
module.exports = config
