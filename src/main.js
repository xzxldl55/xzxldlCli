// 入口文件
import program from 'commander'
import { VERSION } from './utils/constants'
import apply from './index'
import chalk from 'chalk'

/**
 * xzxldl commands
 *  - config
 *  - init
 */

let actionMap = {
    init: {
        description: 'generate a new project from a template',
        usages: [
            'xzxldl init templateName projectName'
        ]
    },
    config: {
        alias: 'cfg',
        description: 'config .xzxldlrc',
        usages: [
            'xzxldl config set <k> <v>',
            'xzxldl config get <k>',
            'xzxldl config remove <k>'
        ]
    },
    // other commands
}

// 添加init/config...命令
Object.keys(actionMap).forEach(action => {
    program.command(action) // 配置命令xzxldl xxx
        .description(actionMap[action].description) // 添加描述
        .alias(actionMap[action].alias) // 添加别名
        .action(() => {
            switch (action) {
                case 'config':
                    apply(action, ...process.argv.slice(3))
                    break
                case 'init':
                    apply(action, ...process.argv.slice(3))
                    break
                default:
                    break
            }
        })
})

// xzxldl help帮助说明
function help () {
    console.log('\r\nUsage:')
    Object.keys(actionMap).forEach(action => {
        actionMap[action].usages.forEach(usage => {
            console.log('   - ' + usage)
        })
    })
    console.log('\r')
}
program.usage('<command> [options]')

// xzxldl -h配置help命令
program.on('-h', help)
program.on('--help', help)
// xzxldl -V 配置version命令 其为package.json中的版本号
program.version(VERSION, '-V --version').parse(process.argv)

// xzxldl不带参数时
if (!process.argv.slice(2).length) {
    program.outputHelp(make_green)
}
function make_green (txt) {
    return chalk.green(txt)
}