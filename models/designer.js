const mongoose = require('mongoose')
const Schema = mongoose.Schema

const designerSchema = new Schema({
    title: {
        type: String, required: true
    },
    outfitNumber: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    readyToShowOff: {
        type: Boolean, required: true
    }
}, {
    timestamps: true
})

const Designer = mongoose.model('Designer', designerSchema)

module.exports = Designer