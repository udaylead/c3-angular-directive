// app-module
(function(){
    'use strict';
    angular.module('graphApp', [
        'gridshore.c3js.chart',
        //'graphApp.services',
        'ngMaterial',
        'ui.router',
        'gridshore.c3js.dashboard',
        'gridshore.c3js.bar',
        'gridshore.c3js.line'
    ]);
})();

// app-config
(function(){
    'use strict';
    angular.module('graphApp')
        .config(defaultRouteConfig);

    defaultRouteConfig.$inject = ['$urlRouterProvider'];

    function defaultRouteConfig($urlRouterProvider) {
        $urlRouterProvider.otherwise("/dashboard");
    }
})();