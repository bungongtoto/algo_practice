const {LinkedList} = require('./LinkedList')

function reverseLinkedList(list) {

    let prev = null;
    let current = list.head;
  
    while (current) {
      // save next node or loose it
      let temp = current.getNextNode()
      // reverse the pointer
      current.setNextNode(prev);
      // increment the previous to current
      prev = current

      //increment the current to next node node or null
      current = temp
    }
  
    return prev;
}

const testList = new LinkedList();
testList.addToTail(1);
testList.addToTail(2);
testList.addToTail(3);
testList.addToTail(4);
testList.addToTail(5);


testList.print()
console.log(reverseLinkedList(testList))