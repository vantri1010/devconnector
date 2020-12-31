// const express = require('express');
var express = require('express');
var router = express.Router();

//@route
router.get('/test', (req, res) => res.json({msg: 'Posts Works'}));

module.exports = router;