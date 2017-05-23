/**
 * Creates the application root for an angular application at uri (/)
 *
 * @module app
 *
 * @requires angular
 * @requires config/config
 * @requires ngRoute
 * @requires LocalStorageModule
 *
 * @param angular RequireJS inclusion of AngularJS library
 * @param config RequireJS inclusion of config/config
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the app
 *
 * @copyright Alert Logic, Inc 2014
 */
define([ 'angular',
         'config/config',
         'ngRoute', 'LocalStorageModule',
         'tmdb/partials/home/HomeController',
         'tmdb/partials/movie/MovieController'
        ],
    function( angular, config, $location, LocalStorageModule, HomeController, MovieController) {
    	"use strict";

        /** @constructs app */
        var angularModules = config.standardAngularModules.concat( 'LocalStorageModule' );

        /** @constructs app */
        var app = angular.module("app", angularModules );

        //  Configure $locationProvider and $routeProvider to allow top-level navigation within this route
    	app.config(['$locationProvider', function($locationProvider) {

            $locationProvider.html5Mode(false);

    	}]);

        app.controller( "HomeController", HomeController);
        app.controller( "MovieController", MovieController);

        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when( '/', { templateUrl: '/tmdb/partials/home/home.html', controller: 'HomeController' } );
            $routeProvider.when('/movie', { templateUrl: '/tmdb/partials/movie/list.html', controller: 'MovieController'})
            $routeProvider.otherwise( {
                template: function() {
                    throw 'An internal error occurred because the given path does not resolve to a known route.';
                }
            });
        }]);

    	return app;
    }
);
