// Controller here
// complete building out the controller
var Product = require('../db/').Product
const models = require("../db/dbhelpers.js")
const colors = require("colors")
const express = require("express")

// console.log('consolelogging models', models)

const controller = {
  get: (req, res) => {
    res.send(models.getProductsHelper())
    // .then((data) => {
    //   res.status(200).send('controller Get is working'.magenta, data)
    // })
    // .catch((err) => {
    //   res.status(500).error("controllers Get is BROKEN", err)
    // })
  },
  post: (req, res) => {
    models.postProductsHelper(req.body)
      .then((data) => {
        res.status(200).send('controller Post is working'.magenta, data)
      })
      .catch((err) => {
        res.status(500).error("controllers Post is BROKEN", err)
      })
  },
  put: (req, res) => {
    models.updateProductHelper(req.params)
      .then((data) => {
        res.status(200).send('controller Put is working'.magenta, data)
      })
      .catch((err) => {
        res.status(500).error("controllers Put is BROKEN", err)
      })
  },
  delete: (req, res) => {
    models.deleteProductHelper(req.params)
      .then((data) => {
        res.status(200).send('controller Delete is working'.magenta, data)
      })
    res.status(500).error("controllers Delete is BROKEN", err)
  }
}

module.exports = controller
