export function runBlock ($log, User, $state, $rootScope) {
  'ngInject';
  let deregister = $rootScope.$on("$stateChangeStart", (event, toState/*, toParams, fromState, fromParams*/) => {
    if (toState.data && toState.data.authenticate && !User.isAuthenticated()) {
      $state.go('login');
      event.preventDefault();
    }
  });
  $rootScope.$on('$destroy', deregister);
  // x.$destroy();
  $log.debug('runBlock end');
}
