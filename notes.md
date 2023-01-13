# Module 17: Computer Science for JavaScript
- [17.1: How Does JavaScript Execute?](#17.1-how-does-javascript-execute)
- [17.2: Functional Programming in JavaScript](#17.2-functional-programming-in-javascript)
- [17.3: Algorithms, Recursion, and the Technical Interview](#17.3-algorithms-recursion-and-the-technical-interview)

---

## 17.1: How Does JavaScript Execute?
- We’ve been learning practical stuff.
- Now we’ll learn more conceptual stuff.
- This will mean we can write better code.
- Understanding Computer Science will help us be better developers.
- Also, these concepts will help with interviews!
- Computational thinking.
- Two main concepts: Algorithms and Data Structures.
- Big O?
- Simple search => 0(n). It has to do with efficiency.
- Data Structures: arrays and dictionaries (objects).
- Arrays are more efficient.

---

### Global Execution Context
- Follow the thread of execution.
- JS only does one thing at a time, but it can jump around.
- Global execution is like a variable.
- A function is defined/declared, but the code isn’t run until the function is called.
- Sometimes code pauses, for example, to alert the user in the browser (standard alert, not something custom).
- Know the difference between global and functional execution context.

---

### Functional Execution Context
- Now we’re going to talk about `this`!
- This is confusing.
- If `this` is global, it’s the window.
- There’s also a `that`!
- It’s different with objects and arrow functions.

```
const globalThis = this
function myFuncA() {
	...
}

myFuncA()

const objB = {
	myFuncB: () => {
			console.lgo(`globalThis`, globalThis)
			console.log(`myFuncBThis`, this)
			console.log("myFuncB: ", globalThis === this)
	}
}

objB.myFuncB()

```

- For the activity, I could also keep `total` inside a function, `return total`, call the function, but make that equal a new variable.

```
function sum() {
	let total = 0
	// do something with total
	return total
}

const newTotal = sum()
```

- The above is better than moving total out of function, for some reason. I guess it’s better to keep total within scope of when it’s used.

---

### Stacks
- LIFO = Last in, first out.
- Think about stacking plates!
- There’s a function stack!
- In JS, an array can be a list, stack, or queue.

```
class Stack {

constructor (container = []) {
	this.container = container
}

addToStack(item) {
	return this.container.push(item)
}

removeFromStack() {
	return this.container.pop()
}

module.exports = Stack
```

![](./assets/images/stack.png)

---

### Queues
- FIFO: First in, first out.
- Works like a line to get coffee. First person in line is the first to get coffee.
- Stack examples were like push() and pop(). Does something to the end of the array.
- push() and shift().
- pop() takes something from the end.
- shift() takes something from the start. Shifts the queue (takes the first person from the line).
- Stacks and queues are arrays.
- In short, for stacks, use `push()` and `pop()`, and for queues use `push()` and `shift()`.
- In other words, the `push()` is always the same, but it differs when you try to remove something from a stack (LIFO) or a queue (FIFO).
- I’m not quite sure what the point of these concepts are, just yet.

```
class Queue {

constructor (container = []) {
	this.container = container
}

addToQueue(item) {
	return this.container.push(item)
}

removeFromQueue() {
	return this.container.shift()
}

module.exports = Queue;
```

![](./assets/images/queue.png)

---

### Callback Queue
- What is the thread of execution?
- As soon as you set a timeout, it calls a queue.
- Priority queue? Normal queue, but then there’s another queue?
- `setTimeout()` of 0 means first (first priority, but after all the other code is run). Code runs, then stuff with `setTimeout()`, in their order.
- This is used a lot in React.
- `setTimeout()` stores callbacks.
- `fetch()` goes in a queue?

![](./assets/images/callback-queue.png)

---

## 17.2: Functional Programming in JavaScript

### Higher Order Functions
- Functions that accepts functions as a parameter.
- Or they can return functions.
- What’s a lambda?
- Very popular these days, apparently.
- JS is one of the first languages to popularize this.
- For example, I can use map as a higher-order function, pass another function to it, and have it apply map to the function.
- When you pass a function, it’s usually called a callback.

```
function findAverage(accumulator, currentValue, index, array) {
	const newSum = accumulator + currentValue
	if (index === array.length-1) {
		const average = newSum / array.length
		return average
	}
	return newSum
}
``` 

---

### Closures
- Closures are stacking.
- Not really clear what closures are.

```
function bankAccount() {
	const checking = 400
	const savings = 1000
	return {
		displayFunds: () => {
			console.log(`You have $${checking} in your checking account and $${savings} in your savings account.`)
		}
		const totalFunds = checking + savings
		return () => {
			console.log(`Your total funds are ${totalFunds}.`)
		}
	}
}

```

- Closures make use of scope.
- It’s a collection of scopes, or a union of it.
- Closures are just a stack of scopes.
- Still confusing!

---

### Factory Functions
- Makes use of higher-level functions and closures.
- Like classes, and are potentially more flexible than classes.

```
function createUser(name, age, city) {

	const user = {
		name,
		age,
		city,
	}

	return {
		introduceSelf: () => {
			return console.log(`Hi, I’m ${user.name}.`)
		},
		location: () => {
			return console.log(`I live in ${user.city}.`)
		},
		// ... Can add a bunch more.
	}
	
}
```

---

### Factory vs Constructor
- For factory functions, it’s clear what each does.
- Constructors, you sometimes have to look at the thing that it’s extending (sub-class).
- Factory functions are like legos, where you take different object to build something.
- With constructors, there’s only one parent (no multiple inheritance). It’s available in other languages. Factory functions give us a way to inherit from multiple things.
- Once you get the hang of it, it’s easy to go back and forth between factory functions and classes.
- If you learn TypeScript, classes are much more powerful, and the direction the industry is moving.

```
const phoneCall = (state) => {
	call: () => console.log(`${state.name}’s Phone: ${state.ringTone}`),
}
// ...
```

---

### Event Delegation Handling
- You can add an event handler to a container that contains many elements.
- Any time you click something, it bubbles up each parent.
- You add it to a button to catch the bubbling from elements.

---

## 17.3: Algorithms, Recursion, and the Technical Interview
- 

---