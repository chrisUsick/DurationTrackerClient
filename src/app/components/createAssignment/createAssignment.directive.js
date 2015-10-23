export function CreateAssignment() {
  'ngInject';
  let directive =  {
    restrict: 'E',
    templateUrl: 'app/components/createAssignment/createAssignment.html',
    scope: {
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
    this.$log.log(this.name, this.expectedDuration);
    this.saving = true;
    let {name, expectedDuration} = this;
    let newAssignment = this.Assignment.create({name, expectedDuration});
    newAssignment.promise.then((asgn) => {
      this.assigments.push(asgn);
      this.saving = false;
    });
  }
}
