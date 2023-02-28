---
title: How to get started with branches using git commands on a local repository
date: 2023-02-28T10:10:10
categories: git-merge, repository, git-branch, tutorials
---

![21](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487875271/snKSU_Qto.png?auto=compress)

## Introduction

Application developers rarely work alone. Large web/cloud/mobile development and data science projects will include many people – front-end developers, back-end developers, database administrators, repository administrators, and others. Every change by every contributor must be tracked and controlled to enable collaboration, accountability and version management. This type of distributed version control is extremely important when managing both small and large software projects.

Branches are the heart of workflows in Git-based version control systems like GitHub. In this Blog article you will become familiar with creating and using branches, and merging your changes to the main branch using your Local machine's terminal integrated with an IDE (Visual Studio Code).

As you start working with GitHub repositories and automating workflows, using the web interface can be limiting and more time-consuming. This is where Git commands come in. You can use from your own desktop terminal or a Cloud IDE - wherever you develop your code.

In this article you will become familiar with **git bash** and various new Git commands to get started with branches using git commands on a local repository.

**Estimated time** : 25 mins

## Objectives

After completing this tutorial you will be able to use git commands to work with branches on a local repository, including:

1.  create a new local repository using `git init`
2.  create and add a file to the repo using `git add`
3.  commit changes using `git commit`
4.  create a branch using `git branch`
5.  switch to a branch using `git checkout`
6.  check the status of files changed using `git status`
7.  review recent commits using `git log`
8.  revert changes using `git revert`
9.  get a list of branches and active branch using `git branch`
10. merge changes in your active branch into another branch using `git merge`

## Pre-requisites

If you intend to run this lab on your own system, please ensure you have Git Bash for Windows installed.

To complete this tutorial, you will need the following:

