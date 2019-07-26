
import axios from 'axios'
let common = {
    api: " https://cnodejs.org/api/v1",
    ajaxGet(api,params) {
        const abc = axios.get(api, {  //params参数必写 , 如果没有参数传{}也可以
            params: params
        })
        .then(response=>{
            console.log(response);
            return response;
        })
        // .catch(error=>{
        //     console.log(error);
        //     alert('网络错误，不能访问');
        // });
    }

}

//http response 拦截器
axios.interceptors.response.use(
    response => {
      return response;
    },
    error => {
      return Promise.reject(error)
    }
  )


export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }



export default common;