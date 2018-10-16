const render = ()=>{
    return $.ajax({
        // type:"get",
        url:"/api/list",
        // dataType:"json",
        success:(data)=>{
            return data;
        }
    })
}

export default {
    render
}