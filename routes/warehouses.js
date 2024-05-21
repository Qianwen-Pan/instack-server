const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send("Hi it's warehouses endpoint");
});

module.exports = router;