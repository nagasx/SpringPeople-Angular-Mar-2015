'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'greetController'
  });
}])

.service("greetService", function(){
    this.greet = function(name){
        return "Hi " + name + ", Have a nice day!";
    }
})
.controller('greetController', function($scope, greetService) {
    $scope.firstName = "Magesh";
    $scope.msg = '';
    $scope.greet = function(){
        $scope.msg = greetService.greet($scope.firstName);
    };
});
