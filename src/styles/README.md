# Chatter search styles

> [Subtree][medium-post]  modular approach to share styles in between different chatter-search clients.

## Getting an update from the subtree’s remote

?This should create `/src/styles` subfolder with all shared styles?

- `git fetch chatter-styles`
- `git merge -s subtree --squash chatter-styles/master`
- Or `git merge -X subtree=src/styles --squash chatter-styles/master` if things went [wrong][offical-docs].
- `git commit -m "Updated styles from subtree"`


## Updating a subtree in-place in the container

- `git checkout (-b) chatter-styles (chatter-styles/master)`
- `git cherry-pick -x (whatever)`
- `git cherry-pick -x --strategy=subtree master^`
- `git push`

[offical-docs]: https://www.kernel.org/pub/software/scm/git/docs/howto/using-merge-subtree.html
[medium-post]: https://medium.com/@porteneuve/mastering-git-subtrees-943d29a798ec#.mplu0dq3y
