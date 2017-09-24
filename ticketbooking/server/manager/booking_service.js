let express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    require('../schema');

    BOOKING = mongoose.model('BOOK_TICKET_MODEL');

router.get('/getall_ticket', function(req, res)  {
    BOOKING.find({}, function (err, docs){
        if(err){
            console.log(err);
        }
        res.json({"success" : true, allItom : docs});
    });
});

router.post('/book_ticket', function(req, res){
    let booking_req =  req.body

    let booking = new BOOKING(booking_req);
    booking.save(function(err, data) {
        if (err) return console.error(err);
        res.json(data);
    });
});

module.exports = router;