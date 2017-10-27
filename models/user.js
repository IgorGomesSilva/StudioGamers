const restful = require('node-restful')
const mongoose = restful.mongoose

const userShema = new mongoose.Schema({
  name: {type: String, required: true},
  senha:{type: String, min:6, max:12, required: true}
})

module.exports = restful.model('User', userSchema)
