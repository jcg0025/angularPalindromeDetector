var app = angular.module('myApp', ['myApp.controllers', 'ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: 'view/home.html',
        controller: 'homeController'
    })
    .when('/test', {
        templateUrl: 'view/test.html',
        controller: 'testController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);