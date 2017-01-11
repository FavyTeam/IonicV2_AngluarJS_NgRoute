angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
        .state('lOGIN', {
            url: '/login',
            templateUrl: 'templates/lOGIN.html',
            controller: 'lOGINCtrl'
        })

    .state('rEGISTER', {
        url: '/register',
        templateUrl: 'templates/rEGISTER.html',
        controller: 'rEGISTERCtrl'
    })

    .state('menu.theSpineClinic', {
        url: '/spineClinic',
        views: {
            'side-menu21': {
                templateUrl: 'templates/theSpineClinic.html',
                controller: 'theSpineClinicCtrl'
            }
        }
    })

    .state('menu.aboutDrSpine', {
        url: '/about',
        views: {
            'side-menu21': {
                templateUrl: 'templates/aboutDrSpine.html',
                controller: 'aboutDrSpineCtrl'
            }
        }
    })

    .state('menu.locateUs', {
        url: '/locate',
        views: {
            'side-menu21': {
                templateUrl: 'templates/locateUs.html',
                controller: 'locateUsCtrl'
            }
        }
    })

    .state('menu.help', {
        url: '/help',
        views: {
            'side-menu21': {
                templateUrl: 'templates/help.html',
                controller: 'helpCtrl'
            }
        }
    })

    .state('menu.profile', {
        url: '/profile',
        views: {
            'side-menu21': {
                templateUrl: 'templates/profile.html',
                controller: 'profileCtrl'
            }
        }
    })

    .state('menu', {
        url: '/leftmenu',
        templateUrl: 'templates/menu.html',
        controller: 'menuCtrl'
    })

    .state('dRSPINE', {
        url: '/index',
        templateUrl: 'templates/dRSPINE.html',
        controller: 'dRSPINECtrl'
    })

    .state('menu.dRSPINE2', {
        url: '/Home',
        views: {
            'side-menu21': {
                templateUrl: 'templates/dRSPINE2.html',
                controller: 'dRSPINE2Ctrl'
            }
        }
    })

    .state('healthTips', {
        url: '/health_tip',
        templateUrl: 'templates/healthTips.html',
        controller: 'healthTipsCtrl'
    })

    .state('meetYourDoctors', {
        url: '/meetDoctor',
        templateUrl: 'templates/meetYourDoctors.html',
        controller: 'meetYourDoctorsCtrl'
    })

    .state('askDrSpine', {
        url: '/askDr',
        templateUrl: 'templates/askDrSpine.html',
        controller: 'askDrSpineCtrl'
    })

    .state('newsAndEvents', {
        url: '/newsandevent',
        templateUrl: 'templates/newsAndEvents.html',
        controller: 'newsAndEventsCtrl'
    })

    .state('callDrSpine', {
        url: '/page15',
        templateUrl: 'templates/callDrSpine.html',
        controller: 'callDrSpineCtrl'
    })

    .state('booking', {
        url: '/bookingpage',
        templateUrl: 'templates/booking.html',
        controller: 'bookingCtrl'
    })

    .state('viewAnswers', {
        url: '/page16',
        templateUrl: 'templates/viewAnswers.html',
        controller: 'viewAnswersCtrl'
    })

    .state('answerInfo', {
        url: '/answer_info',
        templateUrl: 'templates/answerInfo.html',
        controller: 'answerInfoCtrl'
    })

    .state('healthTipInformation', {
        url: '/hti_page',
        templateUrl: 'templates/healthTipInformation.html',
        controller: 'healthTipInformationCtrl'
    })


    $urlRouterProvider.otherwise('/index')



});