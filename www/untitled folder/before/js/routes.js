angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

        .state('dRSPINE', {
        url: '/index',
        templateUrl: 'templates/menu.html',
        controller: 'dRSPINECtrl'
    })

    .state('dRSPINE2', {
        url: '/login',
        views: {
            'menuContent': {
                templateUrl: 'templates/dRSPINE2.html',
                controller: 'dRSPINE2Ctrl'
            }
        }
    })

    .state('dRSPINE3', {
        url: '/Register',
        templateUrl: 'templates/dRSPINE3.html',
        controller: 'dRSPINE3Ctrl'
    })

    .state('profile', {
        url: '/profile',
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
    })

    .state('theSpineClinic', {
        url: '/spineClinic',
        templateUrl: 'templates/theSpineClinic.html',
        controller: 'theSpineClinicCtrl'
    })

    .state('aboutDrSpine', {
        url: '/about',
        templateUrl: 'templates/aboutDrSpine.html',
        controller: 'aboutDrSpineCtrl'
    })

    .state('locateUs', {
        url: '/location',
        templateUrl: 'templates/locateUs.html',
        controller: 'locateUsCtrl'
    })

    .state('help', {
        url: '/help',
        templateUrl: 'templates/help.html',
        controller: 'helpCtrl'
    })

    .state('dRPINE', {
        url: '/home',
        templateUrl: 'templates/dRPINE.html',
        controller: 'dRPINECtrl'
    })

    .state('dRSPINE4', {
        url: '/common',
        templateUrl: 'templates/dRSPINE4.html',
        controller: 'dRSPINE4Ctrl'
    })

    .state('drSpine', {
        url: '/booking',
        templateUrl: 'templates/drSpine.html',
        controller: 'drSpineCtrl'
    })

    $urlRouterProvider.otherwise('/index')



});