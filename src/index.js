var myApp = angular.module('weatherForecast', [])

.controller('mainController', function($http, $scope) {
  console.log('I have been initialised!!!!');
  var apiKey = 'd57340965d97d90d44229540a3c7ad78';
  var cityLondon = parseInt(2643743);
  var cityOslo = parseInt(6453366);
  var cityMynx = parseInt(625144);
  $scope.myWelcome = [];
  console.log('I am found key', apiKey);
  var url = 'http://api.openweathermap.org/data/2.5/group?id='+cityLondon+ ',' +cityOslo+ ','+cityMynx+'&appid='+apiKey+'&units=metric';
  $http.get(url)
    .then(function(response) {
      angular.forEach(response.data.list, function (list) {
        $scope.myWelcome.push(list);
      })
    });

    $scope.getAllTempData = function () {
      var length = $scope.myWelcome.length;
      for (var i = 0; i< length; i++) {
        $scope.m = $scope.myWelcome[i].weather;
        console.log('I am temp', m);
      }
    }
});