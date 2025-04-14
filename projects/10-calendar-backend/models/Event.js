const { Schema, model } = require("mongoose");
const Usuario = require("./Usuario");

const EventSchema = Schema({

    title: {
        type: String,
        required: true,
    },

    notes: {
        type: String,
    },

    start: {
        type: Date,
        required: true,
    },

    end: {
        type: Date,
        required: true,
    },

    user: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

});

EventSchema.method('toJSON' , function() {
    const { _v, _id, ...object } = this.toObject();

    object.id = _id;
    return object
});

module.exports = model( 'Event' , EventSchema );

