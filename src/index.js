var myApp = angular.module('weatherForecast', ['ui.bootstrap'])

.controller('mainController', function($http, $scope) {


  var apiKey = '4047aa7ca0f9aa90fdeedfd96a4e5eaf';
  var cityLondon = parseInt(2643743);
  var cityOslo = parseInt(6453366);
  var cityMynx = parseInt(625144);
  $scope.myWelcome = [];

  var url = 'http://api.openweathermap.org/data/2.5/group?id='+cityOslo+ ',' +cityLondon+ ','+cityMynx+'&appid='+apiKey+'&units=metric';

  $http.get(url).then(function(response) {
    //$scope.currentTime = moment().format();
    console.log('Request successful', $scope.currentTime);
  angular.forEach(response.data.list, function (list) {
    $scope.myWelcome.push(list);
  })
}).then(function(text) {
  console.log('Request successful', text);
}).catch(function(error) {
  console.log('Request failed', error)
}); 

  window.onload = function() {
    setInterval(function() {
      $http.get(url).then(function(response) {
        $scope.currentTime = moment().format();
        console.log('Request successful', $scope.currentTime);
      angular.forEach(response.data.list, function (list) {
        $scope.myWelcome.push(list);
      })
    }).then(function(text) {
      console.log('Request successful', text);
    }).catch(function(error) {
      console.log('Request failed', error)
    }); 
   }, 60000);
  }
});