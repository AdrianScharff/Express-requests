const express = require('express')
const router = express.Router()
const axios = require('axios')

const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

router.get('/api/v1/pokemon/:id', async (req, res) => {
    try {
        if (req.params.id) {
            const response = await axios.get(`${BASE_URL}${req.params.id}`)
            res.status(200).send(response.data)
        }
    } catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router