require('angular');
var uiRouter = require('ui-router');

var app = angular.module('myApp', [uiRouter]);

app
	.config(require('./states'))
	.constant('CONFIG', require('./config'))
	.service('ExampleService', require('./services/ExampleService'))
	.factory('searchFactory', require('./factory/SearchFactory'))
	.directive('playlist', require('./directives/PlaylistDirective'))
	.directive('sampleComponent', require('./directives/SampleDirective'))

var client_id = '9f7be0c713b1aeff044fc8ad9acfebcc';
SC.initialize({
    client_id: client_id
});

