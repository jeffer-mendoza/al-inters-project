define(['angular', 'config/config'],

    function(angular, config) {
        "use strict";
        var MovieTileController = function($scope) {

            $scope.view = {
                images: config.apiImg
            };

            if (!$scope.compact) {

                if ($scope.movie.overview.length > 200) {
                    $scope.movie.overview = $scope.movie.overview.substring(0, 200) + '...';

                }

                if ($scope.movie.title.length > 30) {
                    $scope.movie.title = $scope.movie.title.substring(0, 30) + '...';
                }

            }

        };


        MovieTileController.$inject = ['$scope'];

        return MovieTileController;

    }
);
