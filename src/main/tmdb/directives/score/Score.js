
define( [ 'angular',
          'tmdb/partials/score/ScoreController' ], 
    function( angular, ScoreController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: ScoreController,
                templateUrl: '/tmdb/partials/score/score.html',
                restrict: 'E',
                scope: {
                    val: '='
                }
            };
        };
    }
);