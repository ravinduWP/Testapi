const express = require('express');
const app = express()
const port = 8000

app.get('/', (req, res) => {
    res.send('hello world')
})

app.get('/api', (req, res) => {
    res.json({
        code: 0,
        message: 'api is running..'
    })

})
app.listen(port, (err) => {
    if (err) console.log(err.message)
    console.log(`server running on port ${port}`)
})