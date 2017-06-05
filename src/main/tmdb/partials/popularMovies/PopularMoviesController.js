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

    function (angular, config, TMDBAPIService) {
        "use strict";
        var PopularMoviesController = function ($scope, TMDBAPIService) {
      
            $scope.compact = true;

            $scope.sendViewCompact = function(isCompact){
                $scope.compact = isCompact;
            };
            
        };

        PopularMoviesController.$inject = ['$scope', 'TMDBAPIService'];

        return PopularMoviesController;

    }
);
