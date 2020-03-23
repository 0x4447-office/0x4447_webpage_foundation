# The Office

This section is for everyone who works at 0x4447, LLC. It covers best practices for office life and client communication.

# Markdown

When it comes to wrting text, we format our documents using Markdown, it is a siple way to mark text in a way that it can be esally formated and converted to other formats with ease, while keeping the base document clean and easy to work with.

Read this section to learn our work flow that we have setup using all that GitHub has to offer.

# GitHub

Bellow you can find the GitHub work flow that we follow. 

## How to work with Issues

Anyone can create an Issue for any repo, and can assign anyone to it.

- Assigning someone to an Issue, means that the assigned person is responsible to work on, or reply to the Issue. If an issue is assigned to more than one person, then these people need to figure out who will work on this issue based on the skills this issue requires. 
- If an issue does not have anyone assigned to it, it means that we are not ready to work on it, and it is a note that later will be improved, and only when ready the author will assign someone.

## How to work with Branches

Every time you'll work on a Issue, you have to create a branch for that particular Issue. The branch naming convention is as follows: `your_initials/#nr-SHORT-DESCRIPTION`, where the `nr` is the issue number, and initials are your name's two letter initials. So, for example: `dg/#23-new-function`, or `dg/#1-new-step`, for me, David Gatti. Thus finding out where to look for additional information regarding branch, knowing who is responsible for which branch, finding all of the branches assigned to a person is easy.

Also, having one branch per Issue, make it easier to review your work by others, sicne they can jsut focus on that one specific chagne for that one specific Issue.

## How to commit

We want our commits to be attached to Issues, so everyone can learn why a given code change was made. To do so, follow these simple rules:

- When you commit, please add a short explanation in the commit message.
- At the end of the commit message please reference the Issue Nr. including the `#` sign, like #23. GitHub will linke the commit with the Issue.
- A description is not necessary but worth adding to add more context.

## How to Pull Request

When you finish working on a Issue the flow goes like this:

- You commit your final code. 
- You close the Issue - this will let the author of the Issue know from your side that you finished working on the Issue.
- You open a Pull Request and attach a reviewer, who is the same person that made the Issue (unless you want someone else to review your code).
- While you wait for the reviewer, start working on the next Issue.

After this moment, all the discussion are in the PR. We do not go back to the closed Issue.

# The GitHub Project Feature

The repositories with the most developers and amount of Issue take advantage of the Project feature that GitHub provides. The goal of course is to keep everything organized while giving a visual cue to help developers to know which Issue or Pull Request is the top priority by looking at the order in which the Issues and Pull Request are organized.

## No need for you to manage Cards

As a developer you don't have to manage the cards, they will either be managed automatically by the status of the card, or by the person responsible for the project.

## In progress status

A card will be created in the In Progress status when a new PR is made, this means that the PR is in review, while also in progress to completion, since at this stage whoever is responsible for the project might ask for changes.

This means that whoever is responsible will assume that if there is no PR open, you are working on the first card on the stack of the `To do` column. (I've used card systems like this before, but this explanation does not clarify the work flow for me. Let's have a quick chat and then clarify the text.)

# Use a GUI, not a CLI!

Lastelly we don't waste time mastering the Git CLI - there is no reason at this point to do so, since the GUI availalbe make it much easier to work with Git. Our prefered Git client is [GitHub Desktop](https://desktop.github.com/), which is free and works very well. Please don't waste working houers to manage Git with a CLI.
