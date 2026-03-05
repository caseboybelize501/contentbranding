const express = require('express');
const router = express.Router();
const { generateBrand, getJobStatus, exportBrand, getBrandHistory } = require('../controllers/brandController');

// Generate brand identity
router.post('/generate', generateBrand);

// Get job status
router.get('/job/:id', getJobStatus);

// Export brand as PDF/markdown
router.post('/export', exportBrand);

// Get brand history
router.get('/history', getBrandHistory);

module.exports = router;