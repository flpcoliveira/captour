angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.objetivos', {
    url: '/page2',
    views: {
      'tab2': {
        templateUrl: 'templates/objetivos.html',
        controller: 'objetivosCtrl'
      }
    }
  })

  .state('tabsController.mapa', {
    url: '/page3',
    views: {
      'tab1': {
        templateUrl: 'templates/mapa.html',
        controller: 'mapaCtrl'
      }
    }
  })

  .state('tabsController.feed', {
    url: '/page4',
    views: {
      'tab4': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('mapsExample', {
    url: '/page5',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('tabsController.ranking', {
    url: '/page6',
    views: {
      'tab3': {
        templateUrl: 'templates/ranking.html',
        controller: 'rankingCtrl'
      }
    }
  })

  .state('login', {
    url: '/page8',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/page1/page2')


});