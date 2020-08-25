const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fashionerSchema = new Schema({
    title: {
        type: String, required: true
    },
    entryNumber: {
        type: String, required: true
    },
    description: {
        type: String, required: true
    },
    readyToPost: {
        type: Boolean, required: true
    }
}, {
    timestamps: true
})

const Fashioner = mongoose.model('Fashioner', fashionerSchema)

module.exports = Fashioner