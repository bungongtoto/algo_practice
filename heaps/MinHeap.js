class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }

    add(value) {
        this.heap.push(value);
        this.size++;
        this.bubbleUp();
    }

    popMin() {
        if (this.size === 0) {
            console.log("Heap is empty.")
            return;
        }
        const min = this.heap[0];
        this.heap[0] = this.heap[this.size - 1];
        this.heap.pop();
        this.size--;
        this.heapify();
        return min;
    }

    bubbleUp() {
        let current = this.size - 1;
        let swapCount = 0;
        while (current > 0 && this.heap[getParent(current)] > this.heap[current]) {
            this.swap(current, getParent(current));
            current = getParent(current);
            swapCount++;
        }

        if (this.size == 10000) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }

    heapify() {
        let current = 0;
        let leftChild = getLeftChild(current);
        let rightChild = getRightChild(current);
        let swapCount = 0;

        while (this.canSwap(current, leftChild, rightChild)) {
            if (this.exist(leftChild) && this.exist(rightChild)) {
                if (this.heap[leftChild] < this.heap[rightChild]) {
                    this.swap(current, leftChild);
                    current = leftChild;
                    swapCount++;
                } else {
                    this.swap(current, rightChild);
                    current = rightChild;
                    swapCount++;
                }
            } else {
                this.swap(current, leftChild);
                current = leftChild;
                swapCount++;
            }

            leftChild = getLeftChild(current);
            rightChild = getRightChild(current);
        }

        if (this.size == 9999) {
            console.log(`Heap of ${this.size} elements restored with ${swapCount} swaps`);
        }
    }

    exist(index) {
        return index < this.size;
    }

    canSwap(current, leftChild, rightChild) {
        return (
            (this.exist(leftChild) && this.heap[current] > this.heap[leftChild]) ||
            (this.exist(rightChild) && this.heap[current] > this.heap[rightChild])
        );
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
}

const getParent = (current) => Math.floor((current - 1) / 2);
const getLeftChild = (parentIndex) => (parentIndex * 2) + 1;
const getRightChild = (parentIndex) => (parentIndex * 2) + 2;

module.exports = MinHeap;
