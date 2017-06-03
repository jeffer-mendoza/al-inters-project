define(['angular', 'config/config'],

    function (angular, config) {
        "use strict";
        var ScoreController = function ($scope) {
            $scope.porcent = $scope.val * 100 / 10;
            
            $scope.color = "#64b5f6";
            
            if($scope.porcent <= 33){
                $scope.color = "#ef5350";
            }else{
                if($scope.porcent > 33 && $scope.porcent < 66){
                    $scope.color = "#fff176"
                }
            }
            
                
        };
        

        ScoreController.$inject = ['$scope'];

        return ScoreController;

    }
);
