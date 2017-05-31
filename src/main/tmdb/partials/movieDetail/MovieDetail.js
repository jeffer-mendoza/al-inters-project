define(['angular', 'ngRoute', 'config/config', 'tmdb/services/TMDBAPIService'],

    function (angular, $routeParams, config, TMDBAPIService) {
        "use strict";
        var MovieController = function ($scope, TMDBAPIService, $routeParams) {
            $scope.view = {
                movies: [],
                title: "List Movies",
                images: config.apiImg
            };
            
            var api = TMDBAPIService.Discover();
            api.discover.movies($routeParams.page).then(function (response) {
                console.log(response.data);
                $scope.view.movies = response.data;
            });
        };

        MovieController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];

        return MovieController;

    }
);

