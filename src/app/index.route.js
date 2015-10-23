export function routerConfig ($stateProvider, $urlRouterProvider) {
  'ngInject';
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('assignment', {
      url:'/assignment/:id',
      templateUrl: 'app/assignment/assignment.html',
      controller: 'AssignmentController',
      controllerAs:'c',
      params: {
        id: {array:false}
      }
    }).state('submit', {
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
        user: (User) => {
          if (User.isAuthenticated()) {
            return User.getCurrent({include:'submissions'});
          }
        }
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
