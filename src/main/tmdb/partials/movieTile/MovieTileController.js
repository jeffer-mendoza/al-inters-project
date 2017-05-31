define(['angular', 'config/config'],

    function (angular, config) {
        "use strict";
        var MovieTileController = function ($scope) {
            $scope.view = {
                images: config.apiImg
            };
        };
        

        MovieTileController.$inject = ['$scope'];

        return MovieTileController;

    }
);
