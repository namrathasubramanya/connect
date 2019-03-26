const express = require("express");
const router = express.Router();

// @route  /api/users/test
// @desc   Tests user route
// @access PUBLIC
router.get("/test", (req, res) => res.json({ msg: "Users works!" }));

module.exports = router;
