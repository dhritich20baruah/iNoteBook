const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj={
        a: 'thw',
        number: 36
    };
    res.json(obj)
})

module.exports = router