'use strict';

const parseKey = (name, time) => `${name},${time}`;

const taskCompability = (task, time) => (
  task.releaseDate + task.processingTime <= time
);

const updateTime = (task, time) => {
  time = time > task.dueDate ? task.dueDate : time;
  return time - task.processingTime;
};

function findSchedule(weight, cache, taskList) {
  const schedule = [];
  let time;
  for (const key in cache) {
    const taskInf = key.split(',');
    if (cache[key] === weight) {
      const task = taskList.find((task => task.name === taskInf[0]));
      time = task.dueDate - task.processingTime;
      weight -= task.weight;
      schedule.push(task);
      break;
    }
  }
  while (weight !== 0) {
    for (const key in cache) {
      const taskInf = key.split(',');
      if (cache[key] === weight && taskInf[1] <= time) {
        const task = taskList.find((task => task.name === taskInf[0]));
        schedule.push(task);
        weight -= task.weight;
        time = updateTime(task, time);
        break;
      }
    }
  }

  return schedule.reverse();
}

function weightedRetardMinim(taskList, schedule) {
  const tasks = taskList.getData();
  const last = taskList.getLength() - 1;
  const cache = {};

  taskList.setData(
    taskList
      .getData()
      .sort((t1, t2) => t1.dueDate - t2.dueDate)
  );

  function scheduling(index, time, taskList) {
    if (index < 0) return 0;

    const task = taskList[index];
    const key = parseKey(task.name, time);
    if (cache[key]) return cache[key];

    let maxPrevWeight = 0;
    const currTime = updateTime(task, time);

    for (let i = index - 1; i > -1; i--) {
      if (taskCompability(taskList[i], currTime)) {
        const weight = scheduling(i, currTime, taskList);
        if (weight > maxPrevWeight)
          maxPrevWeight = weight;
      }
    }

    cache[key] = Math.max(
      task.weight + maxPrevWeight,
      scheduling(index - 1, time, taskList)
    );

    return cache[key];
  }

  findSchedule(scheduling(last, tasks[last].dueDate, tasks), cache, tasks)
    .forEach(task => schedule.insert(task));

  return schedule;
}

module.exports = { weightedRetardMinim };
