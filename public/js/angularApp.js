var petApp = angular.module('petApp', ['ui.router', 'ngAnimate']);

petApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
	$stateProvider
	.state('main', {
		url: '/',
		templateUrl: 'views/main.html'
	})

	.state('dogs', {
		url: '/dogs',
		templateUrl: 'views/list.html',
		controller: 'PetsController'
	})

	.state('dogInfo', {
		url: '/dog/:id',
		templateUrl: 'views/info.html',
		controller: 'InfoController'
	})

	.state('cats', {
		url: '/cats',
		templateUrl: 'views/list.html',
		controller: 'PetsController'
	})

	.state('catInfo', {
		url: '/cat/:id',
		templateUrl: 'views/info.html',
		controller: 'InfoController'
	})

	.state('others', {
		url: '/others',
		templateUrl: 'views/list.html',
		controller: 'PetsController'
	})

	.state('otherInfo', {
		url: '/other/:id',
		templateUrl: 'views/info.html',
		controller: 'InfoController'
	});

	$urlRouterProvider.otherwise('/');
}]);

petApp.controller('PetsController', ['$scope','$http','$state', function($scope,$http,$state){
	$http.get('/api/' + $state.current.name).then(function(pets){
		$scope.pets = pets.data;
		$scope.cat = $state.current.name;
		$scope.url = $state.current.name.substring(0,$state.current.name.length-1);
	});
}]);

petApp.controller('InfoController', ['$scope','$http','$state','$stateParams', function($scope,$http,$state,$stateParams){
	$http.get('/api/' + $state.current.name + '/' + [$stateParams.id]).then(function(pet){
		$scope.pet = pet.data;
		$scope.cat = $state.current.name.substring(0,$state.current.name.length-4) + "s";
	});
}]);