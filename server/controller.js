// Controller here
// complete building out the controller
var Product = require('../db/')

const controller = {
  get: (req, res) => {
    res.status(200).send('controller Get is working')
  },
  post: (req, res) => {
    res.status(200).send('controller Post is working')
  },
  put: (req, res) => {
    res.status(200).send('controller Put is working')
  },
  delete: (req, res) => {
    res.status(200).send('controller Delete is working')
  }
}

module.exports = controller