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
        var MovieController = function ($scope, TMDBAPIService) {
            $scope.yearsSelect = [];
            var yearInit = 2018;
            for (var i = 0; i < 119; i++) {
                $scope.yearsSelect[i] = yearInit;
                yearInit--;
            }

            $scope.size = {
                width: "200",
                height: "300"
            };

            $scope.compact = true;

            $scope.viewCompact= function(){
                $scope.compact = true;
            };

            $scope.viewPost = function(){
                $scope.compact = false;
            };

            $scope.view = {
                movies: [],
                year: 2017,
                page: 1,
                genre: 14
            };

            var api = TMDBAPIService.Discover();

            $scope.movieUpdate = function () {
                console.log($scope.view.year);
                api.discover.movies($scope.view.year, $scope.view.genre, $scope.view.page).then(function (response) {
                    $scope.view.movies = response.data;
                    console.log(response.data);
                });
            };

            $scope.movieUpdate();

            var apiGenres = TMDBAPIService.Genres();
            apiGenres.genres.genresList().then(function (response) {
                $scope.genres = response.data.genres;
            });

        };

        MovieController.$inject = ['$scope', 'TMDBAPIService'];

        return MovieController;

    }
);
