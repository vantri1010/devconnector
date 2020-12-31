var express = require('express');
var router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
// @access  Puplic
router.get('/test', (req, res) => res.json({msg: 'Profile Works'}) );

module.exports = router;