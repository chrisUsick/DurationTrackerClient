export class AssignmentController {
  constructor (Assignment, $state, $stateParams) {
    'ngInject';
    this.asgn = Assignment.findById({id:$stateParams.id});

    this.$state = $state;
  }

  go(asgnId) {
    this.$state.go('assignment', {id:asgnId});
  }

}
