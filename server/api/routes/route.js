const user = require('../controllers/userControllers');
const wasteItem = require('../controllers/wasteItemControllers');
const wasteCategory = require('../controllers/wasteCategoryControllers');

module.exports = app => {
	app
		.route('/users')
		.get(user.list_all_users)
		.post(user.create_a_user)
	app
		.route('/users/:userId')
		.get(user.view_a_user)
		.put(user.edit_a_user)
		.delete(user.delete_a_user);
	
	app
		.route('/waste-categories')
		.get(wasteCategory.list_all_categories)
		.post(wasteCategory.create_a_category)
	app
		.route('/waste-categories/:wasteCategoryId')
		.get(wasteCategory.view_a_category)
		.put(wasteCategory.edit_a_category)
		.delete(wasteCategory.delete_a_category);
	
	app
		.route('/waste-items')
		.get(wasteItem.list_all_wasteItems)
		.post(wasteItem.create_a_wasteItem)
	app
		.route('/waste-items/:wasteItemId')
		.get(wasteItem.view_a_wasteItem)
		.put(wasteItem.edit_a_wasteItem)
		.delete(wasteItem.delete_a_wasteItem);
};