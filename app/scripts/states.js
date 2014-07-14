module.exports = function( $locationProvider, $stateProvider ) {
  
    $locationProvider.html5Mode( true );

	$stateProvider
    .state('home', {
        url: "/",
        controller: require('./controllers/HomeCtrl'),
        templateUrl: "/views/home.html"
    })
    .state('search', {
        url: "/search/",
        controller: require('./controllers/SearchCtrl'),
        templateUrl: "/views/search.html"
    })
    .state('playlist', {
        url: "/search/:query",
        controller: require('./controllers/SearchCtrl'),
        templateUrl: "/views/playlist.html"
    })
    .state('secondary', {
        url: "/secondary",
        controller: require('./controllers/PageCtrl'),
        templateUrl: "/views/secondary.html"
    });

};
