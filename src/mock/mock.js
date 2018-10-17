// const searchList = require("../mock/search.json");

// module.exports = function(){
//     return searchList
// }

const search = require('./search.json')
const list = require('./list.json')

module.exports = function() {
  return {
    search,
    list
  }
}