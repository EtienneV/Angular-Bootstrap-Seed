var app = angular.module('app', ['ngRoute', 'components'])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/onglet1', {
            templateUrl: 'templates/onglet1.html',
            controller: 'Onglet1Controller'
        }).
        when('/onglet2', {
            templateUrl: 'templates/onglet2.html',
            controller: 'Onglet2Controller'
        }).
        when('/onglet3', {
            templateUrl: 'templates/onglet3.html',
            controller: 'Onglet3Controller'
        }).
        otherwise({
            redirectTo: '/onglet1'
        });
    }]);