// routes/index.js
const express = require('express');
const { getData,getOverview,getAnomalies } = require('../controllers/ReportController');

const router = express.Router();

router.get('/data-report', getData);
router.get('/overview', getOverview);
router.get('/anomalies', getAnomalies);


module.exports = router;
