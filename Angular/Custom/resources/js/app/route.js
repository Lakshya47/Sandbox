app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/home',{
		templateUrl : 'resources/templates/pages/home.html'
	})
	.otherwise({redirectTo:'/home'});
}]);