- [Git](https://git-scm.com/downloads) installed on your machine.

- The latest version of [Visual Studio Code](https://code.visualstudio.com/) installed on your machine.

For more details on accomplishing this, review the next step "Installing Git on Windows".

**Note:** This hands-on lab **does not require** you to have created a GitHub account and added a project to it, as covered in the article [How to get started with Git and GitHub](https://creativelightbox.net/how-to-get-started-with-git-and-github) or the follow-up tutorial [How to get started with Branching & Merging using Github?](https://creativelightbox.net/how-to-get-started-with-branching-merging-using-github), but feel free to read these articles if you want to learn more.

## Installing Git on Windows

For Windows, the official build is available for you to download through the Git website. Clicking [here](https://git-scm.com/downloads) will go to the download page automatically.

There is also an open-source project called Git for Windows, which is separate from the official Git website. This tool provides both command line and graphical user interface tools for using Git effectively on your Windows machine. For more information about this project and to inspect and download the code, visit the [Git for Windows project site](https://gitforwindows.org/).

Once Git is fully installed, you can continue on to the section on Setting Up Git.

## Setting Up Git

Now that you have Git installed, you need to do a few things so that the commit messages that will be generated for you will contain your correct information.

The easiest way of doing this is through the `git config` command. Specifically, we need to provide our name and email address because Git embeds this information into each commit we do.

- You can go ahead and add this information by typing:

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "youremail@domain.com"
```

- You can review all of the configuration items that have been set by typing:

```bash
$ git config --list
```

- This will be the output:

```bash
$ user.name=Your Name
$ user.email=youremail@domain.com
```

There are many other options that you can set, but this is the essential one needed to prevent warnings in the future.

With Git installed and set up on your local machine, you are now ready to use Git for version control of your own software projects as well as contribute to open-source projects that are open to the public.

## Hands-on Lab

### 1. Initialize: Open a new terminal window

Let's first open a terminal window in our IDE where we can start entering our shell and git commands. For this short tutorial I'll be using [Visual Studio Code](https://code.visualstudio.com/) for Windows.

**1 -** Click on the `Terminal` menu to the right of this instructions pane and then click on `New Terminal`.

![1](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487116633/-l3wnnCHP.png?auto=compress)

**2 -** This will add a new Terminal window at the bottom where you can start entering commands. Now at the ride-side after the plus (+) button click on the arrow down and choose bash.

**Note:** Before you can commit changes, you need to have git installed and tell git who you are. Please go to `Installing Git on Windows` and `Setting up Git`.

![2](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487312923/zACt9-6iU.png?auto=compress)

### 2. Create a new local repo

**3 -** Now let us create a new directory for your local repository.

Create a `your-repo` directory by copying and pasting the `mkdir` command below into the terminal:

```bash
$ mkdir your-repo
```

![3](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487337608/EIY0eHudL.png?auto=compress)

**4 -** Go into the `your-repo` directory by copying and pasting the `cd` command below:

```bash
$ cd your-repo
```

**5 -** In this `your-repo` directory lets create a new local git repository using the `git init` command. Copy and paste the command below into the terminal:

```bash
$ git init
```

![4](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487368792/o-RgJQFyI.png?auto=compress)

**6 -** A new local repository is now created, which you can verify by doing a directory listing by pasting the following command into the terminal window:

```bash
$ ls -la .git
```

The output shows the contents of the `.git` sub-directory which houses the local repo:

![5](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487395368/Mho-BPwko.png?auto=compress)

### 3. Create and Add a file to the local repo

**7 -** Now lets create an empty file using the following `touch` command:

```bash
$ touch newfile
```

**8 -** Add this file to the repo using the following `git add` command:

```bash
$ git add newfile
```

![6](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487425506/rpP64qrR3.png?auto=compress)

### 4. Commit changes

**9 -** Before you can commit your changes (if you haven't done it in the previous setps), you need to tell git who you are. You can do this using the following commands (replace your user name: first and last name and your user Email address):

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "youremail@domain.com"
```

**10 -** To confirm type the following commands:

```bash
$ git config --list
```

- This will be the output:

```bash
$ user.name=Your Name
$ user.email=youremail@domain.com
```

**11 -** Once the repo has the `newfile`, let's commit your changes using the the following `git commit` command. Note that the commit requires a message which you include using the `-m` parameter:

```bash
$ git commit -m "added newfile"
```

![7](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487457152/BYjMpdqbn.png?auto=compress)

### 5. Create a branch

**12 -** Your previous commit created a default main branch called `main`.

**13 -** To make subsequent changes in your repo, create a new branch in your local repostitory. Copy and paste the following `git branch` command into the terminal to create a branch called `yourfirstbranch`:

```bash
$ git branch yourfirstbranch
```

### 6. Get a list of branches and active branch

**14 -** Let's check which branches your repo contains by pasting the following `git branch` command into the terminal:

```bash
$ git branch
```

**15 -** Note the output lists two branches - the default `main` branch with an asterix `*` next to it indicating that it is the currently active branch, and the newly created `yourfirstbranch`:

![8](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487494391/o7muFEn9U.png?auto=compress)

### 7. Switch to using a different branch

**16 -** Since you now want to work in the new branch issue the following `git checkout` command to make it the active branch to make your changes in:

```bash
$ git checkout yourfirstbranch
```

**17 -** Let's verify that the new branch is now the active branch by issuing the following `git branch` command:

```bash
$ git branch
```

**18 -** Note that the asterix `*` is now next to the `yourfirstbranch` indicating that it is now active:

![9](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487524373/JUVag-CbV.png?auto=compress)

> As a shortcut to creating and branch using `git branch` and then making it active using `git checkout` you can use the shortcut like follows with the `-b` option that creates the branch and makes it active in one step:

```bash
$ git checkout -b yourfirstbranch
```

### 8. Make changes in your branch and check the status of files added/changed

**19 -** Lets make some changes in your new branch called `yourfirstbranch`. Start by adding some text to `newfile` by pasting the following command into the terminal that will append the string "Here is some text in your newfile." into the file:

```bash
$ echo 'Here is some text in your newfile.' >> newfile
```

**20 -** Verify the text has been added by pasting the following `cat` command:

```bash
$ cat newfile
```

![10](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487556494/pf3OvLAbo.png?auto=compress)

**21 -** Now let's create another file called `README.md` using the following command:

```bash
$ touch README.md

```

![11](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487585580/huSolfrYP.png?auto=compress)

**22 -** And now add it to the repo with the following `git add` command:

```bash
$ git add README.md
```

**23 -** So far in your new branch you have edited the `newfile` and added a file called `README.md`. You can easily verify the changes in your current branch using the `git status` command:

```bash
$ git status
```

**24 -** The output of the `git status` command shows that the files `README.md` has been added to the branch and is ready to be committed, since you added it to the branch using `git add` . However, even though you modified the file called `newfile` you did not explicitly add it using `git add` and hence it is not ready to be committed:

![12](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487619098/niJTgFnPM.png?auto=compress)

**25 -** A shortcut to adding all modifications and additions is to use the following `git add` command with an asterix `*` ... this will also add the modified file `newfile` to the branch and make it ready to be committed:

```bash
$ git add *
```

**26 -** Let's check the status again:

```bash
$ git status
```

**27 -** The output now shows both the files can now be comitted:

![13](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487648955/U0BU_zPKu.png?auto=compress)

### 9. Commit and review commit history

**28 -** Now that your changes are ready, you can save them to the branch using the following commit commmand with a message indicating the changes:

```bash
$ git commit -m "added readme.md modified newfile"
```

**29 -** You can issue the following `git log` command to get a history of recent commits:

```bash
$ git log
```

**30 -** The log shows 2 recent commits - the last commit to `yourfirstbranch` as well as the previous commit to `main`:

![14](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487674441/Q4iX5aJbf.png?auto=compress)

### 10. Revert committed changes

**31 -** Sometimes you may not fully test your changes before comitting them and may have undesirable consequences ... you can back out your changes by using a `git revert` command like the following. You can either specify the **id** of your commit that you can see from the previous log output or use the shortcut `HEAD` to rollback the last commit:

```bash
$ git revert HEAD --no-edit
```

> **NOTE:** If you don't specify the `--no-edit` flag you may be presented with an editor screen showing the message with changes to be reverted. In that case, press the `Control` (or Ctrl) key simultaneously with `X` key.

**32 -** The output shows the most recent commit with the specified id has been reverted:

![15](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487699248/IkqrUOeuJ.png?auto=compress)

### 11. Merge changes into another branch

**33 -** Lets make one more change in your currently active `yourfirstbranch` using the following commands:

- Let's check the status again:

```bash
$ git status
```

- then create file:

```bash
$ touch goodfile
```

- then add that file to git:

```bash
$ git add goodfile
```

- now add a commit message:

```bash
$ git commit -m "added goodfile"
```

![16](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487723137/dbQvNwcAS.png?auto=compress)

**34 -** Finally add `git log`. The output of the log shows the the newly added `goodfile` has been comitted to the `yourfirstbranch` branch:

```bash
$ git log
```

![17](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487752675/8zUvZxmCA.png?auto=compress)

**35 -** Now let's merge the contents of the `yourfirstbranch` into the `main` branch. You will first need to make the `main` branch active using the following `git checkout` command:

```bash
$ git checkout main
```

**36 -** Now lets merge the changes from `yourfirstbranch` into `main`

```bash
$ git merge yourfirstbranch
```

![18](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487782828/89QtJ3FA7.png?auto=compress)

**37 -** Output shows the successful merging of the branch:

```bash
$ git log
```

![19](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487809015/U0K5gKJb3.png?auto=compress)

**38 -** Now that changes have been merged into `main` branch, the `yourfirstbranch` can be deleted using the following `git branch` command with the `-d` option:

```bash
$ git branch -d yourfirstbranch
```

![20](https://cdn.hashnode.com/res/hashnode/image/upload/v1674487836958/AOIeKE9Hr.png?auto=compress)

### 12. Practice on your own (optional)

1.  Create a new directory and branch called `newbranch`
2.  Make `newbranch` the active branch
3.  Create an empty file called `newbranchfile`
4.  Add the newly created file to your branch
5.  Commit the changes in your `newbranch`
6.  Revert the last committed changes
7.  Create a new file called `newgoodfile`
8.  Add the latest file to `newbranch`
9.  Commit the changes
10. Merge the changes in `newbranch` into `master`

## Summary

In this short tutorial, you have learned how to create and work with branches using git commands in a local repository. In subsequent articles I'll show, how you can synchronize changes in your local repository with remote GitHub repositories.

## Git and GitHub learning resources

There are a lot of helpful Git and GitHub learning resources on the web. This is a short list of my favorites!

- [GitHub Skills](https://github.com/skills) Learn how to use GitHub with interactive courses designed for beginners.
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

- Install git and setting up your personal details integrated with your IDE.
- Create a new directory using your IDE terminal.
- Initialize Git in your project directory.
- Create a new file in your project directory.
- Make new branch.
- Create another file in your other branch.
- Add the newly created file to your branch.
- Commit the changes in your new branch.
- Revert the last committed changes.
- Add the latest file to your new branch.
- Commit the changes.
- Check the git status.
- Get a history of recent commits.
- Merge the changes in new branch.

Now you know more about the basics of Git and GitHub. Feel free to test them out to make sure you understand how they work.

Download this Git commands [cheat sheet](https://phoenixnap.com/kb/wp-content/uploads/2021/11/git-commands-cheat-sheet-by-pnap-v2.pdf) to have all Git commands in one place for future use.

## What's Next?

If you want to follow-along with more advanced stuff in the next article I'll talk about **Cloning** and **Forking** GitHub Projects using **Git commands** that are the heart of workflows in Git-based version control systems like GitHub.

**Thanks for the read! Now go practice & build something awesome!**
