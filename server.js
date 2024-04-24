// 1. Call express library
const express = require('express')
const sumRoutes = require('./api/v1/sum')
const pokemonRoutes = require('./api/v1/pokemon')
const bodyRoutes = require('./api/v1/body')
const sumPostRoutes = require('./api/v1/sumPost')
const deleteRoutes = require('./api/v1/delete')

// 2. Create an express instance
const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// 3. Define the routes
app.get('/', (req, res) => {
    res.send('Hello world 🪐')
})

app.get('/api', (req, res) => {
    res.status(200).json({ message: 'Hello world' })
})

app.get('/api/v1/user/:name&:lastname', (req, res) => {
    console.log('Params de name:', req.params);
    res.status(200).json({ user: req.params.name, lastname: req.params.lastname })
})

// 5. I can import routes from an external file
app.use(sumRoutes)
app.use(pokemonRoutes)
app.use(bodyRoutes)
app.use(sumPostRoutes)
app.use(deleteRoutes)

// 4. Run the server on a port. For example 3000
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
})