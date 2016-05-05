// IIFE to avoid polluting global space
(function() {
    
    // strict mode for ECMA5: http://www.w3schools.com/js/js_strict.asp
    'use strict';

    // Create module and needed objects
    angular
        .module('app', ['ngRoute'])
        .config(RoutingConfig)
        .controller('Ctrl1', Ctrl1)
        .controller('Ctrl2', Ctrl2);


    // Specify injections. Not mandatory but it's ok
    RoutingConfig.$inject = ['$routeProvider'];



    // Config function here
    function RoutingConfig($routeProvider) {
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

    }

    
})();