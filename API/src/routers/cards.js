const express = require('express');
const router = new express.Router();
// const auth = require('../middleware/auth')
// const Card = require('../Models/card')
// const BestCard = require('../Models/bestcard');
// const TableInfo = require('../Models/tableInformation');

let CardsController = require("../Controller/CardsController");
CardsController = new CardsController()


  // Get Cards
  router.get('/', CardsController.getCards);
  
  router.get("/compare", CardsController.compareCards)

  router.get("/bestcard", CardsController.getBestcard)

  router.get('/:name', CardsController.getCard);




// })
// // Get BestCard
// router.get('/bestcard' ,async(req, res) => {
//   const bestCard = await BestCard.find();
//   res.status(200).send({
//       bestCard
//   })
// })

// Get Compare Information
// router.get('/cards/compare', async(req, res) => {
//     let ids = req.query.ids;
//     if(!ids) return res.status(404).send({msg:'You have to provide card ids'})
//     ids = JSON.parse(ids)
//     if(!Array.isArray(ids)) return res.status(404).send({msg:'You have to provide an array'})
//     const CompareInfo = await TableInfo.find({});
//     let FilteredCompareInfo = [];
//     ids.forEach(id => {
//      let filteredInfo = CompareInfo.find(info => info.cardId.toString().includes(id));
//      if(!filteredInfo) return FilteredCompareInfo.push(undefined);
//      FilteredCompareInfo.push(filteredInfo);
//     })
//     if(FilteredCompareInfo) {
//       return res.status(200).send({
//         cardsInfo: FilteredCompareInfo,
//       })
//     } else {
//       res.status(404).send({
//         cardsInfo: []
//       })
//     }
//   })

  module.exports = router;