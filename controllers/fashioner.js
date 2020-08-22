const express = require('express')
const router =  express.Router()
const Fashioner = require('../models/fashioner')


//////////////////////////
///////// INDEX /////////

router.get('/fashioner', (req,res) => {
    Fashioner.find({}, (error, allFashioners) => {
        res.render('./fashioner/Index', {
            fashioner: allFashioners
        })
    })
    
})

//////////////////////////
////////// NEW //////////
router.get('/new', (req,res) => {
    res.render('./fashioner/New')
})

//////////////////////////
///////// DELETE /////////
router.delete('/fashioner/:id', (req,res) => {
    Fashioner.findByIdAndRemove(req.params.id, (err, singleFashioner) => {
        res.redirect('/fashioner');
})

//////////////////////////
///////// UPDATE /////////
router.put('/fashioner/:id', (req, res) => {
    Fashioner.findByIdAndUpdate(req.params.id, req.body, (error, updatedFashioner) => {
        res.redirect('/fashioner');
    })
})

//////////////////////////
///////// CREATE /////////
router.post('/fashioner', (req,res) => {
    Fashioner.create(req.body, (error, createdFashioner) => {
        if (error) {
            console.log(error)
        }
        res.redirect('/fashioner')
    })
})

//////////////////////////
///////// EDIT ///////////
router.get('/fashioner/:id/edit', (req,res) => {
    Fashioner.findById(req.params.id, (error, foundFashioner) => {
        res.render('./fashioner/Edit', {
            fashioner: foundFashioner
        })
    })
})

//////////////////////////
////////// SHOW //////////

router.get('/fashioner/:id', (req,res) => {
    Fashioner.findById(req.params.id, (error, foundFashioner) => {
        res.render('./fashioner/Show', {
            fashioner: foundFashioner
        })
    })
})})