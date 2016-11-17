// Create module and needed objects
angular
    .module('app', ['ngRoute'])
    .config(function ($routeProvider) {
        $routeProvider
        .when('/route1', {
            controller: 'Ctrl1 as vm',
            templateUrl: 'partials/template1.html'
        })

        .when('/route2', {
            controller: 'Ctrl2 as vm',
            templateUrl: 'partials/template2.html'
        })

        .otherwise({
            redirectTo: '/route1'
        });

    });
