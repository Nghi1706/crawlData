var express = require('express');
var router = express.Router();

router.post('/crawl', function(req, res, next) {
    const data = req.body
    // check link in request
    if ('link' in req.body || req.body.link == '') {
        const link = req.body.link
    } else{
        const messageEror = {
            "message" : "invalid data"
        }
        res.status(400).json(messageEror)
    }
  res.status(200).json(data)
});

module.exports = router;
