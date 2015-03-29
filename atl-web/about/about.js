'use strict';

angular.module('atreeslife.about', ['ngRoute', 'ngResource'])
    .controller("aboutController",
    ['$scope',
        function($scope) {

        }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/about', {
            templateUrl: '/about/about.html',
            controller: 'aboutController'
        });
    }]);

