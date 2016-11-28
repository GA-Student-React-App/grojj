const apiRouter = require('express').Router();
const { getAllItems,
        addNewItem,
        getStorefrontItems
      } = require('../models/items.js');
const { getAllStorefronts,
        addNewStorefront,
        getOneStorefront,
        editOneStorefront,
<<<<<<< HEAD
        deleteStorefront
=======
        removeOneStorefront
>>>>>>> bd3396612d626b7ef7c8ec1f40411a75f996d1db
      } = require('../models/storefronts.js');

apiRouter.route('/items')
  .get(getAllItems, (req, res) => res.json(res.items))
  .post(getStorefrontItems, (req, res) => res.json(res.storefrontItems))

apiRouter.route('/item')
  .post(addNewItem, (req, res) => res.json({message: 'item successfully added'}));

apiRouter.route('/storefronts')
  .get(getAllStorefronts, (req, res) => res.json(res.storefronts))
  .post(removeOneStorefront, (req, res) => res.json({message: 'storefront successfully removed'}))
  .put(editOneStorefront, (req, res) => res.json({message: 'storefront successfully edited'}));

apiRouter.route('/storefront')
  .post(addNewStorefront, (req, res) => res.json({message: 'storefront successfully added'}))

apiRouter.route('/myStorefront')
  .post(getOneStorefront, (req, res) => res.json(res.storefront));

module.exports = apiRouter;
