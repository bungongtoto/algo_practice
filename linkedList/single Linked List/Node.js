/**
 * @class Node
 * @param data
 * @method getNextNode @returns {Node}
 * @method setNextNode
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }

  getNextNode() {
    // returns the value of the next property of the object instance.
    return this.next;
  }

  /**
   *
   * @param {Node} node
   */

  setNextNode(node) {
    if (node instanceof Node || node === null) {
      this.next = node;
    } else {
      throw new Error("next node most be a member of the Node class");
    }
  }
}

module.exports = Node;
