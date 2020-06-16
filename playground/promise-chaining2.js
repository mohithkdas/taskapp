require('../src/db/mongoose')
const Task = require('../src/models/tasks')



// Task.findByIdAndDelete('5ee7d97a59b723ef40431e4a').then((task)=>{
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result)=>{console.log(result)}).catch((e)=>{console.log(e)})

const deleteTaskandCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({compeleted : false})
    return count
}

deleteTaskandCount('5ee7d99259b723ef40431e4b').then((r)=>{console.log(r)}).catch((e)=>{console.log(e)})