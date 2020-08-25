const express = require('express')
const router =  express.Router()
const Designer = require('../models/designer')


//////////////////////////
///////// INDEX /////////

router.get('/', (req,res) => {
    Designer.find({}, (error, allDesigners) => {
        res.render('designer/Index', {
            designers: allDesigners
        })
    })
    
})

//////////////////////////
////////// NEW //////////
router.get('/new', (req,res) => {
    res.render('designer/New')
})

//////////////////////////
///////// DELETE /////////
router.delete('/:id', (req,res) => {
    Designer.findByIdAndRemove(req.params.id, (err, singleDesigner) => {
        res.redirect('/designer');
})

//////////////////////////
///////// UPDATE /////////
router.put('/:id', (req, res) => {
    Designer.findByIdAndUpdate(req.params.id, req.body, (error, updatedDesigner) => {
        res.redirect('/designer');
    })
})

//////////////////////////
///////// CREATE /////////
router.post('/', (req,res) => {
    Designer.create(req.body, (error, createdDesigner) => {
        if (error) {
            console.log(error)
        }
        res.redirect('/designer')
    })
})

//////////////////////////
///////// EDIT ///////////
router.get('/:id/edit', (req,res) => {
    Designer.findById(req.params.id, (error, foundDesigner) => {
        res.render('designer/Edit', {
            designer: foundDesigner
        })
    })
})

//////////////////////////
////////// SHOW //////////

router.get('/:id', (req,res) => {
    Designer.findById(req.params.id, (error, foundDesigner) => {
        res.render('designer/Show', {
            designer: foundDesigner
        })
    })
})})

module.exports = router