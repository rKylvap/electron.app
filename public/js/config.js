angular.
    module('electronAngularDemo').
    config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: __dirname.concat('/core/coreTmpl.html'),
            controller: 'coreCtrl',
            controllerAs: 'ctrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: __dirname.concat('/about/aboutTmpl.html'),
            controller: 'aboutCtrl',
            controllerAs: 'ctrl'
        });
});