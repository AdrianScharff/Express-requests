const express = require('express')
const router = express.Router()

router.get('/api/v1/sum', (req, res) => {
    console.log('sum query', req.query);
    if (req.query.num1 & req.query.num2) {
        res.status(200).json({ result: parseInt(req.query.num1) + parseInt(req.query.num2) })
    } else {
        res.status(400).json({ message: 'you need two numbers to get a result'})
    }
})

module.exports = router