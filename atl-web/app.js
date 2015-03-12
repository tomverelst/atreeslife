'use strict';

var app = angular.module('atreeslife', [
  'ngRoute',
  'atreeslife.memorium',
  'atreeslife.home'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);