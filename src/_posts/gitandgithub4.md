---
title: How to get familiar with Forking and Cloning GitHub repos?
date: 2023-02-28T10:10:15
categories: fork, pull-request, git-clone, tutorials
---

![0](https://cdn.hashnode.com/res/hashnode/image/upload/v1675095145449/GMFjG4FR4.png?auto=compress)

Whether you are joining a team or basing your own project on prior work, some of the most powerful tools are forking and cloning a repository.

## Introduction

If you are wondering what is the difference between fork and clone, don't worry - that is a natural question to have when you are starting out with GitHub. In this reading I will answer this question as well as clarify when should you use which and how do you perform the fork and clone operations. As well as demystify repository (repo) terminology like local, remote, origin and upstream. I will also walk through a typical workflow involving forking, cloning, merging, making changes and keeping various repos in sync using fetch, push, pull and pull requests.

## Objectives

After completing this reading, you will be able to:

1.  Differentiate between forking and cloning repositories
2.  Explain how repos can be forked and cloned
3.  Determine when you should fork vs. clone
4.  Describe terminology such as local, remote, origin and upstream respositories
5.  Explain how to keep distributed repos in sync using push, fetch and pull

## Distributed Repositories

Distributed source version control systems like GitHub allow for projects to have multiples developers collaborating on its codebase in parallel. A project may reside on GitHub.com as a public or private repository. Each developer working on the project may have their own copies of the repository on their computers. A copy of the repository on a developer's computer is local to that developer, and hence that developer also refers to that repo as their `local repo`. The copy of the repository on GitHub.com is on a remote server, and hence for each developer that is a `remote repo`.

![1](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094621387/gKm1O6kjj.png?auto=compress)

## Clone

Let's say a new developer now joins the team to collaborate on the project. This developer can create a identical copy of the `remote repo` using the `git clone` operation. The remote repo from which the project is originally cloned from is also referred to as the `origin`.

![2](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094677190/sVD3KogAw.png?auto=compress)

Any repo in GitHub can be cloned by going to the repo and clicking on the `Code` button.

![3](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094715142/-zBxlU_D7.png?auto=compress)

You will then have an option to get the entire codebase of the remote repo in several ways, including the ability to copy the HTTPS URL, and then specifying the copied URL to perform `git clone URL` command from your local machine.

![4](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094738246/ONN1b7MIb.png?auto=compress)

## Creating Branches and Synchronizing Changes

After cloning the repo to the local machine, a developer can start making changes to the codebase. This could be for tasks like adding features and enhancements or fixing bugs. Typically the developer would use `git branch` to create a branch, e.g. `feature1-branch`, make that branch active using `git checkout` and make changes within that branch - such as by adding or editing files. The developer saves their changes often within the branch by using `git add` followed by `git commit`.

Once the changes for a particular branch are complete, rather than merging to the main branch directly, it is often a good practice to `push` the new branch with changes to `origin` where other developers/reviewers can test/review the changes before merging the branch to main.

> **NOTE:** Since in this scenario the `feature1-branch` was developed by a new developer on the project, that developer may not have the access to merge their branch with main in origin. In fact, in many projects, only the project maintainers or admins are allowed to merge to the main branch, or in some sames a peer review may be required. In order to request that your changes be reviewed and merged with the main branch, many projects require that a `Pull Request` (PR) be submitted. Whereas, in some cases, e.g. if you are a lone developer on the project, this PR step may be omitted and you could merge and push your changes directly if you have write access to the origin repo.

Every once in a while, a developer may want to get the latest copy of the repo from `origin` to serve as the base for making changes or reviewing changes by others. For example, this may be the case after the changes in `feature1-branch` have been pushed to `origin` and the peer developer wants to review the code. The `git fetch` command can be used for this purpose.

The `git diff` command can help others reviewing your code to to identify and compare the changes. Once a peer reviewer or project maintainer has reviewed the changes, and is satisfied, the reviewer will `git checkout` the main branch and then `git merge` the new `feature1-branch`, which can then be deleted. After the branch is merged locally, the reviewer can `git push` the updated main branch back to `origin`.

> **NOTE:** The `git-remote -v` command can be used to check which remote repos you are synchronzing push and fetch changes with.

Another option for getting the latest copy of the repo is to use the `git pull` command. The `pull` command in effect is a combination of `fetch` and `merge`. That is, using this single command, you can both fetch and merge the changes into your local repo. For example, another developer who wants to use the updated codebase with the `feature1` changes that have been merged to main branch in origin, can use the `git pull` command to `fetch` the updated codebase from origin and `merge` with his/her local codebase before starting development on a new feature.

This `clone->branch->merge` workflow described here can be summarized in the following diagram.

![5](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094760013/zTDaRfzlu.png?auto=compress)

## Fork

If a developer wants to create a derivative project with another project as the starting point, or work on a project using a separate or independent clone, the developer can chose to `fork` a project. You can fork any public project by going to its GitHub project page and clicking on the `Fork` button towards the top of the page.

![6](https://cdn.hashnode.com/res/hashnode/image/upload/v1675096099938/dVzkHw9el.png?auto=compress)

> **NOTE:** The fork option is available only using the web interface and there is no git command to create a fork. You can however use a `git clone` workaround - indicated at the bottom of this reading if interested.

The project from which you create the fork is called the `upstream` project.

Once a project has been forked, the developers with access to the fork can work on updating and making changes to the fork using the same workflow as described previosuly i.e. the forked copy of the project now becomes the `origin` and developers with access to `origin` can create clones of it on their local machines, where they can create and merge branches, and synchronize changes with the `origin` using pull and push.

However it is important to note that the synchronization of changes using merge and push can only be done with repos that the developers have write access to i.e. in this case their fork of the project i.e. the `origin` from which they create their local clones. But what if a developer wants contribute their changes back to the `upstream` project that they do not have write access to? In this case they can submit a `pull request` or PR with their proposed changes. A `pull request` can be opened by going to the project's homepage, navigating to the `Pull Requests` tab, and then clicking on `New Pull Request`.

![7](https://cdn.hashnode.com/res/hashnode/image/upload/v1675096138290/bM4DPmU1Q.png?auto=compress)

> **Note:** the term `Pull Request` should not be confused with the `git pull` command that you use to `fetch` and `merge` the latest codebase into your local repo. A `Pull Request`, as the name implies, is merely a request to review and `pull` your proposed changes. As part of the PR, you provide details of the proposed changes and your implementation.

The maintainers of the `upstream` project can review the changes in the PR and decide to merge them or not. In some cases they may provide feedback (by commenting in the PR) or ask the submitter of the PR to perform some conflict resolution such as by applying their changes to the latest codebase and resubmitting the PR.

This `fork->clone->pr` workflow described here is summarized in the figure below.

![8](https://cdn.hashnode.com/res/hashnode/image/upload/v1675094833424/FuCKbyivi.png?auto=compress)

## When to fork or clone?

By now you should be familiar with the difference between fork and clone. So let's summarize when you should clone vs. fork. Typically if you have access to a project repo e.g. as part of a team developing a codebase collaboratively, you can clone the repo and synchronize changes from your local copy of the repo using pull and push.

If however there is a public project that you want to contribute to but do not have write access to, or use a public project as a starting point for your own project, you can fork the project. Then work with the forked codebase by cloning it to your machine and collaborating with your development team working on the fork using the pull-push synchronization with your fork of the project. But if you want to contribute your changes back to the upstream project (the original project that you forked from), you can submit your changes using a pull request.

## Wrapping Up

In this Introduction to Forking, Cloning and Pull Requests you learned that:

- A clone is essentially your copy of a project that you can make changes to.
- You can create local copy of a project by using the git clone command.
- The project from which you clone from is called the origin.
- You can pull updates from the origin and push your changes back to it.
- A fork is an separate copy of a project that you can make changes to independently of the original project
- The project that you fork from is referred to as the upstream project
- You can suggest changes back to the upstream project by submitting a Pull Request (PR)

> **NOTE:** Although the usual workflow to start with the codebase of another project is to first fork it and then clone the fork, you may be tempted to simply clone the `upstream` project since it is quite convenient to do so from your local machine using the `git clone` command. If you do so, you will note that the project you clone from will by default become the `origin` repo. But since you likely don't have write access to the upstream repo that you cloned from, you will not be able to push your changes to it. Don't worry. You can easily rename the origin to upstream using the command `git remote rename origin upstream` and then add a new origin using `git remote add origin <url>` to point to the URL of a new GitHub repo that you have created or have access to, and use that repo for making your changes to the fork's code.

## Hands-on Lab:

**Effort** : 30 mins

### Objectives

After completing this lab, you will be able to use git commands to manage upstream repositories:

1.  create a github account (optional)
2.  fork existing repository using the UI
3.  clone forked repository in the lab environment
4.  create a new branch
5.  make changes locally
6.  add and commit to the local branch
7.  push changes to the forked repository
8.  create a pull request to the upstream repository

### Pre-requisites

If you intend to run this lab on your own system, please ensure you have the following:.

- A basic understanding of Html
- A basic understanding of CSS
- A Laptop or PC with Windows installed
- A Internet connection
- [Git](https://git-scm.com/) installed on your local machine. For more details on accomplishing this, review [Installing & Setting Up Git on Windows](https://creativelightbox.net/how-to-get-started-with-branches-using-git-commands-on-a-local-repository#heading-installing-git-on-windows).
- A [GitHub](https://github.com/) account.
- The latest version of [Visual Studio Code](https://code.visualstudio.com/) installed on your machine.

### 1. Creating a GitHub account

To create an account in [GitHub](https://github.com/), complete the following steps:

_1 -_ Go to the **[Join GitHub page](https://github.com/login)** and **[signup](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)** and **create an account**.

> **Note:** If you already have a GitHub account, **log in** now.

![GitHub sign in/sign up](https://cdn.hashnode.com/res/hashnode/image/upload/v1673357278023/_XD9_9Ysb.png?auto=compress).

_2 -_ For more details on accomplishing this, review:
[How to get started with git and github](https://creativelightbox.net/how-to-get-started-with-git-and-github#heading-getting-started-with-github)

### 2. Fork this repository

To fork a source repository, complete the following steps:

_1 -_ Log in to GitHub and go to this project's [sample source repository](https://github.com/anacalvario/create-circle/). This is the upstream repository for your project.

_2 -_ At the top right of the screen, click **Fork** and select your own GitHub account as the destination for the fork.

![9](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166267488/TN1bgtBTQ.png?auto=compress)

> A copy of the source repository has now been added as one of your GitHub repositories. This is the origin repository for your repository.

![10](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166303069/ghtjDhkqQ.png?auto=compress)

### 3. Clone the forked repository

A clone is a local copy of a repository. Before you can clone the forked repository, you first need its HTTPS URL, which provides secure access to it.

To clone the forked repository, complete the following steps:

_1 -_ In your list of repositories, click the forked repository. On the repository's main page, click the **Code** button.

_2 -_ Click the clipboard icon to copy the URL. Make sure the `HTTPS` tab is active.

![11](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166410366/5keYfcSMa.png?auto=compress)

_3 -_ Let's export this URL in an environment variable so it's available for us to use in the later steps:

```bash
        export ORIGIN=<your repository HTTPS URL>
```

_4 -_ Open the terminal in the lab environment by using the menu in the editor: Terminal > New Terminal.

![12.0](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166410366/5keYfcSMa.png?auto=compress)

_5 -_ Run the following command with the `HTTPS` URL you copied earlier:

```bash
         git clone <your repository HTTPS URL>
```

![12](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166504760/NG8PFCgN-.png?auto=compress)

_6 -_ Go into the `create-circle` directory by copying and pasting the `cd` command below:

```bash
         cd create-circle
```

_7 -_ Then copy and paste the `ls` command below to see what's inside your cloned directory

```bash
         ls
```

![13](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166592916/nBUzF11cP.png?auto=compress)

> The command clones the repository that is on GitHub into your current directory.

### 4. Explore the cloned repo

To become familiar with the cloned repo, complete the following steps:

_1 -_ Click on the Explorer icon as shown in the following image:

![14](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166624652/nETOotJwi.png?auto=compress)

_2 -_ Click on Project and expand the folder of the project you just cloned. You can open the files in the editor on the right side by clicking on the file name.

![15](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166648161/WzjCpPk71.png?auto=compress)

### 5. Create a new branch

We will now add a new feature to the source code. We are asked to make the circle bigger with a size of 500x500\. Before we make this change, we will create a new branch.

_1 -_ Navigate to our repository using `create-circle`.

_2 -_ Create a new branch using the `git checkout -b feature-circle-500` command. Notice that we used a single command instead of creating a branch and then checking it out. The `-b` flag creates the branch if it does not already exist.

_3 -_ You can check that you are in the new branch by using the `git status` command.

![16](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166675892/Wxrq8jRJ2.png?auto=compress)

### 6. Make required code changes

_1 -_ Let's change the width and height to 500px each. Open the `style.css` file from the file explorer and change the code as follows:

```css
.blue {
  background-color: blue;
}
.circle {
  border-radius: 50%;
  width: 500;
  height: 500px;
}
```

_2 -_ If you do a `git status` at this point, you will see a change is shown. This change is not staged at this point, but Git is aware of it.

![17](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166725077/4t1CIaTqJ.png?auto=compress)

_3 -_ Optionally, you can use the `git diff` command to see the changes in more detail:

![18](https://cdn.hashnode.com/res/hashnode/image/upload/v1675166785081/DWR-nC8SC.png?auto=compress)

> Notice the text in red was deleted and the text in green was added. Essentially, we changed the height and width from 300px to 500px each in `style.css`.

### 7. Add and commit your changes

A commit is Git's way of recording your file changes, similar to how you might save an edited document. To commit the change that you made in the previous exercise, you first need to add it to a staging area. Git will then take the staged snapshot of changes and commit them to the project. Remember, Git will never change files unless you explicitly ask it to.

To commit your new file, complete the following steps:

_1 -_ To move the changes from your working project directory to the staging area, type the following command in the Terminal window:

```bash
         git add .
```

> The `git add` command has several options. The single `.` adds all untracked files in the current directory and subdirectories to the staging area. Alternatively, you can add the single file you created by using the `git add style.css` command. Finally, you can use `git add -A` to recursively add all files from the top level git folder.

_2 -_ If you check the status at this point, you will see the file has changed from Untracked to `Changes to be committed`:

![19](https://cdn.hashnode.com/res/hashnode/image/upload/v1675167051329/Wv5qBJEG1.png?auto=compress)

_3 -_ Before you can commit your changes (if you haven't done it in the previous steps), you need to tell git who you are. You can do this using the following commands (replace your user name: first and last name and your user Email address):

> Set your email:

```bash
         git config --global user.email "email@example.com"
```

> Set your name:

```bash
         git config --global user.name "Your Name"
```

> To confirm type the following commands:

```bash
         git config --list
```

> This will be the output:

```bash
           user.name=Your Name
           user.email=youremail@domain.com
```

> This will be the output on your terminal:

![20](https://cdn.hashnode.com/res/hashnode/image/upload/v1675167829712/DnKlA-OGA.png?auto=compress)

_4 -_ Type the following command in the Terminal window to commit the file.

> **Note**: It's always a good practice to add a description for the commit so you can remember what the change was if you have to refer to it later. We add a description using `-m`, followed by our message:

```bash
           git commit -m "Changing the height and the width of the circle"
```

![21](https://cdn.hashnode.com/res/hashnode/image/upload/v1675167868121/epYVoDKa2.png?auto=compress)

As you can see, `git status` now says there is nothing to commit and the working tree is clean. The new file is now ready to be pushed from your local system to `origin` on GitHub.

### 8. Merge your branch back into the main branch

If you are happy with your changes in the `feature-circle-500` branch, you can now merge it back into your local `main` branch by following these steps:

_1 -_ Confirm that you are currently in the `feature-circle-500` branch.

![22](https://cdn.hashnode.com/res/hashnode/image/upload/v1675167896803/UfVyXawUS.png?auto=compress)

_2 -_ Check out the `main` branch

```bash
            git checkout main
```

> If you run the `git branch` again, you should see the `*` against the `main` branch.

![23](https://cdn.hashnode.com/res/hashnode/image/upload/v1675167934437/SjY6ILJvr.png?auto=compress)

_3 -_ Merge the ``branch into `main`.

```bash
            git merge feature-circle-500
```

![24](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168007806/-dBnRn3k9.png?auto=compress)

_4 -_ Confirm the change was merged by using the `git log` command.

![25](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168036665/mqZYTh1Ox.png?auto=compress)

### 9. Delete the new branch

Since you are done making the change, let's delete the `feature-circle-500` branch. Follow these steps:

_1 -_ Ensure you are on the `main` branch. If not, check it out first

```bash
            git checkout main
```

_2 -_ Delete the `feature-circle-500` branch

```bash
            git branch -d feature-circle-500
```

_3 -_ You can confirm the branch was deleted by listing all branches

```bash
            git branch
```

![26](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168079513/hQYXgs8Jy.png?auto=compress)

### 10: Push your changes to origin

This push will synchronize all the changes you made on your local system with your fork repository on GitHub.

To push your update to GitHub, complete the following steps:

_1 -_ In the Terminal window, run the following command:

```bash
             git push origin main
```

> **Note:** If your username and password were accepted, you should see the changes pushed to GitHub in the terminal.

![27](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168129796/RheUnsgdQ.png?auto=compress)

_2 -_ Go to the fork repository in your GitHub account and verify that the local changes have now been added to the main branch.

![28](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168160079/QRQvWo5Ow.png?auto=compress)

### 11. Create a pull request

The final step is to request that the original project pull in the changes you've made to your fork. To merge your changes to the original repository, you need to create a **pull request**.

To create a pull request, complete the following steps:

_1 -_ Ensure you are on the **Code** tab. Click on the **Contribute** button and then on **Open pull request**.

![29](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168208331/CZHQxvOBU.png?auto=compress)

_2 -_ In the **Comparing changes** panel, GitHub shows you that it is comparing the main branch of your fork to the main branch of the original repository, and that your changes can be merged. Click the **Create pull request** button.

![30](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168240147/1HeIFbL5E.png?auto=compress)

![31](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168340804/3N6dOs3_o.png?auto=compress)

_3 -_ You are taken to the **Open pull request** screen. Notice that your commit message appears as the title of the pull request. Since we signed the commit, the body contains the email you configured in the previous step.

![32](https://cdn.hashnode.com/res/hashnode/image/upload/v1675168385566/idas_lvTi.png?auto=compress)

> **Note**: For the purposes of this lab, your pull request will be processed and closed by [source repository owner](https://github.com/anacalvario) **Copy the URL of this pull request as you will need to submit it for peer review.** if necessary.

### 12. Merge Pull Request, only by Source repository owner (optional)

This step **optional**, it is only done by the [source repository owner](https://github.com/anacalvario), complete the following steps if someone made a forked pull request from one of your repositories:

_1 -_ The [source repository owner](https://github.com/anacalvario) or myself in this case should see the following message in your pull request after a few seconds:

![34](https://cdn.hashnode.com/res/hashnode/image/upload/v1675170007197/nwSyddBTd.png?auto=compress)

_2 -_ Your Pull request just got merged done by the [source repository owner](https://github.com/anacalvario), you should see in your GitHub account the following:

![35](https://cdn.hashnode.com/res/hashnode/image/upload/v1675170601703/XCnCHIhAd.png?auto=compress)

![36](https://cdn.hashnode.com/res/hashnode/image/upload/v1675170495559/Cc4ytWx03.png?auto=compress)

_3 -_ As the [source repository owner](https://github.com/anacalvario), I should see in my GitHub account the following:

![37](https://cdn.hashnode.com/res/hashnode/image/upload/v1675175234739/R-8Z2hNaH.png?auto=compress)

### 13. Practice on your own

_1 -_ Create a new branch called `feature-add-color`.

```bash
           git branch feature-add-color
```

_2 -_ Make `feature-add-color` the active branch.

```bash
           git checkout feature-add-color
```

_3 -_ Add another css rule as follows:

```css
.red {
  background-color: red;
}
```

_4 -_ Stage this change.

```bash
           git add -A
```

_5 -_ Commit the changes in your `feature-add-color`.

```bash
           git commit -sm 'adding red color feature'
```

_6 -_ Merge the changes in `feature-add-color` into `main`.

```bash
           git checkout main && git merge feature-add-color
```

_7 -_ Delete the `feature-add-color` branch.

```bash
           git branch -d feature-add-color
```

_8 -_ Create a new pull request for this feature in the upstream repository using the GitHub UI.

## Summary

In this lab, you have learned how to fork an upstream repository into your own account and then clone it locally in the lab environment. You then learned how to synchronize changes in your local repository with remote GitHub repositories using pull requests. Finally you saw how a pull request is merged if accepted.

## Git and GitHub learning resources

There are a lot of helpful Git and GitHub learning resources on the web. This is a short list of my favorites!

- [GitHub Skills](https://github.com/skills)
  Learn how to use GitHub with interactive courses designed for beginners.

- [GitHub Blog](https://github.blog/)

- [Pro Git book](https://git-scm.com/book/en/v2)

- [Git command list](https://git-scm.com/docs)

- [GitHub Traing Guides (Youtube channel)](https://www.youtube.com/githubguides)

- [Introduction to GitHub](https://github.com/skills/introduction-to-github)

- [GitHub Live Training](https://github.com/services/#upcoming-events), with a hands-on, project-based approach for those who love the command line and those who don't.

- [Code School: Git Real](https://www.pluralsight.com/courses/code-school-git-real). Learn basic concepts of Git version control. Explore staging, cloning, branching, and collaborating with Git.

- [Atlassian | Bitbucket | Git basics](https://www.atlassian.com/git)

## Conclusion

Congratulations! In this article, you learned how to:

- Branches are used to isolate changes to code. When the changes are complete, they can be merged back into the main branch.
- Repositories can be cloned to make it possible to work locally, then sync changes back to the original.
- Repositories can be forked to be used as a base for a new project, or so that the developer can work independently.
- A​ Pull Request (PR) can be submitted to have your changes reviewed and merged.
- Large projects include people working in different roles:
- The Developer – creates code
- The Integrator – manages changes made by developers
- The Repository Administrator – configures and maintains access to the repository

Now you know more about Forking, Cloning, Pull requests and Merging of Git and GitHub. Feel free to test them out to make sure you understand how they work.

Download this Git commands [cheat sheet](https://phoenixnap.com/kb/wp-content/uploads/2021/11/git-commands-cheat-sheet-by-pnap-v2.pdf) to have all Git commands in one place for future use.

## What's Next?

If you want to follow-along with more advanced stuff in the next article I'll talk about **SSH keys** and **how to create & add an SSH key to your GitHub account**.

**Thanks for the read! Now go practice & build something awesome!**
