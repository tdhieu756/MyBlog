const express = require('express');

const router = express.Router();

router.get('/hello', (req, res) => {
    res.json('Hello Blog');
})
// router.get('/signup',(req,res)=>{
//     users
//     .find()
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// })
// router.get('/user:id',(req,res)=>{
//     users
//     .find(rep.params.id)
//     .then((data)=>{
//         res.json(data);
//     })
//     .catch((err)=>{
//         res.send(err);
//     })
// })
// router.get('/signup', (req, res) => {
//     let user = new users({
//         email: "req.body.email",
//         // password: req.body.password,
//         // handle: Number(req.body.handle)
//     })
//     user.save((err,user) => {
//         if (err) {
//             console.error(err);
//             return res.status(500).json({ error: err.code});
//         }
//         else {
//             res.status(201).json({message: `user ${user}`});
//         }
        // users
        //     .find()
        //     .then((data) => {
        //         res.send(data)
        //     })
        //     .catch((err) => {
        //         res.send(data)
        //     })
//     })
// })


module.exports = router;