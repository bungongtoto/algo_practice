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
        this.previous = null;
    }

    /**
     *
     * @returns {Node}
     */
    getNextNode() {
        // returns the value of the next property of the object instance.
        return this.next;
    }

    /**
     *
     * @returns {Node}
     */
    getPreviousNode() {
        // returns the value of the previous property of the object instance.
        return this.previous;
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

    /**
     *
     * @param {Node} node
     */

    setPreviousNode(node) {
        if (node instanceof Node || node === null) {
            this.previous = node;
        } else {
            throw new Error("previous node most be a member of the Node class");
        }
    }
}

module.exports = Node;
