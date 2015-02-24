'use strict';

angular.module('atreeslife.memorium', ['ngRoute', 'ngResource','uiGmapgoogle-maps'])

    .factory("Memorium", function($resource) {
        return $resource(
            "http://localhost:3000/memorium/",
            {'query': { method: 'GET' }}
        );
    })
    .controller("memoriumController",
    ['$scope', 'uiGmapGoogleMapApi', 'Memorium',
        function($scope, GoogleMapApi, Memorium) {
        $scope.map = {
            center: {latitude: 50.7179561, longitude: 4.6557242},
            zoom: 8,
            events: {
                tilesloaded :function (map) {
                    $scope.$apply(function () {
                        $scope.mapInstance = map;
                        Memorium.query().$promise.then(function(data){
                            angular.forEach(data, function(val,key) {
                                var item = val;
                                var location = new google.maps.LatLng(
                                    parseFloat(item.location.latitude),
                                    parseFloat(item.location.longitude));

                                var infowindow = new google.maps.InfoWindow({
                                    content: "<span>"+item.name+"</span>"
                                });

                                var marker = new google.maps.Marker({
                                    //id: item._id,
                                    position: location,
                                    title: item.name
                                });
                                marker.setMap(map);

                                google.maps.event.addListener(marker, 'click', function() {
                                    infowindow.open(map,marker);
                                });
                            });
                        });
                    });
                }
            }
        };
        GoogleMapApi.then(function (maps) {
            console.info("Maps loaded");
        });
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/memorium', {
            templateUrl: 'memorium/memorium.html',
            controller: 'memoriumController'
        });
    }])
    .config(['uiGmapGoogleMapApiProvider', function(GoogleMapApi){
        GoogleMapApi.configure({
            china: false,
            key: 'AIzaSyDhLc1SkPF1mY9SZ7NX3yGeU7GciAyyUUA',
            v: '3.17',
            libraries: 'weather,geometry,visualization'
        });
    }]);

