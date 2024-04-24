const express = require('express')
const router = express.Router()

router.put('/api/v1/body', (req, res) => {
    console.log(req.body);
    res.status(200).send(req.body)
})

module.exports = router