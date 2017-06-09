/**
 * the controller needs to be loaded explicitly with requireJS as the normal application only registers the
 * controllers inside the route definitions, which are not evaluated during testing, so they are not known to angularJS
 */
define(['angular',
        'config/config',
        'tmdb/partials/movieDetail/MovieDetailController'
    ],
    function(angular, config, MovieDetailController) {
        "use strict";
        describe("the moviecontroller", function() {
            var movieDetailcontroller, scope, mockService;

            beforeEach(function() {
                /**
                 * Load the required modules
                 */
                module("config");
                module("ngRoute");

                /**
                 * Injection
                 */
                inject(["$rootScope", "$controller", function($rootScope, $controller) {
                    //instantiate the controller with a newly created scope
                    scope = $rootScope.$new();
                    mockService = {
                        Movie: function() {
                            return {
                                movie: {
                                    movie: function() {
                                        return {
                                            then: function() {
                                                return {};
                                            }
                                        };
                                    }
                                }
                            };
                        }
                    };
                    movieDetailcontroller = $controller(MovieDetailController, {
                        $scope: scope,
                        TMDBAPIService: mockService
                    });
                }]);
            });

            /*
             * Test default initialization variables
             */
            it("should have matching defaults", function() {
                expect(scope.size).toBeDefined();
            });

            /*
             * Test loadData function
             */
            it("should load data the movie info and url", function() {
                //ie = response.data;
                //  $scope.url = config.youtubeUrl + $scope.movie.videos.results[0].key;

                var response = {
                    data: {
                        videos: {
                            results: [{
                                key: 'uyjdhfdouejj'
                            }]
                        }
                    }
                };
                console.log(movieDetailcontroller);
                movieDetailcontroller.internal.loadData(response);
                expect(scope.url).toBeDefined();
                expect(scope.movie).toEqual(response.data);
            });
            
            /*
            
            */
            it("should set the score", function(){
                scope.isScore = false;
                scope.$apply();
                scope.score(true);
                expect(scope.isScore).toBeTruthy();
            })

            /*
             * Test base functionality
             */

        });
    }
);
