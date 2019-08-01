// 配置文件， 对.xzxldlrc文件的增删改查
import { RC, DEFAULTS } from './constants'
import { decode, encode } from 'ini'
import { promisify } from 'util' // 将异步函数转化为Promise对象
import chalk from 'chalk'
import fs from 'fs'

// fs函数Promise化
const exits = promisify(fs.exists)
const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

// RC为配置文件
// DEFAULTS为默认配置
export const get = async key => {
    const exit =await exits(RC) // 同步处理异步函数
    let opts
    if (exit) { // 存在将配置返回
        opts = await readFile(RC, 'utf-8')
        opts = decode(opts)
        return opts[key]
    }
    return {}
}

export const getAll = async () => {
    const exit = await exits(RC);
    let opts;
    if (exit) {
        opts = await readFile(RC, 'utf8');
        opts = decode(opts);
        return opts;
    }
    return DEFAULTS;
}

export const set = async (key, value) => {
    const exit = await exits(RC)
    let opts
    if (exit) {
        opts = await readFile(RC, 'utf-8')
        opts = decode(opts)
        if (!key) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('key is required'))
            return
        }
        if (!value) {
            console.log(chalk.red(chalk.bold('Error:')), chalk.red('value is require'))
            return
        }
    } else {
        opts = Object.assign(DEFAULTS, { [key]: value })
    }
    await writeFile(RC, encode(opts), 'utf-8')
}

export const remove = async key => {
    const exit = await exits(RC)
    let opts
    if (exit) {
        opts = await readFile(RC, 'utf-8')
        opts = decode(opts)
        delete opts[key]
        await writeFile(RC, encode(opts), 'utf-8')
    }
}