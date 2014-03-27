var app = angular.module('todoApp',['ngResource','ngRoute','ngAnimate']);

app.config(['$routeProvider',
                    function($routeProvider) {
                      $routeProvider.
                        when('/todo', {templateUrl: 'partials/todo.html',controller: 'listManagerController'}).
                        when('/imageapp', {templateUrl: 'partials/imageapp.html',controller: 'listManagerController'}).
                        otherwise({
                            redirectTo: '/todo'
                            	});
                    }]);