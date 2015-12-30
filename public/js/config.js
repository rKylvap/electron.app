angular.
    module('electronAngularDemo').
    config(function($stateProvider, $urlRouterProvider, $locationProvider){

    $urlRouterProvider.otherwise("/");

    $locationProvider.html5Mode({ enabled: true, requireBase: false});

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: '/js/core/coreTmpl.html',
            controller: 'coreCtrl',
            controllerAs: 'ctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: '/js/about/aboutTmpl.html',
            controller: 'aboutCtrl',
            controllerAs: 'ctrl'
        });
});