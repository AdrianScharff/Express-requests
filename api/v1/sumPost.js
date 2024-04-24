const express = require('express')
const router = express.Router()

router.post('/api/v1/sumpost', (req, res) => {
    const result = (req.body.num1 + req.body.num2).toString()
    res.status(200).send(result)
})

module.exports = router