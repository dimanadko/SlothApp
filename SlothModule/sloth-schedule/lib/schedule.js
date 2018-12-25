'use strict';

class Schedule {
  constructor(data = []) {
    this.tasks = data;
    this.time = 0;
    data.forEach(task => this.insert(task));
  }

  insert(task) {
    this.time = task.startDate = this.time < task.releaseDate ?
      task.releaseDate :
      this.time;
    task.endDate = this.time += task.processingTime;
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  setTasks(newData) {
    this.tasks = newData;
  }

  getTime() {
    return this.time;
  }

  setTime(newTime) {
    this.time = newTime;
  }
}

module.exports = { Schedule };
