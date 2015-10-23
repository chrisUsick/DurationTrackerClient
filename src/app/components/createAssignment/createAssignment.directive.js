export function CreateAssignment() {
  'ngInject';
  let directive =  {
    restrict: 'E',
    templateUrl: 'app/components/createAssignment/createAssignment.html',
    scope: {
      'assignmentCreated': '&'
    },
    controller: CreateAssignmentController,
    controllerAs: 'vm',
    bindToController: true
  }

  return directive;
}

class CreateAssignmentController {

  constructor($log, Assignment) {
    'ngInject';
    this.$log = $log;
    this.Assignment = Assignment;
  }
  create () {
    this.$log.log(this.asgn);
    this.saving = true;
    let newAssignment = this.Assignment.create(this.asgn);
    let self = this;
    newAssignment.$promise.then((asgn) => {
      self.assignmentCreated({asgn:asgn});
      self.saving = false;
    });
  }
}
