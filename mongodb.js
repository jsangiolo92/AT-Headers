const mongoose = require('mongoose');

if(process.env.MLAB_URI) {
  mongoose.connect(process.env.MLAB_URI)
} else {
  mongoose.connect('mongodb://localhost/headers')
}

let imagesSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: String,
  images: Array
})