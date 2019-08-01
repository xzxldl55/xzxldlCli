// init command
import { downloadLocal } from './utils/get'
import ora from 'ora' // 视觉美化，用来给出下载模板等提示
import inquirer from 'inquirer' // 实现命令行交互，在用户输入命令后向其提出问题，并做处理
import fs from 'fs'
import chalk from 'chalk' // 也是美化命令行提示的
import symbol from 'log-symbols'

let init = async (templateName, projectName) => {
    // 项目不存在
    if (!fs.existsSync(projectName)) {
        // 命令行交互
        inquirer.prompt([
            {
                name: 'description',
                message: 'Please entry the project description: '
            },
            {
                name: 'author',
                message: 'Please enter the author name: '
            }
        ]).then(async answer => { // answer 返回inquirer中用户的回应
            // 下载模板，选择模板
            // 通过配置文件获取模板信息
            let loading = ora('downloading template ...')
            loading.start()
            downloadLocal(templateName, projectName).then(() => {
                loading.succeed()
                // 读取package.json文件，并写入用户配置信息
                const fileName = `${projectName}/package.json`
                if (fs.existsSync(fileName)) {
                    const data = fs.readFileSync(fileName).toString()
                    let json = JSON.parse(data)
                    json.name = projectName
                    json.author = answer.author
                    json.description = answer.description
                    // 修改package.json
                    fs.writeFileSync(fileName, JSON.stringify(json, null, '\t'), 'utf-8')
                    console.log(symbol.success, chalk.green('Project init finished!'))
                }
            }, () => { // 下载失败
                loading.fail()
            })
        })
    } else {
        // 项目已存在
        console.log(symbol.error, chalk.red('The project already exists'))
    }
}
module.exports = init