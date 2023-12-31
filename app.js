const path = require('path')
const express = require('express');

const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const contactRoutes = require('./routes/contact')

app.use(bodyParser.urlencoded({extended:true}))

app.use('/admin',adminRoutes)
app.use(shopRoutes)
app.use(contactRoutes)

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"views",'error.html'))
})

app.listen(3000);