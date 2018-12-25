'use strict';

const { BinaryHeap } = require('./tools');
const { Task } = require('./task.js');

class TaskList {
  constructor(data = [], key = 'dueDate', isMax = false) {
    this.noReleaseDate = true;

    for (let i = 0; i < data.length; i++) {
      const task = data[i];
      if (!TaskList.validate(task)) throw new Error('TypeError');
      if (task.releaseDate !== 0)
        this.noReleaseDate = false;
    }

    this.heap = new BinaryHeap(data, key, isMax);
  }

  static validate(task) {
    return task instanceof Task && task.validate();
  }

  getData() {
    return this.heap.heap;
  }
  setData(data) {
    this.heap.heap = data;
  }

  getLength() {
    return this.heap.heap.length;
  }

  setKey(key) {
    this.heap.key = key;
  }
  getKey() {
    return this.heap.key;
  }

  getDirection() {
    return this.heap.isMax;
  }
  setDirection(isMax) {
    return this.heap.isMax = isMax;
  }

  getRoot() {
    return this.heap.heap[0];
  }

  sort(key, isMax) {
    if (key !== undefined) this.setKey(key);
    if (isMax !== undefined) this.setDirection(isMax);

    return this.heap.buildHeap();
  }

  insert(value) {
    if (TaskList.validate(value)) {
      if (value.releaseDate !== 0)
        this.noReleaseDate = false;
      this.heap.insert(value);
    }

    return null;
  }

  extract() {
    return this.heap.extract();
  }

  add(value) {
    if (TaskList.validate(value)) {
      if (value.releaseDate !== 0)
        this.noReleaseDate = false;
      this.heap.heap.push(value);
    }

    return null;
  }
}

module.exports = { TaskList };
