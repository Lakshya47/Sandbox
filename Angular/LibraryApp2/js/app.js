var app = angular.module('libraryApp',['ngRoute']);

app.config(['$routeProvider',function(r){
	r.when('/list',{
		templateUrl: 'templates/booklisting.html',
		controller: 'listController'
	}).
	when('details/:bookid',{
		templateUrl:'template/bookdetails.html'
	}).otherwise({redirectTo:'/list'})
}]);