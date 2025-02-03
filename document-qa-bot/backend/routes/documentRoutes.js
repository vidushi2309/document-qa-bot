const express = require('express');
const multer = require('multer');
const { processDocument, askQuestion } = require('../controllers/documentController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('file'), processDocument);
router.post('/ask', askQuestion);

module.exports = router;
