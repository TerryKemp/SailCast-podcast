module.exports = {
  db: process.env.MONGODB_URI || 'mongodb://localhost/sailcast',
  port: process.env.PORT || 3000
}
