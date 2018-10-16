// const searchList = require("../mock/search.json");

// module.exports = function(){
//     return searchList
// }

const list = require('./search.json')

module.exports = function() {
  return {
    list
  }
}