# Testing
* Run testing automatically in CI/CD.
* Block merges when tests fail.
* Enforce unit testing coverage with a test coverage tool.
    * Minimum 90% coverage.
    * Block merges when coverage checking fails.
* By default, avoid external network connections.
    * Select integration tests may require external connections for compelling reasons, but should not run by default in CI.
* Only test public interfaces.
    * Corollary: be ruthless in marking methods as private, if they are in fact not intended to be exposed! We don't need to verify _how_ systems under test achieve correct results, only _that_ they do.
* Write integration tests to safeguard promises we have made to end users: this is what we guarantee you can do.

## Why avoid network connections?
Network connections are slow, which markedly increases the feedback loop of a test suite. They are also unreliable. Tests which make external calls can fail due to:
* network outages;
* third-party service outages;
* changes in the shape of third-party responses;
* permissions issues in CI;
* response data which differs from that which the tests were predicated on, causing assertions to fail (or requiring them to be written at a confusing level of generality in order to succeed).

By using known http response data as system inputs, we should have predictable system outputs.

We may want a handful of tests to make live calls, so that we can assert that the shape of the returned data has not changed. This should, however, only be done on purpose.