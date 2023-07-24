class Stack {

  constructor() {
    this.items = []
  }

  push(item) {
    this.items.push(item)
  }

  pop() {
    if (this.isEmpty()) {
      return 'This Stack is empty'
    }
    return this.items.pop()
  }

  isEmpty() {
    return this.items.length === 0
  }
}

const stack = new Stack()
stack.push(Math.random())
stack.push(Math.random())
stack.push(Math.random())


console.log(stack.items)
console.log(stack.pop())
console.log(stack.items)