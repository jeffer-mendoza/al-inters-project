/**
 * Abstraction for the tmdb.org API
 *
 * @module tmdb.services.TMDBAPIService
 *
 * @requires angular
 * @requires ngRoute
 * @requires ngResource
 * @requires LocalStorageModule
 * @requires config/config
 *
 * @param angular
 *
 * @author Jefferson Mendoza <jefferson.mendoza@correounivalle.edu.co>
 *
 * @returns TMDB API's
 **/
define(['angular',
        'ngRoute',
        'ngResource',
        'LocalStorageModule',
        'config/config'],
    function (angular) {
        "use strict";
        var TMDBAPIService = function ($rootScope, $http, $timeout, $resource, LocalStorageModule, $location) {
            this.ServiceCache = [];

            this.Discover = function () {

                return this.GetCachedService("discover", function () {
                    var serviceVersion = "3";
                    var serviceBase = this._normalizeEndpoint(serviceVersion);

                    var movieList = function (page) {
                        if (page === undefined) {
                            page = 1;
                        }

                        var uri = serviceBase.url + '/discover/movie?page=' + page + '&api_key=' + serviceBase.apiKey;

                        return $http.get(uri);
                    };

                    return {
                        discover: {
                            movies: movieList
                        }
                    };
                });

            };

            /*this.Latest = function () {

                return this.GetCachedService("latest", function () {
                    var serviceVersion = "3";
                    var serviceBase = this._normalizeEndpoint(serviceVersion);

                    var movieList = function () {

                        var uri = serviceBase.url + '/discover/movie/latest?api_key=' + serviceBase.apiKey;

                        return $http.get(uri);
                    };


                    return {
                        latest: {
                            movies: movieList
                        }
                    };
                });

            };*/

            /* http://docs.themoviedb.apiary.io/reference/movies */
            this.Movie = function () {
                return this.GetCachedService("movie", function () {
                    var serviceVersion = "3";
                    var serviceBase = this._normalizeEndpoint(serviceVersion, "movie");

                    /* http://docs.themoviedb.apiary.io/reference/movies/movieid */
                    var getMovie = function (id) {
                        var uri = serviceBase.url + '/movie/' + id + '?api_key=' + serviceBase.apiKey + '&append_to_response=alternative_titles,credits,releases,videos,similar,reviews,images';
                        return $http.get(uri);
                    };

                    return {
                        movie: {
                            movie: getMovie
                        }
                    };
                });
            };


            this.GetCachedService = function (serviceName, instantiateFunction) {

                if (this.ServiceCache[serviceName] !== undefined) {
                    return this.ServiceCache[serviceName];
                }

                if (instantiateFunction) {
                    var serviceInstance = instantiateFunction.call(this);
                    if (serviceInstance !== undefined) {
                        this.ServiceCache[serviceName] = serviceInstance;
                        return serviceInstance;
                    }
                }

                return undefined;
            };

            /**
             * Define the url for access to service tmdb.org, adding the user apikey
             **/
            this._normalizeEndpoint = function (version) {
                var config = angular.module("config");

                return {
                    'url': config.apiUrl + version,
                    'apiKey': config.apiKey
                };
            };
        };

        TMDBAPIService.$inject = ['$rootScope', '$http', '$timeout', '$resource', '$location'];

        return TMDBAPIService;
    }
);
