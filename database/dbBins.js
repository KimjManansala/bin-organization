const db = require("../models");

const dbBin = {
  findBin: findBin,
  createBin: createBin,
  findOneBin: findOneBin
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

function createBin(shelve_id, name) {
  return new Promise((resolve, reject) => {
    db.bin
      .findOrCreate({
        where: {
          name: name,
          shelve_id: shelve_id
        },
        defaults: {
          name: name,
          shelve_id: shelve_id
        }
      })
      .spread((bin, created) => {
        const data = {
          bin: bin,
          created: created
        };
        resolve(data);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function findOneBin(shelve_id, name) {
  console.log('Hi!', shelve_id, name)
  for(let i = 0; i < name.length; i ++){
    console.log(name.substring(i, i+1))
  }
  return new Promise((resolve, reject) => {
    db.bin
      .findOne({
        where: {
          name: name,
          shelve_id: shelve_id
        }
      })
      .then(res => {
        resolve(res);
      })
      .catch(er => {
        reject(er);
      });
  });
}
