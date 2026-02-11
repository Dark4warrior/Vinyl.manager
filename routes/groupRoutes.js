const express = require('express');
const router = express.Router();
const Group = require('../models/Group');
const Vinyl = require('../models/Vinyl');

router.get('/', async (req, res) => {
    try {
        const groups = await Group.find();
        res.json(groups);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.get('/:id/vinyls', async (req, res) => {
    try {
        const vinyls = await Vinyl.find({ group: req.params.id });
        res.json(vinyls);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/', async (req, res) => {
    const group = new Group(req.body);
    try {
        const newGroup = await group.save();
        res.status(201).json(newGroup);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Group.findByIdAndDelete(req.params.id);
        res.json({ message: "Groupe supprimé" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;