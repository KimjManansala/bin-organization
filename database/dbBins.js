const db = require("../models");

const dbBin = {
  findBin: findBin
};
module.exports = dbBin;

function findBin(shelveId) {
  return new Promise((resolve, reject) => {
    db.bin
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
  });
}
