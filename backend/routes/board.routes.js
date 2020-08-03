const router = require('express').Router();
const Board = require('../models/ProjectBoard');
const isAuth = require('./auth.middleware')

router.post('/board/new', async (req, res, next) => {
    const board = await Board.create({...req.body, user: req.user._id})
    res.json({board})
})

router.get('/board', isAuth, async (req, res, next ) => {
    const board = await Board.find({user: req.user._id});
    res.json({board})
})

router.get('/board/:id', async (req, res, next) => {
    const board = await Board.findById(req.params.id);
    res.json({board})
})

module.exports = router