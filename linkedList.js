import Node from "./node.js";

export default class LinkedList {
  constructor() {
    this._head = null;
  }

    
    append(value) {
    const newNode = new Node(value);

    if (!this._head) {
      this._head = newNode;
      return;
    }

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    current.nextNode = newNode;
  }

   prepend(value) {
    const newNode = new Node(value);
    newNode.nextNode = this._head;
    this._head = newNode;
  }

  size() {
    let count = 0;
    let current = this._head;

    while (current) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

   head() {
    return this._head ? this._head.value : undefined;
  }

   tail() {
    if (!this._head) return undefined;

    let current = this._head;
    while (current.nextNode) {
      current = current.nextNode;
    }

    return current.value;
  }

  at(index) {
    if (index < 0) return undefined;

    let current = this._head;
    let count = 0;

    while (current) {
      if (count === index) return current.value;
      current = current.nextNode;
      count++;
    }

    return undefined;
  }

   pop() {
    if (!this._head) return undefined;

    const value = this._head.value;
    this._head = this._head.nextNode;
    return value;
  }

  contains(value) {
    let current = this._head;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  findIndex(value) {
    let current = this._head;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return -1;
  }

   toString() {
    if (!this._head) return "";

    let current = this._head;
    let result = "";

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    return result + "null";
  }

   insertAt(index, ...values) {
    if (index < 0 || index > this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (values.length === 0) return;

    if (index === 0) {
      for (let i = values.length - 1; i >= 0; i--) {
        this.prepend(values[i]);
      }
      return;
    }

    let current = this._head;
    let count = 0;

    while (count < index - 1) {
      current = current.nextNode;
      count++;
    }

    const nextNode = current.nextNode;

    let firstNewNode = null;
    let lastNewNode = null;

    values.forEach((value) => {
      const newNode = new Node(value);

      if (!firstNewNode) {
        firstNewNode = newNode;
      } else {
        lastNewNode.nextNode = newNode;
      }

      lastNewNode = newNode;
    });

    current.nextNode = firstNewNode;
    lastNewNode.nextNode = nextNode;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) {
      throw new RangeError("Index out of bounds");
    }

    if (index === 0) {
      return this.pop();
    }

    let current = this._head;
    let count = 0;

    while (count < index - 1) {
      current = current.nextNode;
      count++;
    }

    const removedValue = current.nextNode.value;
    current.nextNode = current.nextNode.nextNode;

    return removedValue;
  }
}