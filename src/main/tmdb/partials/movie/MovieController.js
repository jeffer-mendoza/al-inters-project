/**
* MovieController
*
* @module tmdb.partials.movie.MovieController
*
* @requires angular
* @requires config
*
* @param angular
* @param config
*
* @author Jefferson Mendoza <jefferson.mendoza@correounivalle.edu.co>
*
* @returns instance of the MovieController
*
**/

define(['angular', 'config/config'],
  function(angular, config){
    "use strict";

    var MovieController = function($scope){
       $scope.title = 'List Movies';
    };

    MovieController.inject = ['$scope'];

    return MovieController;

  }
);
