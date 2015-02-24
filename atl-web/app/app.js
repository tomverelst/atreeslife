'use strict';

var app = angular.module('atreeslife', [
  'ngRoute',
  'atreeslife.memorium'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/memorium'});
}]);