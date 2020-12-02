var express = require('express');
var router = express.Router();
var Items = require("../models/Item");


/* GET home page. */
router.get('/', async function(req, res, next) {
   let items = await Items.find();
  // console.log(items);
  res.render("Items/item-list", {items});
});

// Add Item page
router.get('/add', async function(req, res, next) {
  res.render("add-items");
});

// will store the data in database
router.post('/', async function(req, res, next) {
  // console.log(req.body); 
  let items = new Items(req.body);
  await items.save();
  res.redirect("/itemsRoutes");
});

router.get('/delete/:id', async function(req, res, next) {
 let item = await Items.findByIdAndDelete(req.params.id);
 res.redirect("/itemsRoutes");
});

router.get('/edit/:id', async function(req, res, next) {
  let item = await Items.findById(req.params.id);
  res.render("edit-items", {item});
 });


  router.post('/update/:id', async function(req, res, next) {
    let item = await Items.findById(req.params.id);
    item.Name = req.body.Name;
    item.Shape = req.body.Shape;
    item.Rout = req.body.Rout;
    item.Price = req.body.Price;
    await item.save();

    res.redirect("/itemsRoutes");
  });
 

module.exports = router; 
