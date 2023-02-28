---
title: How to Generate and add an SSH key to GitHub?
date: 2023-02-28T10:10:20
categories: ssh-key, authentication, bash, tutorials
---

## Introduction

When dealing with a GitHub repository using commands, you will frequently need to identify yourself with your **username** and **password**. Instead, you can use an **SSH key to authenticate** yourself. As a result, entering the **email** and **password** will no longer be necessary.

SSH keys come in pairs, with a **public key** shared with services such as GitHub and a **private key** held solely on your machine. You will be allowed access if the keys match.

## What is an SSH key?

An **SSH key** is an access credential in the **SSH protocol**. Its function is similar to that of user names and passwords, but the keys are primarily used for **automated processes**.

## Hands-on Lab:

**Effort** : 30 mins

### Objectives

After completing this reading, you will be able to:

1.  Generate an SSH key
2.  Adding an SSH key to GitHub

### Prerequisites

If you intend to run this lab on your system, please ensure you have the following:

- A basic understanding of working with the bash terminal
- A Laptop or PC with Windows installed
- A Internet connection
- [Git](https://git-scm.com/) installed on your local machine. For more details on accomplishing this, review [Installing & Setting Up Git on Windows](https://creativelightbox.net/how-to-get-started-with-branches-using-git-commands-on-a-local-repository#heading-installing-git-on-windows).
- A [GitHub](https://github.com/) account.
- The latest version of [Visual Studio Code](https://code.visualstudio.com/) is installed on your machine.

### 1. Creating a GitHub account (optional)

To create an account in [GitHub](https://github.com/), complete the following steps:

**1 -** Go to the **[Join GitHub page](https://github.com/login)** and **[signup](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)** and **create an account**.

> **Note:** If you already have a GitHub account, **log in** now.

![GitHub sign in/sign up](https://cdn.hashnode.com/res/hashnode/image/upload/v1673357278023/_XD9_9Ysb.png?auto=compress).

**2 -** For more details on accomplishing this, review:
[How to get started with git and github](https://creativelightbox.net/how-to-get-started-with-git-and-github#heading-getting-started-with-github)

### 2. Generating an SSH key

To generate an SSH key, complete the following steps:

**1 -** Launch a terminal. If you are using Windows, launch Git Bash.

**2 -** Type the following command in your terminal, replacing `your email address` with the email address that is linked to your GitHub account. When you have typed the command, press Enter.

```bash
ssh-keygen -t rsa -b 4096 -C "your email address"
```

    A new SSH key is generated.

**3 -** You will be prompted to enter a directory to save the key. You can simply press Enter to accept the default location, which is a .ssh folder in the home directory. This means you will be able to locate the key in `~/.ssh/id_rsa`.

**4 -** You will be prompted to choose a passphrase. You also have the option not to create a passphrase. To skip the passphrase, press Enter twice to confirm that the passphrase is empty.

**5 - Optional**: To navigate to the .ssh directory, and check the contents of the directory, run the following commands in the terminal:

```bash
cd ~/.ssh
```

and then,

```bash
ls
```

> When you list the contents of the .ssh directory, you should see `id_rsa` and `id_rsa.pub` in the list of contents, where `id_rsa` is the private version of your key and `id_rsa.pub` is the public version of your key.

**6 -** You now need to add the SSH key to the ssh-agent, which helps with the authentication process. To start the ssh-agent, run the following command in the terminal:

```bash
eval "$(ssh-agent -s)"
```

**7 -** To add the key to the agent, run the following command in the terminal:

```bash
ssh-add ~/.ssh/id_rsa
```

### 3. Adding an SSH key to GitHub

To add an SSH key to GitHub, you need to copy the SSH key that you generated in the previous lab. Open a terminal and then complete the following steps:

**1 -** In the terminal, run the following command:

```bash
cat ~/.ssh/id_rsa.pub | clip
```

> **Note**: If `clip` doesn't work, run `cat ~/.ssh/id_rsa.pub` in the command line and copy the output.

**2 -** Sign in to GitHub. At the top right, click the drop-down menu on your profile image and select **Settings**.

![image 1](https://cdn.hashnode.com/res/hashnode/image/upload/v1675684879278/4pUKToRe7.png?auto=compress)

**3 -** From the "Personal settings" menu, select **SSH and GPG keys**, as shown in the following image:

![image 2](https://cdn.hashnode.com/res/hashnode/image/upload/v1675684923137/tQQw42RKH.png?auto=compress)

**4 -** Click **New SSH key**.

![image 3](https://cdn.hashnode.com/res/hashnode/image/upload/v1675684953343/LHOlTkETU.png?auto=compress)

**5 -** **Enter a title** for the new SSH key.

**5.2 -** In the **Key** field, paste the key that you copied in step **2. Genarating an SSH key**, above.

> **Note**: The pasted key should include **Your email address** at the end.

**5.3 -** Hit the button **Add SSH key**

![image 4](https://cdn.hashnode.com/res/hashnode/image/upload/v1675684983402/v5J5S9VaF.png?auto=compress)

**6 -** Click **Add SSH Key**. The SSH key is added to your account.

## Summary

Congratulations! You have now learned how to generate the SSH key and add an SSH key to GitHub.

## Git and GitHub learning resources

There are a lot of helpful Git and GitHub learning resources on the web. This is a short list of my favorites!

- [GitHub Skills](https://github.com/skills)
  Learn how to use GitHub with interactive courses designed for beginners.

- [GitHub Blog](https://github.blog/)

- [Pro Git book](https://git-scm.com/book/en/v2)

- [Git command list](https://git-scm.com/docs)

- [GitHub Training Guides (Youtube channel)](https://www.youtube.com/githubguides)

- [Introduction to GitHub](https://github.com/skills/introduction-to-github)

- [GitHub Live Training](https://github.com/services/#upcoming-events), with a hands-on, project-based approach for those who love the command line and those who don't.

- [Code School: Git Real](https://www.pluralsight.com/courses/code-school-git-real). Learn basic concepts of Git version control. Explore staging, cloning, branching, and collaborating with Git.

- [Atlassian | Bitbucket | Git basics](https://www.atlassian.com/git)

## Conclusion

Now you know more about generating and adding an SSH key to Github, Feel free to these steps to make sure you understand how they work.

Download this Git commands [cheat sheet](https://phoenixnap.com/kb/wp-content/uploads/2021/11/git-commands-cheat-sheet-by-pnap-v2.pdf) to have all Git commands in one place for future use.

## What's Next?

If you want to follow along with more advanced stuff in the next article I'll talk about **GitBash Installation on your Desktop**.

**Thanks for the read! Now go practice & build something awesome!**
