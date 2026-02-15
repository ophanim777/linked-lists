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