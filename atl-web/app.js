'use strict';

var app = angular.module('atreeslife', [
  'ngRoute',
  'ngAnimate',
  'atreeslife.memorium',
  'atreeslife.home',
  'atreeslife.about'
]).config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);