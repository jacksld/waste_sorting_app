const mongoose = require('mongoose');

// WasteCategory Schema
const wasteCategorySchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    disposalGuidelines: { type: String, required: true }
});

// Explicit collection name: wasteCategories
const WasteCategory = mongoose.model('WasteCategory', wasteCategorySchema, 'wasteCategories');

// Export the WasteCategories model
module.exports = WasteCategory;
