# Code Style

We are very strict with our coding style because we want a uniform style to speed development – everyone knows exactly what to expect. The goal of writing the code this way is to decrease the amount of time it takes for developers to decipher code and eliminate the need to maintain an image of the code in their heads. Reducing these burdens allows developers to focus on the logic of the code, rather than for example deciphering one liners. Also the goal is to write a comment for each line of code, so the coding style needs to allow for this. Packing everything in one line or close together makes it impossible to leave clear comments.

## Why are we so serious about this?

Because clean, clear, commented code is faster to read, understand, reason about, and build upon. This is what gives us the ability to make quick changes and improvements years after the code was finalized. Far in the future, when or another developer returns to the code, it will be very easy to get back in to the groove. This is the key to quality code.

## Complexity is not Cool

We like to say to ourselves that we understand our mushed code, one liners, no comments because the code is `obvious`. Yet, while struggling to read someone else's mushed, one liner no comment code we often think that maybe we are not that smart after all. It's ironic how someone else's code written the in the same way that we wrote our own is difficult to understand. Be kind to your future self returning to the code and other developers by making the code easy to understand by keeping line short, the logic clear, and comments accurate.

### Fancy Functions are not Allowed

Based on the rule that no one-liners are allowed, the following functions should not be used: 

- `.map()`
- `.reduce()`

They fall in to the fancy function category because they hide what is really going in the background and steer developers towards writing one-liner code (called also compact), which produces code that is hard to follow and thus hard to reason about.

These functions force you to visualize what happens behind the scene, and instead of using all your attention to solve a problem you have to keep on thinking what the code does in the background. This is defiantly inefficient use of a human brain.

On the other hand `.forEach()` is allowed because it actually helps you writing easy to understand code, by actually visually simplifying how a `for()` loop looks, and reduces the juggling of variables used just for counting how many times a loop was executed, which is time consuming and prone to error.

The `for()` loop should be used instead of `.forEach()` when you are looking for something in an array and can stop the loop once you found it – thus preserving CPU cycles. Or when you want to loop over a JavaScript Object.

### Spacing

Line separation is the most important tool to help our brain distinguish as soon as possible all the different parts of a block of code. By separating everything the right way, our brains have to do very little work to mentally separate all the mushed code, and it makes it easier to focus on what is important and discard the rest. Instead of keeping a mental map of what is where. 

### Comments

We DO comment 99.9% of our code, meaning almost each line has a comment explaining why that line exists and what it does. We structure our comments like this:

```JavaScript
//
//	1.	Write in the console the word `Hi!`.
//
console.log("Hi!");
```
Things worth noting:

1. The one line separation in the comment on the top and bottom
1. A `tab` between the `#` and the `Nr.`.
1. A `tab` between the `Nr.` and the sentence.
1. A full stop at the end of the sentence informing us humans that this is the end.
1. Immediately bellow we have the one line code.
1. The code ends with a `;` letting us humans know that this is the end of the line, no more code should follow.

At this point you might pull out this famous quote:

> If the code is clear, and uses good type names and variable names, it should explain itself. – by Rob Pike: "Notes on Programming in C".

The argument is that people won't read comments, and compiler don't care about them – and so, why write them? The reality is that people don't like to read bad comments. Our comments are read by other programmers. Not because they have nothing to do, but because they found value in them. For example:

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

Now from just this comment you can imagine what the application might do without needing to read 5000 lines of code and using your time thinking about it to understand what the code actually does and how can you safely change it.

Every comment needs to answer the question: `Why?`.

### Variable Names

Since visual separation is so important to use we also make sure to write variables in a way that makes clear how many words are you dealing with. That is why we do not care about what language tells you to to. We write our variable like so:

```JavaScript
//
//	1.	Create a variable that will hold if we can pass or not to the 
//		next step.
//
let check_gate = true;
```

We use the `_` to visually separate the words so you don't have to unravel something like this `checkGate` in your head.

### Var, Let & Const

In the Back-End and Front-End we only use `let`. We don't use `const` because `const` does not solve any real life problems and just adds confusion. To prepend a variable with `const` is to tell the language that you can't replace a pointer to an object, and that is it. There is no real use for this, or at least we didn't find any, and so we keep it simple.

### Full Stops & Semicolons

Despite some languages not forcing you to use a `;` at the end of a line, we do it anyway, to let us puny humans know that there is no more code after this point in the line. The ';' makes it clear what to expect. Same thing goes with the Full Stop in sentences. We add a full stop to let us humans know that there is no more to come.

### Functions Vs. Callbacks Formatting

Over the years we settled on the following way to write functions and callback functions. For regular function,

```JavaScript
//
//	1.	Say `Hi!` every time you call this function
//
function say_hello()
{
	console.log("Hi!");
}
```
On the other hand this is how we format a callback function:

```JavaScript
//
//	1.	Call the the say_hello() function and wait for what needs to be said.
//
say_hello(function(data) {
	
	console.log(data);	

});
```

In the first version, we add white separation by using the `{}`, while we use a regular empty line to add separation in the when we work with a callback function.


### Arrow function

We limit the use of Arrow Functions; we use them only when we are working on a Class to give a function access to the `context` of the object. They were designed for this scenario. They were not designed to wrtie less code. Don't be cool be clear.

### 80 Column rule

This is a very old rule that was introduced when monitors were expensive and their resolution was poor. Line length was limited to ensure that two files could be viewed and worked on next to each other on one screen.

Even thought the original reason for the 80 column rules is obsolete, the rule is still useful for the following reasons:

- We often work on laptops, so a 2nd monitor is not always available.
- The screen resolutions increased but text size is about the same, since it would not be possible to read text from a 4K monitor. 
- Code projected during a meeting is unlikely to show well if the lines are longer than 80.

We try to adhere to the 80 column rule, but with the following exceptions:

- When we work with HTML, since to adhere to this rule would make the HTML harder to read
- When some times splitting a long line in regular code would make it harder to read.

### Else is not allowed

Eliminating use of else `else` allows for identical functionality with increased clarity, for example:

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

Without using else we can comment each line individually and make sure with more complex code everything is as clear as possible.

Or we can do even better, and to this:

```JavaScript
//
//	1.	By default we assume we want to greet the user.
//
let message = "Hi!";

//
//	2.	If the box was not selected we don't allow the user to continue.
//
if(false)
{
	message = "By!";
}

//
//	->	Display the message.
//
console.log(message);	
```
