const mongoose = require('mongoose')
const Schema = mongoose.Schema

const designerSchema = new Schema({
    title: {
        type: String, required: true
    },
    entryNumber: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    }
}, {
    timestamps: true
})

const Designer = mongoose.model('Designer', designerSchema)

module.exports = Designer