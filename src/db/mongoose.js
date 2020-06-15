const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})




// task.save().then((result)=>{console.log(result)}).catch((error)=>{console.log(error)})

// const User = mongoose.model('User',{
//     name: {type: String},

//     age: {type: Number}
// })

// const me = new User({
//     name: '   Miek  ',
//     email: 'MIek@gmail.com   ',
//     password: 'MohithKDas'
// })

// me.save().then((result) => { console.log(result) }).catch((error) => { console.log(error) })


