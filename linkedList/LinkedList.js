const {Node} = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        if (data === null || data === undefined) {
            console.log("input valid data")
            return
        }
        let newNode = new Node(data);
        let headNode = this.head;
        if (headNode === null) {
            this.head = newNode;
        } else {
            newNode.setNextNode(headNode);
            this.head = newNode;
        }
    }

    addToTail(data) {
        if (data === null || data === undefined) {
            console.log("input valid data")
            return;
        }
        let newNode = new Node(data);
        let tailNode = this.head;
        if (tailNode === null) {
            this.head = tailNode;
        } else {
            while (tailNode.getNextNode() !== null) {
                tailNode = tailNode.getNextNode();
            }

            tailNode.setNextNode(newNode);
        }
    }

    removeHead() {
        let headNode = this.head;
        if (headNode === null) {
            return;
        }

        this.head = headNode.getNextNode();
    }

    print(){
        let currNode = this.head;
        let liststring = "<head> "

        while (currNode !== null) {
            liststring += ` ${currNode.data}`;
            currNode = currNode.getNextNode();
        }

        liststring += " <tail>";

        console.log(liststring);
    }
}

MediaSourceHandle.exports = {LinkedList}

const testList = new LinkedList();
testList.addToHead(1);
testList.addToTail(3);
testList.addToTail(4);
testList.addToTail(5);
testList.addToTail(6);
testList.addToHead(2);
testList.print()

