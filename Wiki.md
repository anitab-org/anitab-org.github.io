## Fork

_**Note**: This is only needed if you want to contribute to the project._

If you want to contribute to the project you will have to create your own copy of the project on GitHub. You can do this by clicking the
**Fork** button that can be found on the top right corner of the [landing page]([https://github.com/anitab-org/anitab-org.github.io]) of the repository.

## [](https://github.com/anitab-org/anitab-org.github.io/wiki/Fork,-Clone-&-Remote#clone)Clone

_**Note**: For this you need to install [git](https://git-scm.com/) on your machine. You can download the git tool from [here](https://git-scm.com/downloads)._

- If you have forked the project, run the following command -

`git clone https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io`

where `YOUR_GITHUB_USER_NAME` is your GitHub handle.

- If you haven't forked the project, run the following command -

`git clone https://github.com/anitab-org/anitab-org.github.io`

## [](https://github.com/anitab-org/anitab-org.github.io/wiki/Fork,-Clone-&-Remote#remote)Remote

_**Note**: This is only needed if you want to contribute to the project._

When a repository is cloned, it has a default remote named `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -

`git remote add upstream https://github.com/anitab-org/anitab-org.github.io`

You can check that the previous command worked by running `git remote -v`. You should see the following output:

```
$ git remote -v
origin  https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io (fetch)
origin  https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io (push)
upstream https://github.com/anitab-org/anitab-org.github.io.git (fetch)
upstream https://github.com/anitab-org/anitab-org.github.io.git (push)
```

## Install

1.  Latest stable version of NodeJs [here](https://nodejs.org/en/download/).
2.  Install [yarn](<[https://classic.yarnpkg.com/en/docs/install#windows-stable](https://classic.yarnpkg.com/en/docs/install#windows-stable)>).
3.  Run `node -v` and `yarn -v`. If you get the version number, then the installation was successful.

To get the frontend running locally:

- Clone this repository
- `yarn` to install all required dependencies
- `yarn start` or `npm start` to start the local server
