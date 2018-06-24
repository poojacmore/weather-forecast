var myApp = angular.module('weatherForecast', ['ui.bootstrap'])

.controller('mainController', function($http, $scope) {

  process = { env: 
    { weatherApiKey: '4047aa7ca0f9aa90fdeedfd96a4e5eaf'} };
  var cityLondon = parseInt(2643743);
  var cityOslo = parseInt(6453366);
  var cityMynx = parseInt(625144);
  $scope.myArray = [];
  var apiKey = process.env.weatherApiKey;

  var url = 'http://api.openweathermap.org/data/2.5/group?id='+cityOslo+ ',' +cityLondon+ ','+cityMynx+'&appid='+apiKey+'&units=metric';
  setInterval(function() {
    $scope.init();
  }, 60000);
  

  $scope.init = function () {
    $http.get(url).then(function(response) {
      $scope.myArray = [];
      $scope.currentTime = null;
      $scope.currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss");
      console.log('Request successful', $scope.currentTime);
    angular.forEach(response.data.list, function (list) {
      $scope.myArray.push(list);
    })
  }).then(function(text) {
    console.log('Request successful', text);
  }).catch(function(error) {
    console.log('Request failed', error)
  }); 
  }
});