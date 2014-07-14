'use strict';

module.exports = function( $http ) {

    var Search = {};
    Search.get = function( url, callback ) {

        $http.get( url )
            .success(function( data ) {
                callback( data );
            })
            .error(function( err ){
                console.log( err );
            });
    };

    return Search;

};
