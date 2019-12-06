# Programmer

From a programmer’s point of view, the world is incredibly noisy, with a vast number of languages, frameworks, ideas, and approaches. But even with all this noise, there are some fundamental truths we should focus on rather than wasting time with every new fad.

In essence, a CPU doesn't care about trends and a compiler doesn't care about complex frameworks. You just pass instructions to the CPU with the goal of using a simple approach that helps you focus on the problem without distracting you with opinions.

## Complexity is not Cool

You might think we’re crazy as you read our Style Guide. But the truth is that after decades of coding; rewriting entire projects because it was impossible to reason out the code; struggling to add simple features; and so on, we decided that enough was enough. We looked in the mirror and decided that we sucked and drastic change was necessary.

We told ourselves that we understood our mushed code with its one-liners and no comments because the code was so obvious, even as we struggled to read someone else’s mushed, obvious code with its one-liners. Maybe we weren’t so smart after all, because we couldn't understand someone else’s code written in the same way that we wrote ours!

We eventually realized that the issue was in how our minds perceived written text. We started experimenting with how we structured the code, without taking into consideration what the specific language mandated to format the code. And we wound up with an approach that was basic, clear, and future proof.

It’s no longer a struggle to add new features, and when new developers work with the code, they thank us for how we wrote the project because they don't feel stupid as they read our work. So, yes, you might think right now that we’re wrong and you’re right, but trust me – it’s the other way around. :)

# What To Focus On

From a high level concept, focus on the following:

- High-level languages were created for humans, not CPUs.
- You are human, and you are writing code for yourself and others to read.
- Focus on writing clear, well-commented code that’s instantly easy for yourself and others to understand.
- Never add complexity just to make yourself feel superior to others.
- Languages and programming ideas are just tools, not a way of coding. You need to use the right tool for the job; there isn't one way to do everything.
- Forget about what you learned in school and what others are doing:
  - Schools offer computer classes that were designed decades ago for a world in which web apps were unheard of. This same approach is still being taught, as if we’re still making a single app for a single user to install on a single computer.
  - Other developers learned their approach in school and continue to propagate a way of thinking that doesn’t suit what we’re dealing with right now.

# How To Aproach Learninig

Based on the points outlined above, a lot of documentation is generated every day. Programmers have to read and understand it if they want to stay relevant, whether it be a simple API, SDK, or tool. The problem is that the documentation is poorly written. This isn’t done on purpose; sharing knowledge in a clear and simple way is a skill, and being able to make an API doesn't mean you can write good documentation.

So if you don't understand the documentation you’re reading, it’s not your fault. It doesn't mean you’re stupid; it just means that whoever wrote the explanation did a poor job of it. Blame the author, not yourself.

To understand what you’re reading, look for the point, the meaning, what the tool was made for. What's its purpose? What’s the point? Our CEO’s article wrote about [AWS](https://github.com/0x4447/0x4447-article-how-to-think-about-the-AWS-infrastructure) is a good example of this. You don't have to focus solely on the documentation; also try to understand the high-level explanation for the tool’s purpose, even combined with products that people previously built. With time, you should be able to discover the point of the tool and unlock ways to understand and approach learning about it.

# Don't get lost in minutiae

During a job interview in the real world you’ll be asked quirky questions that aren’t related to the quality of your work. They ask these questions to make themselves feel better when you don't know the answer. For example, all numbers in JavaScript are floating point, which means that integers are stored as floats in memory. Is it important to know this when you make APIs, store data in a DB, read from the DB, etc.? No, but there may be cases for which it’s important to know this truth, especially if you deal with big numbers. But 99 percent of the time this isn’t that important, and wasting time on things like this isn’t worth it, although it’s still good to know and be aware of things like this. If your project requires it, dig deep to understand and properly use the new knowledge. The knowledge is out there, just a Google search away. Not knowing in this day and age doesn't mean you’re unable to learn new information.

# Coding principles

This is a list of ideas that are worth following as you work at 0x4447:

