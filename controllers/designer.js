const express = require('express')
const router =  express.Router()
const Fashioner = require('../models/designer')


//////////////////////////
///////// INDEX /////////

router.get('/designer', (req,res) => {
    Designer.find({}, (error, allDesigners) => {
        res.render('./designner/Index', {
            designer: allDesigners
        })
    })
    
})

//////////////////////////
////////// NEW //////////
router.get('/new', (req,res) => {
    res.render('./designer/New')
})

//////////////////////////
///////// DELETE /////////
router.delete('/designer/:id', (req,res) => {
    Designer.findByIdAndRemove(req.params.id, (err, singleDesigner) => {
        res.redirect('/designer');
})

//////////////////////////
///////// UPDATE /////////
router.put('/designer/:id', (req, res) => {
    Designer.findByIdAndUpdate(req.params.id, req.body, (error, updatedDesigner) => {
        res.redirect('/designer');
    })
})

//////////////////////////
///////// CREATE /////////
router.post('/designer', (req,res) => {
    Designer.create(req.body, (error, createdDesigner) => {
        if (error) {
            console.log(error)
        }
        res.redirect('/designer')
    })
})

//////////////////////////
///////// EDIT ///////////
router.get('/designer/:id/edit', (req,res) => {
    Designer.findById(req.params.id, (error, foundDesigner) => {
        res.render('./designer/Edit', {
            designer: foundDesigner
        })
    })
})

//////////////////////////
////////// SHOW //////////

router.get('/designer/:id', (req,res) => {
    Designer.findById(req.params.id, (error, foundDesigner) => {
        res.render('./designer/Show', {
            designer: foundDesigner
        })
    })
})})