const mongoose = require('mongoose')
const schema = mongoose.Schema

const studentSchema = schema({
    sname:String,
    dest:String,
    rollNo:String,
    bno:String,
    status: { type: String, default:'no' }
})

module.exports = mongoose.model('students',studentSchema)