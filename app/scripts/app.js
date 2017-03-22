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
          .state("shop_hufu",{
            url:"/shop_hufu",
            views: {
              '':{
                templateUrl: "views/shop_hufu.html"
              }
            }
          })
          .state("shop_makeup",{
            url:"/shop_makeup",
            views: {
              '':{
                templateUrl: "views/shop_makeup.html"
              }
            }
          })
          .state("shop_fashion",{
            url:"/shop_fashion",
            views: {
              '':{
                templateUrl: "views/shop_fashion.html"
              }
            }
          })
          .state("shop_accesory",{
            url:"/shop_accesory",
            views: {
              '':{
                templateUrl: "views/shop_accesory.html"
              }
            }
          })
          .state("shop_home",{
            url:"/shop_home",
            views: {
              '':{
                templateUrl: "views/shop_home.html"
              }
            }
          })

  });
