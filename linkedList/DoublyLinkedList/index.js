const {DoublyLinkedList} = require('./DoublyLinkedList.js');

const myList  = new DoublyLinkedList();

myList.addToTail(1);
myList.addToTail(2);
myList.addToTail(3);
myList.addToTail(4);
myList.print()
myList.removeByData(2)
myList.print()