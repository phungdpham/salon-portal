var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Creating customerSchema
var customerSchema = new Schema({
    firstName: {
        type: String,
        unique: false
    },
    lastName: {
        type: String,
        unique: false
    },
    phoneNumber: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    dateSignedUP: {
        type: Date,
        default: Date.now
    },
    appointments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Appointment"
        }
    ]

});

var Customer = mongoose.model("Customer", customerSchema);
module.export = Customer;