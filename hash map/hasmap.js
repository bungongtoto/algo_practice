const LinkedList = require("../linkedList/single Linked List/LinkedList");
const { Node } = require("../linkedList/single Linked List/Node");

class HasMap {
    constructor(size = 10) {
        this.hasmap = new Array(size).fill(null).map(() => new LinkedList());
    }

    hash(key){
        let hasCode = 0;

        for (let i = 0; i < key.length; i++){
            hasCode += hasCode + key.charCodeAt(i);
        }

        return hasCode % this.hasmap.length;
    }

    assign(key, value){
        const arrayIndex = this.hash(key);
        const linkedList = this.hasmap[arrayIndex];

        // if the linked list head empty implies list is empty so no value pair assigned in the index
        if (linkedList.head === null){
            console.log(`adding Key: ${key} with Value: ${value}`)
            linkedList.addToHead({key, value});
            return;
        }

        //else we will have to loop to  the end and of list and add
        //if we find the same key we update
        let current = linkedList.head;

        while(current){
            if(current.data.key === key){//updating existing key if exist
                console.log(`updating Key: ${key} with Value: ${value}`)
                current.data = {key, value};
                break;
            }

            if(!current.next){//assign a new key if no exist
                console.log(`adding Key: ${key} with Value: ${value}`)
                current.next = new Node({key,value});
                break;
            }

            current = current.next;
        }


    }

    retrieve(key){
        const arrayIndex = this.hash(key);
        let current = this.hasmap[arrayIndex].head;

        while(current){
            while(current){
                if (current.data.key === key){
                    console.log(`Retrieving ${current.data.value} from index ${arrayIndex}.`);

                    return current.data.value;
                }
                current = current.next;
            }
            
            return null;
        }
    }
}


module.exports = HasMap;