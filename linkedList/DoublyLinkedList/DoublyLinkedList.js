const Node = require('./Node.js');

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    /**
     * 
     * @param {*} data 
     * @returns 
     */
    addToHead(data) {
        //check validity of data
        if (data == null || data == undefined) {
            console.log("you most provide valid data");
            return;
        }

        // instantaite the new node 
        const newNode = new Node(data);
        const currentHead = this.head;
        //if there is no element in the list
        if (!currentHead) { // the new node will be the head and tail of the list
            this.head = newNode;
            this.tail = newNode;

            return;
        }

        //if there is a head
        currentHead.setPreviousNode(newNode);
        newNode.setNextNode(currentHead);
        this.head = newNode;
    }

    /**
     * 
     * @param {*} data 
     * @returns 
     */
    addToTail(data) {
        //validate data
        if (data == null || data == undefined) {
            console.log("input valid data");
            return;
        }

        // instantaite the new node 
        const newNode = new Node(data);
        const currentTail = this.tail;

        // if there is no tail implies list is empty so set the list head and tail to new node
        if (!currentTail) {
            this.tail = newNode;
            this.head = newNode;
            return;
        }

        //if tail exist
        currentTail.setNextNode(newNode);
        newNode.setPreviousNode(currentTail);
        this.tail = newNode

    }
    /**
     * 
     * @returns {*}  [removed head data]
     */
    removeHead() {
        const removedHead = this.head;

        //if there is no head means list is empty so we return
        if (!removedHead) {
            console.log("List is empty.")
            return;
        }

        // if there is head
        this.head = removedHead.getNextNode();
        if (this.head) {
            this.head.setPreviousNode(null)
        }

        if (removedHead === this.tail){
            this.removeTail();
        }

        return removedHead.data
    }

    removeTail() {
        const removedTail = this.tail;

        if(!removedTail){
            console.log("List is empty");
            return;
        }

        this.tail = removedTail.getPreviousNode();

        if(this.tail){
            this.tail.setNextNode(null);
        }

        if (removedTail === this.head){
            this.removeHead();
        }

        return removedTail.data;
    }
    removeByData(data) { 
        let removedNode= null;
        let currentNode = this.head;
        // lets get the node to remove by looping through the list
        while (currentNode !== null){
            if (currentNode.data === data){
                removedNode = currentNode;
                break;
            }

            currentNode = currentNode.getNextNode()
        }

        if (removedNode === null){
            console.log("node not found");
            return
        }

        if (removedNode === this.head){
            this.removeHead()
        }else if (removedNode === this.tail){
            this.removeTail()
        }else{
            const previousNode = removedNode.getPreviousNode();
            const nextNode = removedNode.getNextNode();
            previousNode.setNextNode(nextNode);
            nextNode.setPreviousNode(previousNode);
        }

        return removedNode;
    }
    print() {
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

module.exports = { DoublyLinkedList }