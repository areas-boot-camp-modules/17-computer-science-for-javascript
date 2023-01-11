// create the Stack class with two methods to remove and add an element
class Stack {
  // No array or ...?
  constructor(container = []) {
    this.container = container
  }
  // push()
  addToStack(element) {
    return this.container.push(element)
  }
  // pop()
  removeFromStack() {
    return this.container.pop()
  }
}

module.exports = Stack;
