

// const searchList = ()=>{
//     return $.ajax({
//         url: '/api/search',
//         success: (result) => {
//           return result
//         }
//       })
// }

// export default{
//     searchList
// }


const list = () => {
    return $.ajax({
      url: '/api/search/list',
      success: (result) => {
        return result
      }
    })
  }
  

  export default {
    list
    
  }