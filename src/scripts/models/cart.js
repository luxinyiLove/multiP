const render = ()=>{
    return $.ajax({
        url:"/api/list",
        success:(data)=>{
            return data;
        }
    })
}

export default {
    render
}