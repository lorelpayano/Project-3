const router = require("express").Router();
const Project = require("../models/Project");
const isAuth = require("./auth.middleware");

router.get("/projects", isAuth, async (req, res, next) => {
  const project = await Project.find({ user: req.user._id });
  res.json({ project });
});

router.get("/projects/:id", async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  res.json({ project });
});

router.post("/projects/new", async (req, res, next) => {
  let project = await Project.create({ ...req.body, user: req.user._id });
  res.json({ project });
});

router.post("/projects/:id/delete", isAuth, async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  console.log(req.params, project.user, req.user._id);
  if (project.user.toString() === req.user._id.toString()) {
    const project = await Project.findByIdAndDelete(req.params.id);
    res.json({ project });
  } else {
    res.json({ message: "You are not authorized to delete this project" });
  }
});

router.post("/projects/:id/edit", isAuth, async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (project.user.toString() === req.user._id.toString()) {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json({ project });
  } else {
    res.json({ message: "You are not authorized to edit this project" });
  }
});

module.exports = router;
