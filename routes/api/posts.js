const express = require('express');
const router = express.Router();

// @route GET to api/posts/test
// @desc Tests post route
// @access public
router.get('/test', (req, res) => {
  res.json({
    msg: "Post works"
  });
});




module.exports = router;