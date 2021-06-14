const express = require('express');
const router = express.Router();
const User = require('../models/users')

router.get('/', async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)

    } catch (err) {
        res.send('error' + err)
    }
})
router.post('/login', async (req, res) => {
    try {
        const user = await User.findone({ user_id: req.body.username, password: req.body.password })
        if (user) {
            res.json(users)
        }
        else {
            res.send('not find')
        }


    } catch (err) {
        res.send('error' + err)
    }
})
router.post('/', async (req, res) => {
    const alldetail = new User({
        first_name: req.body.fname,
        last_name: req.body.lname,
        address: req.body.addr,
        email_id: req.body.email,
        user_id: req.body.username,
        password: req.body.password
    })
    try {
        const data = await alldetail.save()
        res.json(data)


    } catch (err) {
        console.log('error')
    }

})


module.exports = router