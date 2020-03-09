var Product = require('./');
// complete the dbhelpers
const mongoose = require("mongoose")
const express = require("express")
mongoose.Promise = global.Promise;

var helpers = {
  getProductsHelper: () => {
    return 'hello from helpers Get'
  },
  postProductsHelper: () => {
    return 'hello from helpers Post'
  },
  updateProductHelper: () => {
    return 'hello from helpers Put'
  },
  deleteProductHelper: () => {
    return 'hello from helpers Delete'
  }
};

module.exports = helpers