- No prototypes. Just make the product, step by step. Polish it as you go. Don’t depend on polish happening later. Constantly maintain shippable code.
- Keep your code absolutely simple. Keep looking at your functions and determine how you can further simplify them.
- Great tools help make great products. Spend as much time as possible on tools.
- We are our own best testing team. We should never allow anyone else to experience bugs or see products crash. Don’t waste others’ time. Test thoroughly before checking in your code.
- Fix bugs as soon as you see them. Don’t continue on. If you don’t fix bugs, your new code will be built on a buggy codebase and produce an unstable foundation.
- Code transparently. Comment each line, no matter how trivial it seems. Don’t treat your code like a black box, because if you do, the project will go off the rails and cause delays.

# How to code

- No DB relation. Just use left join to get the data.
- No one-liners. Don't make the code more difficult to reason about, which also makes it hard to write comments for each action.
- Match the project’s style.
- Write childlike code; avoid complicated and cool things. Keep it simple and streamlined.

# Few Words from someone else

The following questions was asked on Quora once "**What are some things that only someone who has been programming 20-50 years would know?**" and this reply was givven:

> Everything in software development has already been invented. People just keep rediscovering it and pretending they invented it. Whatever you think is so cool and new, was copied from Smalltalk, or HAKMEM, or Ivan Sutherland, or Douglas Engelbart, or early IBM, or maybe Bell Labs.
>
> Don’t trust the compiler. Don’t trust the tools. Don’t trust the documentation. Don’t trust yourself.
>
> We don’t need any more computer languages. Still, you will run right off and invent another one. Let me guess, your amazing new language is implemented in C, and therefore it uses IEEE-754 math and fixed-precision integers. Your amazing new language is broken.
>
> Maintaining code is harder than writing it. Writing lots and lots of new code can be a mark of laziness.
>
> You have been taught to program as though memory, processor time, and network bandwidth are all free and infinite. It isn’t, it isn’t, and it isn’t. Read the rest of Knuth’s paragraph about premature optimization.
>
> You’re going to forget what your code does in a few months. Make it ridiculously easy to read.
>
> Sometimes, all you need is a one-liner in sed.
>
> Beware of programmers who speak in absolutes, such as My Method Is Always Better Than Yours. Programming is an art, not a religion.
>
> Arrogance is not talent.
>
> If you know you will do a fixed sequence of steps more than ten times, automate it.
>
> Backing it up is one thing. Restoring it is another.
>
> Just because it works on your machine does not mean there is not a bug. -Piers Sutton
>
> Wait for the point-one release of development tools before installing them. Let other people be guinea pigs.
>
> Good programmers write good code. Great programmers write no code. Zen programmers delete code.
>
> No matter how many managers are screaming at you, the first step is to reliably replicate the bug.
>
> Sooner or later, you will meet some older man who has been around for a while. At some point, this man will lecture you about the Laws of Programming. Ignore this man entirely.

