const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hi it's inventories endpoint");
});

module.exports = router;