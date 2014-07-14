'use strict';

module.exports = function($scope, searchFactory, CONFIG, $http, $location) {
	
    $scope.pageTitle = 'Search';

    $scope.submitForm = search;
    function search() {

        var query =  $scope.query || $location.path().split('/')[2];
        if ( ! query ) 
            return false;
        
        var client_id = '9f7be0c713b1aeff044fc8ad9acfebcc';
        var url = 'https://api.soundcloud.com/tracks.json?q=' + query + '&client_id=' + client_id;

        searchFactory.get( url, function( data ) {
            $scope.tracks = data;
        });

    }
    search();

    $scope.play = play;
    function play( data ) {

        var self = this;

        $scope.selectedId = 0;
        SC.stream( data.stream_url, function( sound ) {

            $scope.selectedId = data.id;

            var finish = function() {
                if ( typeof soundManager !== 'undefined' ) {
                    soundManager.stopAll();
                }
            };

            finish();

            sound.play({
                onfinish: finish
            });

        });
    }

    $scope.isPlaying = function( id ) {
        return $scope.selectedId === id;
    };

};


// Retorno soundcloud
    //artwork_url: "https://i1.sndcdn.com/artworks-000008483739-3ypys9-large.jpg?e76cf77"
    //attachments_uri: "https://api.soundcloud.com/tracks/17602302/attachments"
    //bpm: 140
    //comment_count: 7279
    //commentable: true
    //created_at: "2011/06/21 23:58:19 +0000"
    //description: "Adventure Club is a Dj/Production Duo from Montreal↵"Crave You" Original song by Flight Facilities ft. Giselle↵www.flightfacilities.com↵info@flightfacilities.com↵↵Dubstep remix by Adventure Club↵↵http://www.facebook.com/AdventureClub↵http://www.Twitter.com/adventuredub↵↵For fans of Dubstep, Electro, Bare Noize, Caspa, Rusko, Datsik, Excision, Bar9, Doctor P, Downlink, Flux Pavilion, Nero, Noisia, Skrillex, Zeds Dead, Funtcase, Feed Me, Skream, Adventure Club Dubstep↵↵Scope a youtube vid here http://www.youtube.com/watch?v=i57q9Dnj5oU&amp;hd=1"
    //download_count: 142123
    //downloadable: false
    //duration: 237125
    //embeddable_by: "all"
    //favoritings_count: 133539
    //genre: "Dubstep Electronic"
    //id: 17602302
    //isrc: ""
    //key_signature: ""
    //kind: "track"
    //label_id: null
    //label_name: ""
    //license: "all-rights-reserved"
    //original_content_size: 9481487
    //original_format: "mp3"
    //permalink: "flight-facilities-crave-you"
    //permalink_url: "http://soundcloud.com/adventureclub/flight-facilities-crave-you"
    //playback_count: 10870858
    //purchase_title: "FREE DOWNLOAD"
    //purchase_url: "https://www.facebook.com/AdventureClub/app_220150904689418"
    //release: ""
    //release_day: null
    //release_month: null
    //release_year: null
    //sharing: "public"
    //state: "finished"
    //stream_url: "https://api.soundcloud.com/tracks/17602302/stream"
    //streamable: true
    //tag_list: "Dubstep Electro Electronic House Techno Bare Noize Caspa Rusko Datsik Excision Bar9 Doctor P Flux Pavilion Nero Noisia Skrillex Zeds Dead Funtcase Adventure Club UKF Montreal Remix Flight Facilities Crave"
    //title: "Flight Facilities - Crave You (Adventure Club Dubstep Remix)"
    //track_type: "remix"
    //uri: "https://api.soundcloud.com/tracks/17602302"
    //user: 
        //avatar_url: "https://i1.sndcdn.com/avatars-000026976476-8n8ihf-large.jpg?e76cf77"
        //id: 2431310
        //kind: "user"
        //permalink: "adventureclub"
        //permalink_url: "http://soundcloud.com/adventureclub"
        //uri: "https://api.soundcloud.com/users/2431310"
        //username: "Adventure Club"
    //user_id: 2431310
    //video_url: null
    //waveform_url: "https://w1.sndcdn.com/IlSuJGLeahvh_m.png"


