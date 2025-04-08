const Node = require("./Node.js");

class LinkedList {
  constructor() {
    this.head = null;
  }
  /**
   * create a new node instance with the data
   * if head is null, direct place new node as head
   * else set the new node to point to current head and set head to the new node
   * @param {*} data
   */
  addToHead(data) {
    const currentHead = this.head;
    this.head = new Node(data);
    if (currentHead) {
      this.head.setNextNode(currentHead);
    }
  }

  /**
   * if there is node in list add the new node created to the head
   * navigate to the tail node(hint tail node points to null)
   * set the next pointer of the tail node to the newly created node
   * @param {*} data
   */
  addToTail(data) {
    let tail = this.head;
    if (!tail) {
      this.head = new Node(data);
    } else {
      while (tail.getNextNode() !== null) {
        tail = tail.getNextNode();
      }
      tail.setNextNode(new Node(data));
    }
  }
  /**
   * if list is empty return
   * grap the next node of the head element and set it as the value of head property
   * @return {Node}
   */
  removeHead() {
    const removedHead = this.head;
    if (!removedHead) {
      return;
    }

    this.head = removedHead.getNextNode();
    return removedHead;
  }

  /**
   * @returns {Node}
   */
  removeTail() {
    let removedTail = this.head;
    let prevNode = null;
    if (!removedTail) {
      return;
    }

    while (removedTail.getNextNode() !== null) {
      prevNode = removedTail;
      removedTail = removedTail.getNextNode();
    }

    prevNode.setNextNode(null);
    return removedTail;
  }
  /**
   *
   * @param {*} data
   * @returns {Node}
   */
  removeBydata(data) {
    if (this.head === null) {
      return;
    }

    let found = false;
    let nodeRemoved = this.head;
    let prevNode = null;

    while (nodeRemoved !== null) {
      if (nodeRemoved.data === data) {
        found = true;
        break;
      }
      prevNode = nodeRemoved;
      nodeRemoved = nodeRemoved.getNextNode();
    }

    if (found) {
      if (prevNode === null) {
        return this.removeHead();
      } else if (nodeRemoved.getNextNode() === null) {
        return this.removeTail();
      } else {
        prevNode.setNextNode(nodeRemoved.getNextNode());
        return nodeRemoved;
      }
    } else {
      throw new Error(`There is No node in list with data ${data}`);
    }

    // while(tail.getNextNode() !== null){
    //     tail = tail.getNextNode();
    // }

    // if (this.tail.data === data){
    //     nodeRemoved = this.removeTail();
    //     return nodeRemoved;
    // }
  }
  print() {
    let output = "<head> ";
    let current = this.head;
    while (current) {
      output += current.data + " ";
      current = current.getNextNode();
    }
    output += "<tail>";
    console.log(output);
  }
}

module.exports = LinkedList;
