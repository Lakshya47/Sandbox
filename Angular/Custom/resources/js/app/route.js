/*
 * Author: Lakshya Chaudhary 
 */

/*
 * Application routing information.
 * Currently the app has two routes :
 * 1. Listing page -- /books-listing
 * 2. Details page -- /book-detail/<bookid>
 */

app.config(['$routeProvider',function($routeProvider){
	$routeProvider.when('/books-listing',{
		templateUrl : 'resources/templates/pages/bookslisting.html'
	})
	.when('/book-detail/:bookid',{
		templateUrl : 'resources/templates/pages/bookdetail.html'
	})
	.otherwise({redirectTo:'/books-listing'});
}]);