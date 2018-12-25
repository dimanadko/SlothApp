'use strict';
// import 'es6-symbol/implement';

const maxHeapify = Symbol('maxHeapify');
const minHeapify = Symbol('minHeapify');
const maxInsert = Symbol('maxInsert');
const minInsert = Symbol('minInsert');

class BinaryHeap {
  constructor(data, key, isMax) {
    this.heap = data;
    this.size = 0;
    this.key = key;
    this.isMax = isMax;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
  }

  buildHeap() {
    this.size = this.heap.length;
    const heapify = this.isMax ? maxHeapify : minHeapify;
    for (let i = Math.floor(this.heap.length / 2); i > -1; i--)
      this[heapify](i);

    return this;
  }

  [minHeapify](index) {
    const leftChild = this.leftChild(index);
    const rightChild = this.rightChild(index);
    let peak = index;

    if (
      leftChild < this.size &&
      this.heap[leftChild] &&
        this.heap[leftChild][this.key] < this.heap[peak][this.key]
    )
      peak = leftChild;

    if (
      rightChild < this.size &&
        this.heap[rightChild] &&
        this.heap[rightChild][this.key] < this.heap[peak][this.key]
    )
      peak = rightChild;

    if (peak !== index) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[peak];
      this.heap[peak] = temp;
      this[minHeapify](peak);
    }
  }

  [maxHeapify](index) {
    const leftChild = this.leftChild(index);
    const rightChild = this.rightChild(index);
    let peak = index;

    if (
      leftChild < this.size &&
        this.heap[leftChild][this.key] > this.heap[peak][this.key]
    )
      peak = leftChild;

    if (
      rightChild < this.size && (
        this.isMax ?
          this.heap[rightChild][this.key] > this.heap[peak][this.key] :
          this.heap[rightChild][this.key] < this.heap[peak][this.key]
      )
    )
      peak = rightChild;

    if (peak !== index) {
      const temp = this.heap[index];
      this.heap[index] = this.heap[peak];
      this.heap[peak] = temp;
      this[maxHeapify](peak);
    }
  }

  insert(value) {
    const insert = this.isMax ? maxInsert : minInsert;
    this[insert](value);
    return value;
  }

  [minInsert](value) {
    let index = this.size++;
    this.heap.push(value);
    let parent = this.parent(index);
    while (index > 0 && this.heap[parent][this.key] > value[this.key]) {
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = this.parent(index);
    }
    this.heap[index] = value;
  }

  [maxInsert](value) {
    let index = this.size++;
    this.heap.push(value);
    let parent = this.parent(index);
    while (index > 0 && this.heap[parent][this.key] < value[this.key]) {
      this.heap[index] = this.heap[parent];
      index = parent;
      parent = this.parent(index);
    }
    this.heap[index] = value;
  }

  extract() {
    if (this.size < 1) return null;
    const root = this.heap[0];
    this.heap[0] = this.heap[--this.size];
    this.heap.pop();
    const heapify = this.isMax ? maxHeapify : minHeapify;
    this[heapify](0);
    return root;
  }
}

module.exports = { BinaryHeap };
