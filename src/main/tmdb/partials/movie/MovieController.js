/**
* MovieController
*
* @module tmdb.partials.movie.MovieController
*
* @requires angular
* @requires config
* @requires TMDBAPIService
*
* @param angular
* @param config
* @param TMDBAPIService
*
* @author Jefferson Mendoza <jefferson.mendoza@correounivalle.edu.co>
*
* @returns instance of the MovieController
*
**/

define(['angular', 'config/config', 'tmdb/services/TMDBAPIService'],
  function(angular, config, TMDBAPIService){
    "use strict";

    var MovieController = function($scope, TMDBAPIService){

       $scope.movies = [];

    var api = TMDBAPIService.Discover();
    api.discover.movies().then(function( response){
      //$scope.view.movies = responde.data;
      console.data(response);
    });
  };

    MovieController.$inject = ['$scope', 'TMDBAPIService'];

    return MovieController;

  }
);
