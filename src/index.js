var scotchTodo = angular.module('scotchTodo', [])

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

/*let request = require('request');

let apiKey = 'd57340965d97d90d44229540a3c7ad78';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
    //console.log('this is response', response);
  }
});*/

/*.factory('OsloWeatherResource', function ($resource, ENV) {
  var apiKey = process.env.API_KEY;
  //var apiKey = 'd57340965d97d90d44229540a3c7ad78';
  var city = oslo;
  return ('http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}');
});*/

/*.factory('WeatherForecast', function ($resource, ENV) {
  var apiKey = 'd57340965d97d90d44229540a3c7ad78';
  var city;
  var url = 'http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
  return $resource(ENV.apiServer + '/api/missions.json', [function () {
  }],
    {
      queryOslo: {
        method: 'GET',
        url: ENV.apiServer + '/api/missions.json'
      },
      queryLondon: {
        method: 'GET',
        url: ENV.apiServer + '/api/missions.json'
      },
      queryMynx: {
        method: 'GET',
        url: ENV.apiServer + '/api/missions/:id.json'
      }
    });
});*/

/*$scope.formData = {};
    var apiKey = 'd57340965d97d90d44229540a3c7ad78';
    var city = 'portland';
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;


    OsloWeatherResource.get(function (res) {
      $scope.selectedObservation = res;
      console.log('this is sel', $scope.selectedObservation);
      //$scope.$broadcast('popupReady', res.data.observation);
    });*/

    // when landing on the page, get all todos and show them
    /*$http.get(url, function (err, response, body) {
      console.log('I am called!!', url);
      if(err){
        console.log('error:', error);
      } else {
        console.log('body:', body);
        let weather = JSON.parse(body);
        $scope.message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
        console.log($scope.message);
        //console.log('this is response', response);
      }
    });*/