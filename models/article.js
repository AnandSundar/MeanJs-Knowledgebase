var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
  title: {
    type: String,
    index: true,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: String,
    index: true,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

//module exports allows the Article object creates to be accessed from anywhere
var Article = module.exports = mongoose.model('Article', articleSchema);

//Get all articles
module.exports.getArticles = function(callback){
  Article.find(callback); //mongoose command
}

// Get article by Id
module.exports.getArticleById = function(id,callback) {
  Article.findById(id,callback);
}

//Get category articles
module.exports.getArticlesByCategory = function(category, callback){
  var query = {category: category}
  Article.find(query,callback);
}

//
