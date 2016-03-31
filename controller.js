var controllers = angular.module('myApp.controllers', []);
controllers.controller('homeController', ['$scope', '$rootScope', '$location', function($scope, $rootScope, $location){
    $rootScope.test = {
        word: ''
    }
    $scope.go = function() {
        $location.path('test/')
    }
}]);

controllers.controller('testController', ['$scope', '$rootScope', function($scope, $rootScope){
    $scope.test = $rootScope.test;
    $scope.array = $scope.test.word.split('');
    $scope.reverseArray = $scope.array.reverse();
    $scope.reversedWord = $scope.reverseArray.join('');
    $scope.reversed = {
        word: $scope.reversedWord
    }
    $scope.one = $scope.test.word.toLowerCase();
    $scope.two = $scope.reversed.word.toLowerCase();
    if ($scope.one === $scope.two) {
        $scope.display = {
            result: 'Palindrome!'
        }
    } else {
        $scope.display = {
            result: 'Not a Palindrome...'
        }
    }
    
}]);