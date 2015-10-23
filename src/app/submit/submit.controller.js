export class SubmitController {
  constructor($stateParams, User) {
    'ngInject';
    this.$stateParams = $stateParams;
    this.submissions = User.submissions({id:User.getCurrentId(), filter:{include:'assignment'}});
  }

  addSubmission(sbmn) {
    this.submissions.push(sbmn);
  }
}
