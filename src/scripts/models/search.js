
const list = () => {
    return $.ajax({
      url: '/api/search',
      success: (result) => {
        return result
      }
    })
  }
  

  export default {
    list
    
  }