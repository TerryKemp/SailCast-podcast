// module.exports = {
//   db: process.env.MONGODB_URI || 'mongodb://localhost/sailcast',
//   port: process.env.PORT || 3000
// }

const mongoose = require('mongoose')
if (process.env.NODE_ENV === 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/whenpresident')
}
