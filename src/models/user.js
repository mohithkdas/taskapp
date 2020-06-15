const mongoose = require('mongoose')


const User = mongoose.model('User', {
    name: { type: String, required: true, trim: true },
    age: { type: Number, validate(value) { if (value < 0) { throw new Error('Age Must be a Posative Number') } },default: 0},
    email: { type: String, required: true, trim: true, lowercase: true },
    password: {type: String, required: true, minlength:7, trim: true, validate(value){if(value.toLowerCase().includes('password')){throw new Error('PasswordCannot be "Password"')}}}
})

module.exports = User