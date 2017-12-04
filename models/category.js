var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  },
  description: {
    type: String
  }
});

//module exports allows the Article object creates to be accessed from anywhere
var Category = module.exports = mongoose.model('Category', categorySchema);

//Get all articles
module.exports.getCategories = function(callback){
  Category.find(callback); //mongoose command
}

// Get article by Id
module.exports.getCategoryById = function(id,callback) {
  Category.findById(id,callback);
}

//Get category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category: category}
  Category.find(query,callback);
}

// Create category
module.exports.createCategory = function(newCategory,callback) {
  newCategory.save(callback);
}
