angular.module("kB")

.controller('ArticlesCtrl', ['$scope','$http', function ($scope,$http) {
  $http.get('/articles').then(successCallback,errorCallback);
  function successCallback(response){
    $scope.articles = response.data;
  }
  function errorCallback(error){
    //error code
  }
}])

.controller('ArticlesCategoryCtrl', ['$scope','$http', '$routeParams', function ($scope,$http,$routeParams) {
  $http.get('/articles/category/'+$routeParams.category).then(successCallback,errorCallback);
  function successCallback(response){
    $scope.cat_articles = response.data;
    $scope.category = $routeParams.category;
  }
  function errorCallback(error){
    //error code
  }
}])

.controller('ArticleDetailsCtrl', ['$scope','$http', '$routeParams', '$location', function ($scope,$http,$routeParams,$location) {
  $http.get('/articles/'+$routeParams.id).then(successCallback,errorCallback);
  function successCallback(response){
    $scope.article = response.data;
  }
  function errorCallback(error){
    //error code
  }

  $scope.removeArticle = function () {
    //make http delete request
    $http.delete('/articles/'+$routeParams.id).then(
      function(response) {
      console.log(response);
      },
      function (response) {
        //failure callback
      }
    );
    $location.path('/articles');
  }
}])

.controller('ArticleCreateCtrl', ['$scope','$http', '$routeParams', '$location', function ($scope,$http,$routeParams,$location) {
  $http.get('/categories').then(successCallback,errorCallback);
  function successCallback(response){
    $scope.categories = response.data;
  }
  function errorCallback(error){
    //error code
  }

  $scope.addArticle = function () {
    var data = {
      title: $scope.title,
      body: $scope.body,
      category: $scope.category
    }

    $http.post('/articles', data).then(
      function(response) {
      console.log(response);
      },
      function (response) {
        //failure callback
      }
    );
    $location.path('/articles');
  }

}])

.controller('ArticleEditCtrl', ['$scope','$http', '$routeParams', '$location', function ($scope,$http,$routeParams,$location) {
  $http.get('/categories').then(successCallback,errorCallback);
  function successCallback(response){
    $scope.categories = response.data;
  }
  function errorCallback(error){
    //error code
  }

  $http.get('/articles/'+$routeParams.id).then(successCallback,errorCallback);
  function successCallback(response){
    $scope.article = response.data;
  }
  function errorCallback(error){
    //error code
  }

  $scope.updateArticle = function () {
    var data = {
      id: $routeParams.id,
      title: $scope.article.title,
      body: $scope.article.body,
      category: $scope.article.category
    }

    //put request for updating
    $http.put('/articles', data).then(
      function(response) {
      console.log(response);
      },
      function (response) {
        //failure callback
      }
    );
    $location.path('/articles');
  }

}]);
