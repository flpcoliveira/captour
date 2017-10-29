angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.objetivos', {
    url: '/objetivos',
    views: {
      'tab2': {
        templateUrl: 'templates/objetivos.html',
        controller: 'objetivosCtrl'
      }
    }
  })

  .state('tabsController.perfil', {
    url: '/perfil',
    views: {
      'tab1': {
        templateUrl: 'templates/perfil.html',
        controller: 'perfilCtrl'
      }
    }
  })

  .state('tabsController.feed', {
    url: '/feed',
    views: {
      'tab4': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/tabs',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('mapsExample', {
    url: '/mapsExemplo',
    templateUrl: 'templates/mapsExample.html',
    controller: 'mapsExampleCtrl'
  })

  .state('tabsController.ranking', {
    url: '/ranking',
    views: {
      'tab3': {
        templateUrl: 'templates/ranking.html',
        controller: 'rankingCtrl'
      }
    }
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('tabsController.capCoin', {
    url: '/capCoin',
    views: {
      'tab1': {
        templateUrl: 'templates/capCoin.html',
        controller: 'capCoinCtrl'
      }
    }
  })

  .state('tabsController.capShop', {
    url: '/capShop',
    views: {
      'tab1': {
        templateUrl: 'templates/capShop.html',
        controller: 'capShopCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')


});