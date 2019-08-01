// 定义常量
import { version } from '../../package.json'

// 当前版本号
export const VERSION = version

// 用户根目录
const HOME = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

// 配置文件目录
export const RC = `${HOME}/.xzxldlrc`
// RC 配置下载模板的地方，给 github 的 api 使用
// https://api.github.com/users/xzxldl55/repos
// https://api.github.com/${type}/${registry}/repos
// 模板下载地址可配置
export const DEFAULTS = {
    registry: 'xzxldl',
    type: 'users'
}