// 主流程入口文件
let apply = (action, ...args) => {
    require(`./${action}`)(...args)
}
export default apply