'use strict';

/**
 * @ngdoc overview
 * @name shoppingMallApp
 * @description
 * # shoppingMallApp
 *
 * Main module of the application.
 */
angular
  .module('shoppingMallApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider,$urlRouterProvider) {
      $urlRouterProvider.when("", "/main");
      $stateProvider
          .state("main", {
              url: "/main",
              views:{
                '':{
                  templateUrl: "views/main.html"
                }
              }
              
          })
          .state("about", {
              url:"/about",
              views:{
                '':{
                  templateUrl: "views/about.html"
                }
              }
          })
          .state("contact", {
              url:"/contact",
              views:{
                '':{
                  templateUrl: "views/contact.html"
                }
              }
          })
          .state("login",{
            url:"/login",
            views:{
              '':{
                templateUrl: "views/login.html",
                controller:"loginController"
              }
            }
          })
          .state("register",{
            url:"/register",
            views: {
              '':{
                templateUrl: "views/register.html",
                controller:"signUpController"
              }
            }
          })
          .state("changePass",{
            url:"/changePass",
            views: {
              '':{
                templateUrl: "views/changePassword.html",
                controller:"changePassController"
              }
            }
          })
  });
