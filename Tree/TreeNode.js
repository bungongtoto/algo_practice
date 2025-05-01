class TreeNode {
    constructor(data){
        this.data = data;
        this.children = []
    }

    //addChid
    addChild(child){
        if (child instanceof TreeNode){
            this.children.push(child);
        }else {
            this.children.push(new TreeNode(child))
        }
    }

    //removeChild
    removeChild(childToRemove){
        const length = this.children.length;

        this.children.filter(child => {
            return childToRemove instanceof TreeNode ? child !== childToRemove : child.data !== childToRemove;
        })

        if (length === this.children.length){
            this.children.forEach(child => child.removeChild(childToRemove));
        }
    }
    //print
    print(level = 0){
        let result = '';
        for (let i = 0; i < level; i++){
            result += '--';
        }
        console.log(`${result}${this.data}`);

        this.children.forEach(child => child.print(level + 1));
    }
    //depthFirstTraversal
    depthFirstTraversal(){
        console.log(this.data);
        this.children.forEach(child => child.depthFirstTraversal());
    }
    //breadthFirstTraversal
    breadthFirstTraversal(){
        const queue = [this];

        while (queue.length > 0){
            const current = queue.shift();
            console.log(current.data);
            queue = queue.concat(current.children);
        }
    }
}

module.exports = TreeNode;