const mongoose = require('mongoose');

// WasteItem Schema
const wasteItemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'WasteCategory', required: true },
    sortingInstructions: { type: String, required: true }
  });
  
// Explicit collection name: wasteItems
const WasteItem = mongoose.model('WasteItem', wasteItemSchema, 'wasteItems');

// Export the WasteItems model
module.exports = WasteItem;
  