by [John Byrd](https://www.quora.com/What-are-some-things-that-only-someone-who-has-been-programming-20-50-years-would-know/answer/John-Byrd-2?share=1)

# GitHub setup

### Configuration

```
] git config --global user.name "First Last"
```
```
] git config --global user.email user@domain.com
```

### Adding timeout to your credentials

If you don't want to re-enter the same credentials to push code to the repo, you can set a timeout of one hour so Git will remember your credentials and reuse them for the amount of time you set.

```
] git config --global credential.helper 'cache --timeout=3600'
```

### Initialize Repo with Remote

This chain of commands will initialize a Git, add a remote, create a basic .gitignore, commit the code with a default message, and push the code to GitHub.

```
git init &&
git remote add origin https://github.com/PATH.git &&
echo "node_modules/" >> .gitignore &&
git add . &&
git commit -m "Init" &&
git push --set-upstream origin master --force
```

# How to work with GitHub

### How to work with Issues

Anyone can create an Issue for any repo and can assign anyone else to it.

- Assigning someone to an Issue means that this person is responsible for working or replying to it. If more than one person is assigned, they all need to figure out who works on the Issue based on the skill it requires.
- If an issue doesn’t have anyone attached to it, it’s an unfinished Issue and a note that will be improved later. The author will assign someone only when ready.

### How to work with Branches

Every time you'll work on an Issue, you have to create a Branch for that particular Issue. Branches are named according to the following format: `initials_issue_nr`. The nr. is the Issue number. For example: `dg_issue_23`, or `dg_issue_1`. This makes it easy to see who owns the Issue, and where you can find additional information about it.

### How to commit

We want our commits to be attached to Issues, so everyone can learn why a given code change was created. To do so, follow these simple rules:

- When you commit, please add a short description.
- Please reference the Issue Nr. and include the `#` sign at the end of the description.

This is done so everyone can quickly determine what the commit is about. If they want more details, they can check the Issue.

### How to Pull Request

When you finish working on an Issue, the flow goes like this:

- Commit your last code and close the Issue. This lets the Issue’s author know from your side that you’ve finished working on it.
- Open a Pull Request and attach a reviewer. This is the same person that made the Issue, unless you want someone else to review your code.
- You wait for the reviewer and start working on the next Issue.

After this moment, all discussion regarding the PR will be in the PR thread. We don’t go back to the closed Issue.

# IDE Setup

To keep our commits as clean as possible, we always make sure that whatever IDE we use has the following settings:

- Use tabs instead of spaces.
- Remove all trailing spaces when saving files.
- Set Word Wrap Column to 80.

# Coding Style

We’re very strict about our coding style, and we do our best to follow it. This means that you’re free to point out any inconsistencies in coding style to other developers (anyone who commits code).

## Why are we so serious about this?

Because when code is cleanly written, it’s easier to read, understand, and reason about it. This enables us to quickly make changes and improvements, even years after the code is finalized. When team members leave and then return, this makes it much easier to get back into the groove. And this is the key to quality code.

### Fancy Functions are not Allowed

Based on the rule that no one-liners are allowed, the following functions should not be used:

- `.map()`
- `.reduce()`

They fall into the fancy function category because they hide what’s really going in the background and steer developers toward writing one-liner code (also known as compact code). This produces code that’s hard to follow and thus hard to reason about.

Functions such as these force you to visualize what’s happening behind the scenes, so instead of focusing all of your attention on solving a problem, you’re thinking about what the code is doing in the background. This is definitely an inefficient way to use a human brain.

On the other hand, `.forEach()` is allowed, because it does help you write easy-to-understand code by visually simplifying how a `for()` loop looks. It also reduces how much you have to juggle variables that are used only for counting loop executions, which is time consuming and prone to error.

The `for()` loop should be used instead of `.forEach()` when you are looking for something in an array and want to stop the loop once you find it – thus preserving CPU cycles. Also use it when you want to loop over a JavaScript Object.

### Spacign

Line separation is the most important tool that helps our brains distinguish all the different parts of a block of code as quickly as possible. Everything is separated the right way, so our brains have to do very little work to mentally separate all the mushed code. It makes it easier to focus on what’s important and discard the rest without having to try to keep a mental map of what’s where.

### Comments

We comment 99.9 percent of our code, meaning that almost every line has a comment explaining why that line exists in the project. We structure our comments like this:

```JavaScript
//
//	1.	Write in the console the word `Hi!`.
//
console.log("Hi!");
```
Things worth noting:

1. The one-line separation in the comment on the top and bottom
1. A `tab` between the `#` and the `Nr.`.
1. A `tab` between the `Nr.` and the sentence.
1. A full stop at the end of the sentence informing us humans that this is the end.
1. Imeedialy bellow we have the one line code.
1. The code ends with a `;` letting use humans know that this is the end of the line, no more code should follow in the line.

At this point, you might pull out this famous quote:

> If the code is clear, and uses good type names and vriable names, it should explain itself. – by Rob Pike: "Notes on Programming in C".

The argument is that people don't read comments, and compilers don't care about them, so why write them? The reality is that people don't like to read bad comments. Programmers do read our comments, and we get countless thanks from them. This isn’t because they have nothing to do; it’s because they find value in them. For example:


```JavaScript
//
//	1.	add one to i
//
i = i + 1;
```
Vs.

```JavaScript
//
//	1.	We increment this variable by one because... we are counting how
//		many times a user clicked the red button, and we want to limit
//		how many times they can do so.
//
i = i + 1;
```

This one simple line lets you instantly imagine what the application might do. It eliminates the need for reading 5000 lines of code, saving you the time it would take to think through what the code actually does.

Every comment needs to answer the question `Why?`.

### Variable Names

Since visual separation is so important, we ensure that all variables are written in a way that clarifies how many words you’re dealing with. That’s why we don’t care about what each language tells you to do. We write our variables like so:

```JavaScript
//
//	1.	Create a variable that will hold if we can pass or not to the
//		next step.
//
let check_gate = true;
```

We use the _ to visually separate the words so you don't have to unravel something like this checkGate in your head. We like it when the text editor helps us with what our brains aren’t good at!

### Var, Let & Const

We only use let in the back end, and we only use var in the front end (until we can reliably use let). We don't use const because it doesn’t solve any real-life problems and just leads to more confusion. To prepend a variable with const is to tell the language that you can't replace a pointer to an object, and that’s it. There’s no real use for this, or at least, we didn't find any. So we keep it simple.

### Full Stops & Semicollons

Some languages don’t force us to use a semicolon at the end of a line, but we do it anyway. It lets us, the puny humans, know that there’s no more code after this point in the line. We know exactly what to expect. The same thing goes with the full stop in sentences – especially with the single-sentence code. This lets us know that there is no more to come.

### Functions Vs. Callbacks Formating

Over the years, we’ve settled on the flowing way of writing functions and callback functions. Here’s how to format a regular function:

```JavaScript
//
//	1.	Say `Hi!` every time you call this function
//
function say_hello()
{
	console.log("Hi!");
}
```
And here’s how we format a callback function:

```JavaScript
//
//	1.	Call the the say_hello() function and wait for what needs to be said.
//
say_hello(function(data) {

	console.log(data);

});
```

In the first version, we add white separation by using the `{}`. We use a regular empty line to add separation when working with a callback function.

### Arrow function

We don’t use arrow functions. The only exception to this rule is to give a function access to the `context` of the object when working on a class. They were designed for this scenario, and we don't avoid them because we'd like to be able to type less code. We’d rather lose a bit of extra skin on the tips of our fingers if it ensures that we’re clear about what’s what.

### 80 Column rule

This is a very old rule that was introduced when programming was invented. Its purpose was to limit how long each line is so you can put two files side by side and work on both together on the same screen. This was when monitors were expensive and the resolution was far from what we have right now.

Nevertheless, this rule remains useful to this day for the following reasons:

- We now have more laptops than desktops, so a second monitor is not always available.
- Screen resolutions have certainly improved, but we keep the size of our text the same, since it would be impossible to read text from a 4K monitor.

We try to adhere to the rule, but there are exceptions:

- Adhering to this rule when working with HTML makes it harder to read.
- When splitting a long line into regular code, following the rule would make it harder to read.

### Else is not allowed

With the goal of keeping to our rule of making our code as clear as possible, we realized that we could achieve the same functionality and increase clarity by getting rid of `else`. For example:

```JavaScript
//
//	1.	We check if the user selected the box, and depending on the
//		result we display two different messages.
//
if(true)
{
	console.log("Hi!");
}
else
{
	console.log("By!");
}
```
Vs.

```JavaScript
//
//	1.	If the box was selected we greet them and allow them to move one.
//
if(true)
{
	console.log("Hi!");
}

//
//	2.	If the box was not selected we don't allow the user to continue.
//
if(false)
{
	console.log("By!");
}
```

Eliminating else enables us to comment each individual line, ensuring that everything is as clear as possible, even with more complex code.

