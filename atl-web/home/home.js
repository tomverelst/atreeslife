'use strict';

angular.module('atreeslife.home', ['ngRoute', 'ngResource'])
    .controller("homeController",
    ['$scope',
        function($scope) {

        }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: '/home/home.html',
            controller: 'homeController'
        });
    }])

