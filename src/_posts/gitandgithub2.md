---
title: How to get started with Branching & Merging using Github?
date: 2023-02-28T10:10:05
categories: merging, pull-request, git-branch, tutorials
---

## Introduction

Application developers rarely work alone. Large web/cloud/mobile development and data science projects will include many people – front-end developers, back-end developers, database administrators, repository administrators, and others. Every change by every contributor must be tracked and controlled to enable collaboration, accountability and version management. This type of distributed version control is extremely important when managing both small and large software projects.

Branches are the heart of workflows in Git-based version control systems like GitHub. In this Blog article you will become familiar with creating and using branches, and merging your changes to the main branch with Pull Requests. As you start working with GitHub repositories and automating workflows, using the web interface can be limiting and more time-consuming. This is where Git commands come in. You can use from your own desktop or a Cloud IDE - wherever you develop your code. In this article you will also become familiar with and utilize various Git commands to clone and fork repositories, as well as commit, push and pull your changes using the command line.

### Learning Objectives

- Explain how branches are used and describe pull requests.
- Differentiate between cloning and forking GitHub projects.
- List the roles common in large projects.
- Create GitHub branches and perform merge operations using the GitHub Web interface.
- Execute Git commands to work with GitHub repositories from a terminal.
- Create a fork and clone of a GitHub repository, make code changes, and submit a pull request.

### Prerequisites

While not completely necessary, I believe you will get the most out of this article if you come up with:

- A basic understanding of Html (markup language)

If you want to follow the tutorial in the last part of this article, it is important for you to have:

- A Laptop or PC with Windows, Mac or Linux installed

- A Internet connection

## What are Branches?

- All files in GitHub are stored on a branch.
- The master branch is definitive. It stores the deployable version of your code.
- The master branch is created by default, however, you can use any branch as the main, finished,deployable version of the code.

