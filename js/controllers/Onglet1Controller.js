/**
 * Created by Etienne on 20/02/2016.
 */

app.controller('Onglet1Controller', function($scope, $locale, $http) {
    // Ajout d'une vue au compteur de vues
    /*$http({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Lyon'
    }).then(function successCallback(response) {
        console.log(response);
    }, function errorCallback(response) {});*/

    $scope.data = {};

    $scope.data.bonjour = 'Hello';
});