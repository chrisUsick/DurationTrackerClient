export function CreateSubmission() {
  'ngInject';
  let directive =  {
    restrict: 'E',
    templateUrl: 'app/components/createSubmission/createSubmission.html',
    scope: {
      'submissionCreated': '&',
      'asgnId':'='
    },
    controller: CreateSubmissionController,
    controllerAs: 'c',
    bindToController: true
  }

  return directive;
}

class CreateSubmissionController {
  constructor (Assignment, $stateParams, User) {
    'ngInject';
    this.User = User;
    this.$stateParams = $stateParams;
    this.assignments = Assignment.find();

    // this.sbmn = {userId: User.getCachedCurrent().id};
    this.sbmn = {};
    let self = this;
    this.assignments.$promise.then(() => {
      self.sbmn.assignmentId = self.getAsgnId();
    })
  }
  getAsgnId() {
    const id = parseInt(this.$stateParams.asgnId);
    return (!isNaN(id)) ? id : "";
  }

  create() {
    'ngInject';
    let sbmn = this.User.submissions.create({id:this.User.getCurrentId()},this.sbmn);
    let self = this;
    sbmn.$promise
      .then((submission) => {
        submission.assignment = this.assignments.filter(
          (a) => a.id == submission.assignmentId
        )[0];
        this.submissionCreated({sbmn:submission});
        self.reset();
      })
      .catch(() => {
        this.error = "error creating submission.";
      });
  }
  reset() {
    this.sbmn = {assignmentId:this.getAsgnId()};
  }
}
