const express = require('express');
const router = express.Router();
const Vinyl = require('../models/Vinyl');
const authorize = require('../middleware/auth');

router.get('/', authorize(['gerant', 'disquaire']), async (req, res) => {
    try {
        let query = {};
        if (req.query.price) query.price = { $lte: req.query.price };
        if (req.query.condition) query.condition = req.query.condition;
        if (req.query.group) query.group = req.query.group;

        const vinyls = await Vinyl.find(query).populate('group');
        res.json(vinyls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const vinyl = await Vinyl.findById(req.params.id).populate('group');
        if (!vinyl) return res.status(404).json({ message: "Vinyle non trouvé" });
        res.json(vinyl);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', authorize(['gerant']), async (req, res) => {
    try {
        const vinyl = new Vinyl(req.body);
        await vinyl.save();
        res.status(201).json(vinyl);
    } catch (err) {
        res.status(400).json({ message: "Erreur de validation : " + err.message });
    }
});

router.patch('/:id', authorize(['gerant', 'disquaire']), async (req, res) => {
    try {
        const vinyl = await Vinyl.findByIdAndUpdate(req.params.id, req.body, { 
            new: true, 
            runValidators: true
        });
        if (!vinyl) return res.status(404).json({ message: "Vinyle non trouvé" });
        res.json(vinyl);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', authorize(['gerant']), async (req, res) => {
    try {
        const vinyl = await Vinyl.findByIdAndDelete(req.params.id);
        if (!vinyl) return res.status(404).json({ message: "Vinyle non trouvé" });
        res.json({ message: "Vinyle supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;