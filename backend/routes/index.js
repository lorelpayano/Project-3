const router = require('express').Router();
const fileUploader = require('../config/cloudinary-setup')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.post('/toupload', fileUploader.single('upload'), (req, res, next) => {
  console.log('hello',req.file)
  res.json({message: req.file.path});
});

module.exports = router;
