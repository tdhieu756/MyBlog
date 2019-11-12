const express = require('express');
const users = require('./users');

const router = express.Router();

router.get('/hello', (req, res) => {
    res.json('Hello Blog');
})
router.get('/user',(req,res)=>{
    users
    .find()
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
router.get('/user:id',(req,res)=>{
    users
    .find(rep.params.id)
    .then((data)=>{
        res.json(data);
    })
    .catch((err)=>{
        res.send(err);
    })
})
router.post('/add_user', (req, res) => {
    let user = new users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        birthday: Data.parse(req.body.birthday),
        permission: Number(req.body.permission),
        sex: req.body.sex
    })
    user.save((err) => {
        if (err) {
            return res.send(err);
        }
        users
            .find()
            .then((data) => {
                res.send(data)
            })
            .catch((err) => {
                res.send(data)
            })
    })
})


module.exports = router;