const router = require('express').Router();
const Project = require('../models/Project')
const isAuth = require('./auth.middleware')

router.get('/projects', isAuth, async (req, res, next ) => {
    const project = await Project.find({user: req.user._id});
    res.json({project})
})

router.get('/projects/:id', async (req, res, next) => {
    const project = await Project.findById(req.params.id);
    res.json({project})
})

router.post('/projects/new', async (req, res, next) => {
    let project = await Project.create({...req.body, user: req.user._id})
    res.json({project})
})

router.post('/projects/:id/delete', async (req, res, next) => {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json({project})
})

router.post('/projects/:id/edit', async (req, res, next) => {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.json({project})
})

module.exports = router