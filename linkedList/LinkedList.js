const {Node} = require('./Node')

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(data) {
        //check validity of data
        if (data === null || data === undefined) {
            console.log("input valid data")
            return
        }
        //create a new node
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
        //check validity of data of new node
        if (data === null || data === undefined) {
            console.log("input valid data")
            return;
        }
        //instantaite a new node with valid data
        let newNode = new Node(data);
        //assume the tail node is the head node
        let tailNode = this.head;

        if (tailNode === null) { // when the list is empty adding to tail is same like seting a head node
            this.head = newNode;
        } else {
            while (tailNode.getNextNode() !== null) { // used to navigate to the tail node which is the node which is pointing to null
                tailNode = tailNode.getNextNode();
            }

            tailNode.setNextNode(newNode); // finall set next to current tail node to the new node making it the new tail node
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


module.exports = {LinkedList}
