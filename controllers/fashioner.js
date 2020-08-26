const express = require('express')
const router =  express.Router()
const Fashioner = require('../models/fashioner')


//////////////////////////
///////// INDEX /////////

router.get('/', (req,res) => {
    Fashioner.find({}, (error, allFashioners) => {
        res.render('fashioner/Index', {
            fashioners: allFashioners
        })
    })

})

//////////////////////////
////////// NEW //////////
router.get('/new', (req,res) => {
    console.log('fashion')
    res.render('fashioner/New')
})

//////////////////////////
///////// DELETE /////////
router.delete('/:id', (req,res) => {
    Fashioner.findByIdAndRemove(req.params.id, (err, singleFashioner) => {
        res.redirect('/fashioner');
})
})

//////////////////////////
///////// UPDATE /////////
router.put('/:id', (req, res) => {
    req.body.readyToPost = req.body.readyToPost === "on" ? true : false
    Fashioner.findByIdAndUpdate(req.params.id, req.body, {new : true}, (error, updatedFashioner) => {
        res.redirect('/');
    })
})

//////////////////////////
///////// CREATE /////////
router.post('/', (req,res) => {
    if (req.body.readyToPost === 'on') {
        req.body.readyToPost = true
    } else {
        req.body.readyToPost = false
    }
    Fashioner.create(req.body, (error, createdFashioner) => {
        if (error) {
            console.log(error)
        }
        console.log(createdFashioner)
        res.redirect('/fashioner')
    })
})

//////////////////////////
///////// EDIT ///////////
router.get('/:id/edit', (req,res) => {
    Fashioner.findById(req.params.id, (error, foundFashioner) => {
        res.render('fashioner/Edit', {
            fashioner: foundFashioner
        })
    })
})

//////////////////////////
////////// SHOW //////////

router.get('/:id', (req,res) => {
    Fashioner.findById(req.params.id, (error, foundFashioner) => {
        res.render('fashioner/Show', {
            fashioner: foundFashioner
        })
    })
})

module.exports = router
