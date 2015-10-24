export class AssignmentController {
  constructor (Assignment, $state, $stateParams) {
    'ngInject';
    this.asgn = Assignment.findById({id:$stateParams.id});
    this.$state = $state;
    var self = this;
    this.asgn.$promise
      .then(() => {
        self.timeDiff =  self.asgn.averageDuration - self.asgn.expectedDuration;
        self.timeDiffAbs = Math.abs(self.timeDiff);
      });
  }

  go(asgnId) {
    this.$state.go('assignment', {id:asgnId});
  }

}
