require('../src/db/mongoose')
const Task = require('../src/models/tasks')



Task.findByIdAndDelete('5ee7d97a59b723ef40431e4a').then((task)=>{
    console.log(task)
    return Task.countDocuments({completed: false})
}).then((result)=>{console.log(result)}).catch((e)=>{console.log(e)})

