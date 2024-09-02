const mongoose = require('mongoose');
const WasteItem = require('../models/wasteItem');

// WasteItem Controllers
exports.list_all_wasteItems = async (req, res) => {
  try {
    const wasteItems = await WasteItem.find({});
    res.status(200).json(wasteItems);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.create_a_wasteItem = async (req, res) => {
  try {
    const newWasteItem = new WasteItem(req.body);
    const wasteItem = await newWasteItem.save();
    res.status(201).json(wasteItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.view_a_wasteItem = async (req, res) => {
  try {
    const wasteItem = await WasteItem.findById(req.params.wasteItemId); // Check the ID name in routes
    if (!wasteItem) {
      return res.status(404).send('Waste item not found');
    }
    res.status(200).json(wasteItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.edit_a_wasteItem = async (req, res) => {
  try {
    const wasteItem = await WasteItem.findByIdAndUpdate(req.params.wasteItemId, req.body, { new: true, runValidators: true });
    if (!wasteItem) {
      return res.status(404).send('Waste item not found');
    }
    res.status(200).json(wasteItem);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete_a_wasteItem = async (req, res) => {
  try {
    const wasteItem = await WasteItem.findByIdAndDelete(req.params.wasteItemId);
    if (!wasteItem) {
      return res.status(404).send('Waste item not found');
    }
    res.status(200).json({ message: 'Waste item successfully deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
};
