var myApp = angular.module('weatherForecast', ['ui.bootstrap'])

.controller('mainController', function($http, $scope) {
//variable declaration
  process = { env: 
    { weatherApiKey: '4047aa7ca0f9aa90fdeedfd96a4e5eaf'} }; //API key
  var cityLondon = parseInt(2643743); //London City Unique ID
  var cityOslo = parseInt(6453366); //Oslo City Unique ID
  var cityMynx = parseInt(625144); //Minsk City Unique ID
  $scope.myArray = []; //To catch received object
  var apiKey = process.env.weatherApiKey; //get api key

  //url of openweathermap to fetch weather details
  var url = 'http://api.openweathermap.org/data/2.5/group?id='+cityOslo+ ',' +cityLondon+ ','+cityMynx+'&appid='+apiKey+'&units=metric';

  //Call rest api every minute
  setInterval(function() {
    $scope.init();
  }, 60000);
  

  //Initialise the webpage
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