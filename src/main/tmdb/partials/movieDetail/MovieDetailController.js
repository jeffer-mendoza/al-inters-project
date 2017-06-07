define(['angular', 'ngRoute', 'config/config', 'ngSanitize', 'tmdb/services/TMDBAPIService'],

    function(angular, $routeParams, config, $sce, TMDBAPIService) {
        "use strict";
        var MovieDetailController = function($scope, TMDBAPIService, $routeParams, $sce) {
            $scope.size = {
                width: "300",
                height: "400"
            };

            $scope.sizeSimilar = {
                width: "180",
                height: "240"
            };

            var api = TMDBAPIService.Movie();
            api.movie.movie($routeParams.id).then(function(response) {
                console.log(response.data);
                $scope.movie = response.data;
                $scope.url = config.youtubeUrl + $scope.movie.videos.results[0].key;
                //$scope.url = "hola";
                //(config.youtubeUrl + $scope.movie.videos.results[0].key);

            });

            $scope.score = function(val) {
                $scope.isScore = val;
            }




        };

        MovieDetailController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];

        return MovieDetailController;

    }
);
