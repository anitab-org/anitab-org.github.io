# anitab-org.github.io

This is the main website for **AnitaB.org Open Source**. It contains information about our various open source projects, the programs we participate in, information about how to contribute, and how to contact us.This website acts as an interface to help introduce people to the organization's Open Source community, and make the transition from newcomers to contributors easier.

## Setup and run

To setup the project locally follow the instructions:

#### Fork

_**Note**_: *This is only needed if you want to contribute to the project.*

If you want to contribute to the project you will have to create your own copy of the project on GitHub. You can do this by clicking the Fork button that can be found on the top right corner of the [landing page](https://github.com/anitab-org/anitab-org.github.io) of the repository.

#### Clone

_**Note**_: *For this you need to install git on your machine. You can download the git tool from [here](https://git-scm.com/downloads).*

 * If you have forked the project, run the following command -
   
   `git clone https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io`

   where `YOUR_GITHUB_USER_NAME` is your GitHub handle.

 * If you haven't forked the project, run the following command -

   `git clone https://github.com/anitab-org/anitab-org.github.io`
   
 * Now after you cloned the repository, get into the anitab-org.github.io directory by -

   `cd anitab-org.github.io`

#### Remote

_**Note**_: *This is only needed if you want to contribute to the project.*

When a repository is cloned, it has a default remote named `origin` that points to your fork on GitHub, not the original repository it was forked from. To keep track of the original repository, you should add another remote named upstream. For this project it can be done by running the following command -

`git remote add upstream https://github.com/anitab-org/anitab-org.github.io`

You can check that the previous command worked by running `git remote -v`. You should see the following output:

```
$ git remote -v
origin  https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io (fetch)
origin  https://github.com/YOUR_GITHUB_USER_NAME/anitab-org.github.io (push)
upstream        https://github.com/anitab-org/anitab-org.github.io.git (fetch)
upstream        https://github.com/anitab-org/anitab-org.github.io.git (push)
```


### Run app

Download the latest stable version of NodeJs [here](https://nodejs.org/en/download/) and install it. Install `yarn`. Run `node --version` and `yarn --version` to verify successful installation.

To get the frontend running locally:

 * Clone this repository
 * `yarn` to install all required dependencies
 * `yarn start` to start the local server
 
 
 ## Prerequisites
 
 **Javascript** - We are using technologies such as javascript , HTML , CSS for our website AnitaB.org Open Source.
 
 **React-Native** - As our Whole content is written in react native so we can easly transform this into native apps in future.


## Contributing

**This project is under active development**

Please read our [Contributing Guidelines](docs/CONTRIBUTING.md), [Code of Conduct](docs/code_of_conduct.md) and [Reporting Guidelines](docs/reporting_guidelines.md) thoroughly.

## Branches

- **master**: These branches contain the deployment of the website.
- **develop**: This contains the latest code. All the contributing PRs must be sent to this branch.
- **production**: Merge develop into production triggers deployment of the website.

## Contact

If you have any questions or want to discuss something about this repo, feel free to reach out to our team on our Zulip channel [#Design-team](https://anitab-org.zulipchat.com/#narrow/stream/216323-design). If you are a new contributor, head over to this project's stream [#anitab-org.github.io](https://anitab-org.zulipchat.com/#narrow/stream/235478-anitab-org.2Egithub.2Eio) on Zulip to see ongoing discussions.

## License

The project is licensed under the GNU General Public License v3.0. Learn more about it in the [LICENSE](LICENSE) file.
