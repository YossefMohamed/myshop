const express = require("express");
const router = express.Router();
const { authUser } =require('./../controllers/userController')

router.post( "/" , authUser);


module.exports = router;
