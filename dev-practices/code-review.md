# Code review
* All code should be reviewed before merge.
* One developer approval is required for merging.
    * Some code may also require UX review or stakeholder signoff. Use your judgment.
    * When the other ACT dev is sick, on vacation, et cetera, get review from someone in `#labs-tech-sharing`.
* Be responsive to coworkers who need code review: merge requests should be reviewed within one business day.
* The author merges.
    * Enable "merge on approval".
* When should reviews block merge?
    * Yes: when the code is buggy
    * No: when the review comments expand the scope of the PR -- discuss it and make a new ticket instead
    * Seldom: over stylistic differences. Prefer a discussion and new ticket for for work pertaining to organization, style, et cetera, unless the issues are severe. Remember the CI/CD pipeline enforces much of this anyway.
* Look for and point out the code's good features as eagerly as its weaknesses.

## Why code review?
Code review isn't just a box-checking exercise. And it isn't just a way to prevent bugs from getting into production -- although that's important! Code review is also a chance to:
* learn from one another
* make sure the whole team is capable of supporting the whole codebase
* make the code, and the team, resilient around developer absences, changes in project staffing, et cetera.

We are a _happier team_ if people can take vacations confident that others can handle emergency debugging in their absence. We are a happier team if we can assign project work in sprints based on who has capacity, rather than deluging sometime because they're the only one who understands a particular feature (while leaving others with too little to do).