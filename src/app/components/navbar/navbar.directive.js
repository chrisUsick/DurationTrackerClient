export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    scope: {
        creationDate: '='
    },
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true
  };

  return directive;
}

class NavbarController {
  constructor ( User, $state) {
    'ngInject';
    this.User = User;
    this.$state = $state;
    this.authenticated = User.isAuthenticated();
    // User.getCurrent().$promise.then(() => {
    // });
    let user = User.getCachedCurrent();
    this.email = user && user.email;
  }

  logout() {
    this.User.logout();
    this.email = null;
    this.$state.go('home');
  }
}
