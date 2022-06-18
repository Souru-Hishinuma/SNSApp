const router = require("express").Router();
const User = require('../models/User');

router.get('/', (req, res) =>{
    res.send("user router");
});

module.exports = router;