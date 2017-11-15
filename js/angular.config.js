angular.
    module('almocoAPP').
    config(
    function (
        $locationProvider,
        $routeProvider
    ) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix('!');
        $routeProvider.
            when('/', {
                templateUrl: 'app/todos/todos.html',
                controller: 'todosJsController'
            }).
            when('/maisvotados/', {
                templateUrl: 'app/mais-votados/mais-votados.html',
                controller: 'maisvotadoJsController'
            }).
            when('/menosvotados/', {
                templateUrl: 'app/menos-votados/menos-votados.html',
                controller: 'menosvotadoJsController'
            }).
            otherwise({
                redirectTo: '/'
            });
    }
    );
