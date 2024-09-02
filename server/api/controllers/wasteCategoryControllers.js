const mongoose = require('mongoose');
const WasteCategory = require('../models/wasteCategory');

// WasteCategory Controllers

exports.list_all_categories = async (req, res) => {
    try {
      const categories = await WasteCategory.find({});
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.create_a_category = async (req, res) => {
    try {
      const newCategory = new WasteCategory(req.body);
      const category = await newCategory.save();
      res.status(201).json(category);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.view_a_category = async (req, res) => {
    try {
      const category = await WasteCategory.findById(req.params.wasteCategoryId);
      if (!category) {
        return res.status(404).send('Category not found');
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.edit_a_category = async (req, res) => {
    try {
      const category = await WasteCategory.findByIdAndUpdate(req.params.wasteCategoryId, req.body, { new: true, runValidators: true });
      if (!category) {
        return res.status(404).send('Category not found');
      }
      res.status(200).json(category);
    } catch (err) {
      res.status(500).send(err);
    }
  };
  
  exports.delete_a_category = async (req, res) => {
    try {
      const category = await WasteCategory.findByIdAndDelete(req.params.wasteCategoryId);
      if (!category) {
        return res.status(404).send('Category not found');
      }
      res.status(200).json({ message: 'Category successfully deleted' });
    } catch (err) {
      res.status(500).send(err);
    }
  };