angular.module("kB")

.controller('CategoriesCtrl', ['$scope','$http', function ($scope,$http) {
  $http.get('/categories').then(successCallback,errorCallback);
  function successCallback(response){
    $scope.categories = response.data;
  }
  function errorCallback(error){
    //error code
  }
}]);
