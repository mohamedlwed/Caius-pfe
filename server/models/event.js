const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
        unique: true,
    },

    dateEvent: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },
    cat: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    adr: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true,
    },
    users:
        [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
        }]
},
);

module.exports = Event = mongoose.model('event', eventSchema)
