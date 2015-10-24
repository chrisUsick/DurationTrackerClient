export class MainController {
  constructor ($state, Assignment) {
    'ngInject';

    this.$state = $state;
    this.assignments = Assignment.find();
    this.assignments.$promise
      .then((asgns) => {
        asgns.forEach((asgn) => {
          let timeDiff = asgn.averageDuration - asgn.expectedDuration;
          let green = (timeDiff < 0) ? 255 : 0;
          let red = (timeDiff > 0) ? 255 : 0;
          asgn.style = {'background-color':`rgba(${red}, ${green}, 0,${Math.abs(timeDiff/3)})`};
        });
      });
  }

  addAssignment(asgn) {
    this.assignments.push(asgn);
  }
  go(asgnId) {
    this.$state.go('assignment', {id:asgnId});
  }
}
