/* 使用axios封装ajax请求函数
函数返回值是Promise对象
*/
import axios from 'axios'
export default function ajax(url='',data={}, type='GET'){
    if(type === 'GET'){
        let dataStr = ''
        //{a:1,b:2}  [a,b] a=1&b=2
        Object.keys(data).forEach((key) =>{
            dataStr += key + '=' + data[key] + '&'
            url = url +'?' +dataStr
        })
        return axios.get(url)
    }else{
        return axios.post(url,data)
    }
}