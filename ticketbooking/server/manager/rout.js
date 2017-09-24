let express = require('express');
    router = express.Router();

    booking_service = require('./booking_service');

router.use('/booking_service',booking_service);

module.exports = router;