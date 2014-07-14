'use strict';

module.exports = function() {

    return {
        scope: {
            list: '='
        },
        restrict: 'E',
        controller: require('./controllers/SearchCtrl'),
        templateUrl: './views/playlist.html'
    };
};

