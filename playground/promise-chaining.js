require('../src/db/mongoose')
const User = require('../src/models/user')

// 5ee7d446cbcbb0ea9f68ceca

// User.findByIdAndUpdate('5ee7c002ab2dc9d3a3cfa080',{age: 1}).then((user)=>{
//     console.log(user)
//     return User.countDocuments({age:1})
// }).then((result)=>{console.log(result)}).catch((e)=>{console.log(e)})

const updateAgeandCount = async (id,age) => {
    const user = await User.findByIdAndUpdate(id,{age : age})
    const count = await User.countDocuments({age})
    return count
}

updateAgeandCount('5ee609ace28b21273187aacd',1).then((r)=>{console.log(r)}).catch((e)=>{console.log(e)})