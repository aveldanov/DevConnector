const express = require('express');
const router = express.Router();


// @route GET to api/users/test
// @desc Tests users route
// @access public
router.get('/test', (req, res) => {
  res.json({
    msg: "users works"
  });
});


module.exports = router;