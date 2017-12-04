var app = angular.module('kB',['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/categories', {
      templateUrl: 'views/categories.view.html',
      controller: 'CategoriesCtrl'
    }).
    when('/articles', {
      templateUrl: 'views/articles.view.html',
      controller: 'ArticlesCtrl'
    }).
    when('/articles/details/:id', {
      templateUrl: 'views/article_details.view.html',
      controller: 'ArticleDetailsCtrl'
    }).
    when('/articles/category/:category', {
      templateUrl: 'views/cat_articles.view.html',
      controller: 'ArticleCategoryCtrl'
    }).
    when('/article/add', {
      templateUrl: 'views/add_article.view.html',
      controller: 'ArticleCreateCtrl'
    }).
    when('/article/edit/:id', {
      templateUrl: 'views/edit_article.view.html',
      controller: 'CategoriesCtrl'
    }).
    otherwise({redirectTo: '/categories'})
}]);
