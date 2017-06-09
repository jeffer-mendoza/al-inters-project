define(['angular', 'ngRoute', 'config/config', 'tmdb/services/TMDBAPIService'],

    function(angular, $routeParams, config, TMDBAPIService) {
        "use strict";
        var MovieDetailController = function($scope, TMDBAPIService, $routeParams) {

            var self = this;
            $scope.size = {
                width: "300",
                height: "400"
            };

            $scope.sizeSimilar = {
                width: "180",
                height: "240"
            };


            var internal = self.internal = {
                loadData: function(response) {
                    $scope.movie = response.data;
                    $scope.url = config.youtubeUrl + $scope.movie.videos.results[0].key;
                }
            };
            
            var api = TMDBAPIService.Movie();
            api.movie.movie($routeParams.id).then(function(response) {
                  internal.loadData(response);
            });

            $scope.score = function(val) {
                $scope.isScore = val;
            }




        };

        MovieDetailController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];

        return MovieDetailController;

    }
);
