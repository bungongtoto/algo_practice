const LinkedList = require('./LinkedList.js');

const testList = new LinkedList();

for (let i = 1 ; i <= 10; i++){
    testList.addToTail(i);
}
testList.print();

console.log(testList.removeBydata(5));
testList.print();