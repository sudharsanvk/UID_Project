const mongoose = require('mongoose')
const schema = mongoose.Schema

const busFeeSchema = schema({
    bno:String,
    dname:String,
    dest:String,
    nos:String,
    rno:String,
})

module.exports=mongoose.model('bus',busFeeSchema)