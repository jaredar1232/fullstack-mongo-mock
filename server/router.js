// Router here
// these routes are correct. there is no need to modify anything!
// cool, thanks
const router = require('express').Router();
const controller = require('./controller.js');

// get all, post one // put at id, delete at id
router
  .route('/products')
  .get(controller.get)
  .post(controller.post)

router
  .route('/products/:_id')
  .put(controller.put)
  .delete(controller.delete)

module.exports = router
