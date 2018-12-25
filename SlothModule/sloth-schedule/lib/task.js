'use strict';

class Task {
  constructor(
    name,
    releaseDate = 0,
    dueDate = 1,
    processingTime = 1,
    weight = 0
  ) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.dueDate = dueDate;
    this.processingTime = processingTime;
    this.weight = weight;
  }

  validate() {
    return this.name && this.releaseDate + this.processingTime <= this.dueDate;
  }
}

module.exports = { Task };
