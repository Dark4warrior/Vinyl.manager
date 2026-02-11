require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors()); // 

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connecté à MongoDB Atlas"))
    .catch(err => console.error("Erreur de connexion :", err));

const PORT = process.env.PORT || 3000;
const groupRoutes = require('./routes/groupRoutes');
const vinylRoutes = require('./routes/vinylRoutes');

app.use('/groups', groupRoutes);
app.use('/vinyls', vinylRoutes);

app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});