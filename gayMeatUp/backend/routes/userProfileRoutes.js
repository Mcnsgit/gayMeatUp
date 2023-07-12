const express = require('express');

const router = express.Router();

router.route('/').get(someController.someFunction);

module.exports = router;