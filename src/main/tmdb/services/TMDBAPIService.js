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
      function(angular){
        "use strict";

        var TMDBAPIService = function($rootScope, $http, $timeout, $resource, LocalStorageService, $location){

          this.ServiceCache = [];

          this.Discover = function(){

               return this.GetCachedService("discover", function(){
                 var serviceVersion = "3";
                 var serviceBase = this._normalizeEndPoint(serviceVersion, "discover");

                 var movieList = function(page){
                   if(page === undefined){
                     page = 1;
                   }

                   var uri = serviceBase.url + '/discover/movie?page=' + page + '&api_key='+serviceBase.apiKey;

                   return $http.get(uri);
                 };

                 return {
                   discover:{
                     movies: movieList
                   }
                 };
               });

             };


        this.GetCachedService = function( serviceName, instantiateFunction ) {

               if ( this.ServiceCache[serviceName] !== undefined ) {
                   return this.ServiceCache[serviceName];
               }

               if ( instantiateFunction ) {
                   var serviceInstance = instantiateFunction.call( this );
                   if ( serviceInstance !== undefined ) {
                       this.ServiceCache[serviceName] = serviceInstance;
                       return serviceInstance;
                   }
               }

               return undefined;
           };

           /**
           * Define the url for access to service tmdb.org, adding the user apikey
           **/
           this._normalizeEndpoint = function( version ) {
               var config = angular.module("config");

               return {'url': config.apiUrl + version,
                       'apiKey': config.apiKey};
           };
       };

        TMDBAPIService.$inject = ['$rootScope', '$http', '$timeout', '$resource', 'LocalStorageService', '$location'];

        return TMDBAPIService;
      }
    );
