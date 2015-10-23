export class MainController {
  constructor ($state, Assignment) {
    'ngInject';

    this.assignments = Assignment.find();
    this.$state = $state;
  }

  addAssignment(asgn) {
    this.assignments.push(asgn);
  }
  go(asgnId) {
    this.$state.go('assignment', {id:asgnId});
  }
}
