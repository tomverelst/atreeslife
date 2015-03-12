'use strict';

angular.module('atreeslife.home', ['ngRoute', 'ngResource'])
    .controller("homeController",
    ['$scope',
        function($scope) {

        }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/home.html',
            controller: 'homeController'
        });
    }])

