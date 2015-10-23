export class LoginController {
  constructor(User, $state) {
    'ngInject';
    this.creds = {};
    this.$state = $state;
    this.User = User;
  }

  login() {
    if (this.creds.email && this.creds.password) {
      let token = this.User.login({include:{user:'submissions'}},this.creds);
      let self = this;
      token.$promise
        .then((/*user*/) => {
          self.$state.go('home');
        })
        .catch((/*err*/)=> {
          self.error = 'login failed. Maybe incorrect credentials.';
        });

    }
  }
}
