define(['angular', 'ngRoute', 'config/config', 'tmdb/services/TMDBAPIService'],

    function (angular, $routeParams, config, TMDBAPIService) {
        "use strict";
        var MovieController = function ($scope, TMDBAPIService, $routeParams) {
            $scope.size = {
                width: "300",
                height: "400"
            };
            
             var api = TMDBAPIService.Movie();
            api.movie.movie($routeParams.id).then( function ( response ) {
               console.log(response.data);
                $scope.movie = response.data;
            });
            
            $scope.score = function(val){
                $scope.isScore = val;
            }
            
           
        };

        MovieController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];

        return MovieController;

    }
);

