var client = require('../config/elasticSearch');
var commonHelper = {};

commonHelper.searchByTerm = function(req,res){
  console.log('please wait');
    client.search({
        index: 'products',
        body: {
          query: {
            match: {
              name: 'red colour sofa',
            }
          }
        }
      }).then((response)=>{
        console.log(response)
        res.send(response);
      },(error)=>{
        console.log(error)
      })
}

commonHelper.searchByCategory = function(){

}

module.exports = commonHelper;