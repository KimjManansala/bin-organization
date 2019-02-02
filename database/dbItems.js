const db = require("../models");

const dbItems = {

}
module.exports = dbItems;



function getItems(bin_id){
    return new Prolmise((resolve, reject)=>{
        db.item
        .findAll({
            where: {
                shelve_id: shelveId
              }
        })
        .then(itm => {
            console.log(itm);
            resolve(itm);
          })
          .catch(er => {
            reject(er);
          });
    })
}

