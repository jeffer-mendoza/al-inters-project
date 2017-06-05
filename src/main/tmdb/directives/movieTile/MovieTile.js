/**
 * Provides a popular-movies element
 *
 * @module tmdb.directives.popularMovies
 *
 * @requires angular
 * @requires RemoteImageLoader
 *
 * @param {object} angular - An instance of AngularJS
 * @param {object} RemoteImageLoader - An instance of RemoteImageLoader 
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'tmdb/partials/movieTile/MovieTileController' ], 
    function( angular, MovieTileController ) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: MovieTileController,
                templateUrl: '/tmdb/partials/movieTile/movieTile.html',
                restrict: 'E',
                scope: {
                    movie: '=',
                    size: '=',
                    compact: '='
                }
            };
        };
    }
);