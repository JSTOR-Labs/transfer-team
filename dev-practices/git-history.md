# Git history

* Use clear commit messages describing coherent units of work.
* Make sure tests pass at every commit.
* It's fine (and normal!) if your history is a mess while you develop -- just clean it up before PR.

## Why be careful with git history?
Git history tells the story of how a codebase develops and why. It lets code reviewers, and even future developers, understand that story.

Being careful to make sure tests pass at each commit also enables us to use `git bisect`, to ensure that every commit is deployable for user testing purposes, and probably other good stuff too.