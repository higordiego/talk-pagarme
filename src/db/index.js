const mongoose = require('mongoose')

/**
 * @function
 * @param  {String} url - recebe uma string da url do banco de dados para acesar.
 * @return {Promise}
 */
exports.connect = (url) => mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
