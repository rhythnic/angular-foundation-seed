angular.module('angularFoundationSeed', [
  'ui.router',
  'mm.foundation',
  'angular-foundation-seed-templates'
])

.config(function ($stateProvider, $urlRouterProvider) {
      'use strict';

      $stateProvider

      .state('frontpage', {
          url: '/',
          templateUrl: 'frontpage/frontpage.html',
          title: 'Slush Angular Foundation App'
      });

      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/');
});