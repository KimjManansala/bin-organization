const db = require("../models");

const dbShelve = {
  getShelves: getShelves,
  createShelve: createShelve
};

function getShelves(userId, name) {
  return new Promise((resolve, reject) => {
    db.shelve
      .findOne({
        where: {
          name: name,
          user_id: userId
        }
      })
      .then(itm => {
        resolve(itm);
      })
      .catch(er => {
        reject(er);
      });
  });
}

function createShelve(userId, name) {
  return new Promise((resolve, reject) => {
    db.shelve
      .findOrCreate({
        where: {
          name: name,
          user_id: userId
        },
        defaults: {
          name: name,
          user_id: userId
        },
        include:['user']
      })
      .spread((shelve, created) => {
        const data = {
          shelve: shelve,
          created: created
        };
        resolve(data);
      })
      .catch(er => {
        reject(er);
      });
  });
}

module.exports = dbShelve;
