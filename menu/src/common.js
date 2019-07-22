let common = {
    api: " https://cnodejs.org/api/v1",
    ajaxGet(api,params) {
        axios.get(api, {  //params参数必写 , 如果没有参数传{}也可以
            params: params
        })
        .then(response=>{
            console.log(response);
            
        })
        .catch(error=>{
            console.log(error);
            alert('网络错误，不能访问');
        });
    }
}

export default common;