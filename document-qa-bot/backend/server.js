require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('./config/db');
const documentRoutes = require('./routes/documentRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/documents', documentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
