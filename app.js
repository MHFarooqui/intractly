const express = require('express');

const PORT = 3000;

const app = express();

app.get('/',(req,res) => {
    res.json({ok: true})
})

app.post('/createContact',(req,res) => {
    res.json({ok: true})
})

app.post('/getContact',(req,res) => {
    res.json({ok: true})
})

app.post('/updateContact',(req,res) => {
    res.json({ok: true})
})

app.post('/deleteContact',(req,res) => {
    res.json({ok: true})
})


app.listen(PORT , () => console.log("listning to port 3000"));