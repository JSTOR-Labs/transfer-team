# CI/CD
* Code automatically deploys from gitlab.
    * Merge requests automatically spin up a test site.
    * Production is a one-click deploy from main.
    * We can spin up test sites pinned to a given commit.
    * All deploys run via config-as-code, which is maintained in the same repository.
* The CI pipeline runs checks, which block merge if they fail:
    * Automated testing.
    * Linting (use the Google style guide and a standard tool for your language).
    * Test coverage checking.
    * Performance checking.