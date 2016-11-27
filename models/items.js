const db = require('../lib/db');

function getAllItems(req, res, next) {
  db.many('SELECT * FROM grojjItems')
    .then((items) => {
      res.items = items;
      next();
    })
  .catch((error) => console.log(error));
};

function addNewItem(req, res, next) {
  db.none('INSERT INTO grojjItems (name, image_url, condition, price, description, likes, currentUser, currentStorefront) VALUES ($/name/, $/image_url/, $/condition/, $/price/, $/description/, $/likes/, $/currentUser/, $/currentStorefront/);', req.body)
    .then(() => {
      next()
  })
  .catch((error) => console.log(error));
};

module.exports = {
  getAllItems,
  addNewItem,
};
