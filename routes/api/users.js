var express = require('express');
var router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @acces   Puplic
router.get('/test', (req, res) => res.json({msg: 'User Works'}));

module.exports = router;