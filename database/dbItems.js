const db = require("../models");

const dbItems = {
  getItems: getItems,
  addItems: addItems
};
module.exports = dbItems;

function getItems(bin_id) {
  return new Promise((resolve, reject) => {
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
  });
}

function addItems(bin_id, user_id, name) {
  return new Promise((resolve, reject) => {
    db.item
      .create({
        name: name,
        bin_id: bin_id,
        user_id: user_id
      })
      .then(res => {
        resolve(res)
      })
      .catch(e=>{
          reject(e)
      })
  });
}
