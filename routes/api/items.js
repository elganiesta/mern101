const express = require('express');
const router = express.Router();

const Item = require('../../models/Item');

router.get('/', (req, res) => {
    Item.find().sort({
        date: -1
    }).then(items => res.json(items));
});

router.post('/', (req, res) => {
    console.log(req.body);
    const newItem = new Item({
        name: req.body.name
    });
    newItem.save()
        .then(item => res.json(item))
        .catch(error => res.status(400).json(error));
});

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id).then(item => {
        item.delete();
    }).then(() => {
        res.send("Deleted");
    }).catch(error => {
        res.status(400).json(error);
    });
});

module.exports = router;