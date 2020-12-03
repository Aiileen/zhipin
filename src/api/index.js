/* 包含n个接口请求的模块 
每个函数都返回promise 对象
*/
import ajax from './ajax'
export const reqRegister = user => ajax('/register',user,'POST')
export const reqLogin = user => ajax('/login',user,'POST')