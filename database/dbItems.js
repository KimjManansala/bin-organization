const db = require("../models");

const dbItems = {
    getItems: getItems
}
module.exports = dbItems;



function getItems(bin_id){
    return new Promise((resolve, reject)=>{
        db.item
        .findAll({
            where: {
                bin_id: bin_id
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

