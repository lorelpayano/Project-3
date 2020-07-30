const router = require('express').Router();
const Items = require('../models/Items')

router.post('/items', async (req, res, next) => {
    let items = await Items.create(req.body)
    res.json({items})
})



module.exports = router