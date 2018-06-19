const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/sailcast'
mongoose.connect(dbURI)

const User = require('../models/user')
const Podcast = require('../models/podcast')

User.collection.drop()
Podcast.collection.drop()

User
  .create([{
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }, {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }])
  .then(users => {
    console.log(`${users.length} were created`)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    mongoose.connection.close()
  })