![1](https://cdn.hashnode.com/res/hashnode/image/upload/v1673885765260/PDspyR3Os.png?auto=compress)

- When you plan to change things, you create a new branch and give it a descriptive name.
- The new branch starts as an exact copy of the original branch.
- As you make changes, the branch that you created holds the changed code.

![2](https://cdn.hashnode.com/res/hashnode/image/upload/v1673885937815/ryZBnLmG3.png?auto=compress)

## Merging Branches

GitHub branches can be very complex for large software projects.
For a simple project, such as the ones we are exploring, consider the following:

1 - Start with a common base, the initial source for this project.

![3](https://cdn.hashnode.com/res/hashnode/image/upload/v1673885987676/Oid3ej14Z.png?auto=compress)

2 - At one point, the code is branched while new features are developed.

![4](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886017068/gVONiebBH.png?auto=compress)

3 - In this example, both branches are undergoing changes.

![5](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886036544/gXXr1hy4x.png?auto=compress)

4 - When the two streams of work are ready to merge, each branch’s code is identified
as a tip, and the two tips are merged into a third, combined branch.

![6](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886059377/lublQyiFf.png?auto=compress)

## Making a Commit

Developers work on source files in a branch. Since some projects take a while, the source
doesn’t make sense right away.

![7](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886080008/rDWaoGaix.png?auto=compress)

**To change the contents of a file:**

- Select the file.
- Click the pencil icon.
- Make the changes.
- Commit the changes.

When the developer has completed their assigned work, to save their changes, they commit the code:

- Commit indicates that the developer is convinced that the code represents a stable platform for the feature or set of features being developed.

- When a developer commits changed source to their path, they are required to write a comment that describes the changes.

- The comment should be meaningful and descriptive.

- The developer can choose to commit to the current branch or create a new branch.

![8](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886106626/p1PlT9Doo.png?auto=compress)

**Some best practices:**

- Don’t end the commit message with a period.
- Keep commit messages under 50 characters – use the extended window for the details.
- Always write in an “active” voice.

![9](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886141663/icvadZFcX.png?auto=compress)

## What is a Pull Request ?

A Pull is used to initiate the merging of branches in a way to capture changes.

- A pull request makes the proposed (committed) changes available for others to review and
  use.
- A pull can follow any commits, even if code is unfinished.
- A pull requires a user to approve the changes. This can be the author of the change or it
  can be assigned within the team.
- Note that, GitHub automatically makes a pull request on your behalf if you make a change on a branch that you do not own.
- Since the log files are immutable, it is always possible to find the person who approved the merge of the change.

**To open a new pull request:**

1 - Click Pull request and select New pull request.

![10](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886168429/_1d2MhDnb.png?auto=compress)

2 - Select the new branch from the compare box.

![11](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886191067/Crw5jV3wT.png?auto=compress)

3 - Scroll down to view the changes.

4- Confirm that the changes are what you want to assess.

5 - Add a title and description to the request.

6 - Click Create pull request.

![12](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886216764/7Zs75V1B7.png?auto=compress)

## Merging into the Master Branch

The intent of Git repositories is for the master branch to be the only deployed code.

Developers can change source files in a branch but the changes are not released until:

- They are committed.
- A pull command is issued.
- The code is reviewed and approved.
- The approved code is merged back into the master code.

**To merge a committed code change into your master code:**

1 - Click Merge pull request.

![13](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886271901/MyXlDiqbf.png?auto=compress)

2 - Click Confirm merge.

![14](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886238998/hCkPezVxn.png?auto=compress)

When all changes for a branch are complete, that branch is considered obsolete and it should be deleted.

## Create & merge a branch in your GitHub repository

**Estimated time**: 15 minutes

## Objectives

After completing this short tutorial you will be able to:

1. Create a branch
2. Commit changes to a child branch
3. Open a pull request
4. Merge a pull request into the main branch

## Prerequisites

This hands-on lab requires you to have created a GitHub account and added a project to it, as covered in the article [How to get started with Git and GitHub](https://creativelightbox.net/how-to-get-started-with-git-and-github).

> **NOTE:** In the past the default branch in your GitHub repo used the name `master`. Effective Oct 1. 2020, all new GitHub repositories use the more inclusive term `main` as the name of the default branch instead of `master`.

## 1. Create a branch

You can create or delete branches using your repository&#x27;s GitHub web page. To add a branch to your repository, complete the following steps:

1 - Go to you repository&#x27;s main page. Note that when you created your repository, the **main** branch was created for you:

![15](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886310082/A18s-CtYt.png?auto=compress)

2 - At the top of the file list, locate the **Branch** drop-down menu. (By default, the menu displays **Branch: main**.) Click the drop-down menu, type the name of the branch you want to create, and press Enter on your keyboard.

![16](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886331388/fy-zWD5lP.png?auto=compress)

Your repository now has two branches: **Main** and **Child_Branch**. You can click the drop-down menu to see your branches.

![17](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886350950/w-aCv8ejy.png?auto=compress)

Any files that were in the **main** branch have now been copied to **Child_Branch**. Note, however, that when you add or edit a file in **Child_Branch**, that change will not automatically be made in the **main** branch.

## 2. Add a file to a branch

To add a file to your new branch, ensure that **Child_Branch** (or whatever name you gave your branch) is displayed in the **Branch** drop-down menu and complete the following steps:

1 - Click **Add file &gt; Create new file** to create a file in the repository.

![18](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886374622/uH3scR-EP.png?auto=compress)

2 - Type a name and extension for the file -- for example, &#x60;testchild.py&#x60; -- and add the following lines to the body of the new file:

![19](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886397358/VmxlMqka-.png?auto=compress)

3 - Scroll to the bottom of the page, add a description of the file you are about to add (note that the description is optional), and click **Commit**.

![20](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886417468/l_ZOAS9k-.png?auto=compress)

The file is added to your child branch.

## 3. Open a pull request

The file that you added to your child branch is not automatically added to the **main** branch. (You can check this by using the **Branch** drop-down menu to go to the **main** branch; note that there is no `testchild.py` file in the file list):

![21](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886436638/q-lCVckE8.png?auto=compress)

You can also compare the two branches and open a _pull request_, which will enable you to copy the changes that you've made in the child branch -- in this case, adding a new file -- to the **main** branch.

1 - In **Child_Branch**, click the **Compare &amp; pull request** button.

![22](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886457330/XEeQLbtUu.png?auto=compress)

2 - Scroll to the bottom of the page and note that there is **1 changed file** listed.

![23](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886479254/j80K0pOvj.png?auto=compress)

3 - Scroll up and note that GitHub is comparing the **main** and **Child_Branch** branches and that there are no conflicts between the two. Optionally, you can add a comment to the pull request. Click **Create pull request**.

![24](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886500948/vvrMA-72l.png?auto=compress)

The pull request is created and can now be merged by a repository administrator.

## 4. Merge a pull request

To merge a pull request into a project, complete the following steps:

1 - Click the **Pull requests** tab. A list of pending pull requests is displayed.

2 - Click the pull request that you want to merge into the main project. If you are satisfied with the changes, click **Merge pull request** to accept the pull request and merge the updates. (You can add a comment if you choose.)

![25](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886522173/cbaubk5Cq.png?auto=compress)

3 - When you click **Merge pull request**, a **Confirm merge** button is displayed. Click that button to complete the merge.

![26](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886544018/DIyv6n9W_.png?auto=compress)

The pull request has now been merged successfully. Note that you can delete the child branch because your changes have been incorporated into the **main** branch.

![27](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886562317/7NN5sqoJ0.png?auto=compress)

Check the list of files in the **main** branch to confirm that it now includes the file that you added in the pull request.

![28](https://cdn.hashnode.com/res/hashnode/image/upload/v1673886583055/N01Tw5dxX.png?auto=compress)

### Summary

You&#x27;ve now learned how to create a branch, edit and commit changes in that branch, open a pull request, and merge the pull request into your main project. We encourage you to continue to experiment with branches and pull requests to become more familiar with the concepts and processes.

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

Congratulations! In this article, you learned:

- All files in GitHub exist on a branch.
- The Master Branch contains the finished, deployable version of the code.
- Create new branches when you need to change the code.
- The new branch starts as an exact copy of the original branch.
- As you make changes, the branch that you created holds the changed code.
- More than one branch can be undergoing changes at the same time.
- Saved changes are called commits.
- Pull requests enables other users to review and use the proposed changes (committed).
- When you are ready to merge the changed code into the master branch, you merge the committed code changes into your master code.

Now you know more about the basics of Git and GitHub. Feel free to test them out to make sure you understand how they work.

Download this Git commands [cheat sheet](https://phoenixnap.com/kb/wp-content/uploads/2021/11/git-commands-cheat-sheet-by-pnap-v2.pdf) to have all Git commands in one place for future use.

## What's Next?

If you want to follow-along withe more advanced stuff in the next article I'll talk about **Branching** using **Git commands** that are are the heart of workflows in Git-based version control systems like GitHub.

As you start working with GitHub repositories and automating workflows, just using the web interface can be very limiting and more time-consuming. This is where Git commands come in.

You can use it from your own desktop or a Cloud IDE - wherever you develop your code.

**Thanks for the read! Now go practice & build something awesome!**
