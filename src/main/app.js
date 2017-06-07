/**
 * Creates the application root for an angular application at uri (/)
 *
 * @module app
 *
 * @requires angular
 * @requires config/config
 * @requires ngRoute
 * @requires ngResource
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
define(['angular',
        'config/config',
        'ngRoute', 'ngResource', 'LocalStorageModule',
        'tmdb/services/TMDBAPIService',
        'tmdb/partials/home/HomeController',
        'tmdb/partials/movie/MovieController',
        'tmdb/partials/movieDetail/MovieDetailController',
        'tmdb/directives/popularMovies/PopularMovies',
        'tmdb/directives/movieTile/MovieTile',
        'tmdb/directives/score/Score'
    ],
    function(angular, config, $resource, $location, LocalStorageModule,
        TMDBAPIService, HomeController, MovieController, MovieDetailController,
        PopularMoviesDirective, MovieTileDirective, ScoreDirective) {
        "use strict";

        /** @constructs app */
        var angularModules = config.standardAngularModules.concat('LocalStorageModule');

        /** @constructs app */
        var app = angular.module("app", angularModules);

        //  Configure $locationProvider and $routeProvider to allow top-level navigation within this route
        /**
        app.config(['$locationProvider', function($locationProvider) {

            $locationProvider.html5Mode(false);

        }]);
        **/

        app.config(['$locationProvider', function($locationProvider) {
            $locationProvider.hashPrefix('');
        }]);

        app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
            $sceDelegateProvider.resourceUrlWhitelist([
                // Allow same origin resource loads.
                'self',
                // Allow loading from our assets domain.  Notice the difference between * and **.
                'https://www.youtube.com/**'
            ]);
        }]);


        app.service("TMDBAPIService", TMDBAPIService);
        app.controller("HomeController", HomeController);
        app.controller("MovieController", MovieController);
        app.controller("MovieDetailController", MovieDetailController);

        app.directive("popularMovies", PopularMoviesDirective);
        app.directive("movieTile", MovieTileDirective);
        app.directive("score", ScoreDirective);


        app.config(['$routeProvider', function($routeProvider) {
            $routeProvider.when('/', {
                templateUrl: '/tmdb/partials/home/home.html',
                controller: 'HomeController'
            });
            $routeProvider.when('/movie', {
                templateUrl: '/tmdb/partials/movie/movie.html',
                controller: 'MovieController'
            });
            $routeProvider.when('/movie-detail/:id', {
                templateUrl: '/tmdb/partials/movieDetail/movieDetail.html',
                controller: 'MovieDetailController'
            });
            $routeProvider.otherwise({
                template: function() {
                    throw 'An internal error occurred because the given path does not resolve to a known route.';
                }
            });
        }]);

        return app;
    }
);
