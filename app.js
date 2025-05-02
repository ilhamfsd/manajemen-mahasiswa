require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');
const db = require('./config/db');
require('./models')

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/mahasiswa', mahasiswaRoutes);

const PORT = process.env.PORT || 5000;

db.authenticate().then(() => {
        console.log('connected to MySQL')
        app.listen(PORT, () => console.log("server running on port ${PORT}"));
    }).catch(err => console.error("Unable to connect to DB", err));