/**
 * HomeController provides controller support for loading the main page with Search and Popular Movies
 *
 * @module tmdb.partials.home.HomeController
 *
 * @requires angular
 * @requires config
 * @requires TMDBAPIService
 *
 * @author Barry Skidmore <bskidmore@alertlogic.com>
 *
 * @returns instance of the HomeController
 *
 * @copyright Alert Logic, Inc 2014
 *
 */

define( [ 'angular',
          'config/config',
          'tmdb/services/TMDBAPIService'],
    function( angular, config ) {
        "use strict";

        var HomeController = function($scope, TMDBAPIService) {

        };

        HomeController.$inject = [ '$scope', 'TMDBAPIService'];

        return HomeController;
    }
);
