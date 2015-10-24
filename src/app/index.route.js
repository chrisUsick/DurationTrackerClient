export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('base', {
      abstract:true,
      template:'<ui-view/>',
      resolve: {
        loadUser: (User) => User.getCurrent().$promise
      }
    })
    .state('home', {
      url: '/',
      parent:'base',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('assignment', {
      parent:'base',
      url:'/assignment/:id',
      templateUrl: 'app/assignment/assignment.html',
      controller: 'AssignmentController',
      controllerAs:'c',
      params: {
        id: {array:false}
      }
    }).state('submit', {
      parent:'base',
      url:'/submit/?asgnId',
      templateUrl: 'app/submit/submit.html',
      controller: 'SubmitController',
      controllerAs:'c',
      params: {
        asgnId: {array:false}
      },
      data: {
        authenticate:true
      },
      resolve: {
        
      }
    }).state('login', {
      url:'/login',
      templateUrl: 'app/login/login.html',
      controller: 'LoginController',
      controllerAs:'c',
      params: {
      }
    });

  $urlRouterProvider.otherwise('/');
}
