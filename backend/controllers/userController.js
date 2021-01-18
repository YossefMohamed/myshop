const handler = require('express-async-handler')

const User = require('../models/userModel')


exports.authUser = handler(async(req,res)=> {
    const { email , password} = req.body
    const user = await User.findOne({email})
    if(user && (await user.matchPassword(password))){
        res.status(200).json({
            user
        })
    }
    res.send({email,password})
})