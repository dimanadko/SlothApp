'use strict';

const { TaskList } = require('./taskList');
const { Schedule } = require('./schedule');

function tasksCompability(taskList) {
  const schedule = new Schedule();

  taskList.sort('releaseDate');
  const availableTasks = new TaskList();
  const size = taskList.getLength();

  for (let i = 0; i < size; i++) {
    if (!availableTasks.getLength())
      schedule.setTime(taskList.getRoot().releaseDate);

    while (
      taskList.getLength() &&
      taskList.getRoot().releaseDate <= schedule.getTime()
    )
      availableTasks.insert(taskList.extract());

    const immediate = availableTasks.extract();
    if (immediate.dueDate <= schedule.getTime())
      return null;

    schedule.insert(immediate);
  }
  return schedule;
}

module.exports = { tasksCompability };
