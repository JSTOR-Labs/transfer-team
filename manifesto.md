# Manifesto

See also the [Design principles](https://docs.google.com/document/d/1jLnUvXVQa-ecZvYEh9BRxMerUAOZW7xsJKkwm7seYyw/edit) (🔒).

## Use small screens.
* Cypress tests should run with a mobile viewport size.
* Mockups/wireframes should include a mobile option.
    * Don’t write code before that version is available.
* The team should use the site on their phones.
    And, if possible, on slower connections.

## Deliver small code.
* Send precompiled HTML where feasible.
    * Prefer static site generation everywhere possible.
    * Prefer server-side rendering to SPAs.
* Shake trees.
    * Prefer tree-shakeable dependencies.
    * Incorporate tree-shaking into the build process.
* Compress/minify.
* Monitor build size in CI.
    * Pick a page size budget, and block merges above it.

## Instrument performance.
* Include timestamps in all Captain’s Logs to allow for future analyses.
* Integrate with a Skylight-like system early.
* Monitor perf in CI.
    * Pick a perf budget, and block merges above it.

## Make user testing easy.
* CI/CD pipeline should spin up long-running, publicly available apps pinned to specific commits.
