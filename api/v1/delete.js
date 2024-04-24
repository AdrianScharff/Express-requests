const express = require('express')
const router = express.Router()

router.delete('/api/v1/delete/:id', (req, res) => {
    if (req.params.id == 3) {
        res.status(200).json({ message: "The object with ID 3 has been deleted" })
    } else {
        res.status(404).json({ message: "The object with the specified ID has not been found" })
    }
})

module.exports = router