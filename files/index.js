const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/test.html') 
})

app.listen(3000, ()=>{
    console.log("server is listening on port 3000")
})

