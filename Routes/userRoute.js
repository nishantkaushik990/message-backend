const express = require("express");
const router = express.Router();
const {
    seeMessage,
} = require("../Controller/userController");


router.route("/seeMessage").get(seeMessage);

module.exports = router;