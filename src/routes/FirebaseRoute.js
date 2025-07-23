// FirebaseRoute.js
const express = require('express');
const FirebaseController = require('../controller/FirebaseController');

const router = express.Router();

router.post('/send-notification', async (req, res) => {
    const result = await FirebaseController.sendNotification(req, res);
    return res.send(result);
});

module.exports = router;