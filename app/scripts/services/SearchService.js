'use strict';

module.exports = function( $http ) {

    this.get = function( url, callback ) {

        $http.get( url )
        .success(function( data ) {
            callback( data );
        })
        .error(function( data, status ){

            console.log( data, status );
        });
    };

};
