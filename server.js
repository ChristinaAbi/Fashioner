require('dotenv').config()

/////////////////////////////
/////// DEPENDENCIES ////////
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3000

//////////////////////////////
///////// MIDDLEWARE /////////
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
const mongoURI = process.env.MONGO_URI 
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})

///////////////////////////////
///////// CONTROLLERS /////////

// Default Route
app.get('/', (req,res) => {
    res.redirect('/fashioner')
})

const fashionerController = require('./controllers/fashioner')

app.use('/fashioner', fashionerController)


app.listen(PORT, (req,res) => {
    console.log('Ready for take off')
})