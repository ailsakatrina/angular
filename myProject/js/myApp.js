var myApp = angular.module('myApp',['ui.router']);

myApp.config(function($stateProvider,$urlRouterProvider){
	$urlRouterProvider.when('','/home');
	$urlRouterProvider.when('/home/proPromote','/home/proPromote/panel');
	
	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url:'/home',
			views:{
				'':{
					templateUrl:'views/home.html'
				},
				'nav@home':{
					templateUrl:'views/nav.html'
				},
				'content@home':{
					templateUrl:'views/firstPage.html'
				}
			}
		})

		.state('home.proPromote',{
			url:'/proPromote',
			views:{
				'content@home':{
					templateUrl:'views/proPromote.html'
				}
			}
		})
		
		.state('home.proPromote.panel',{
			url:'/panel',
			templateUrl:'views/panel.html'
		})
		.state('home.proPromote.QRcode',{
			url:'/QRcode',
			templateUrl:'views/QRcode.html'
		})

		.state('home.cusActive',{
			url:'/cusActive',
			views:{
				'content@home':{
					templateUrl:'views/cusActive.html'
				}
			}
		})

		.state('home.test',{
			url:'/test',
			views:{
				'content@home':{
					templateUrl:'views/test.html'
				}
			}
		})
		
});

