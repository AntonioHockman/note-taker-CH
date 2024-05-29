// look at activity number  22 solution
const path = require('path');
const express = require('express');
const app = express();

//middleware

app.use(express.json())
app.use(express.static('./public'))

app.get('/api/notes', () => {

})

app.post('/api/notes', () => {

})

app.delete('/api/notes/:id',() => {

} )

app.get('/notes',(req,res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'))
} )

app.get('*',(req,res) => {
 res.sendFile(path.join(__dirname, './public/index.html'))
} )
app.listen(3001);