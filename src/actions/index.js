const Actions = {
  addScheduleAction: newSchedule => {
    const dispatchObj = {
      type: 'ADD_SCHEDULE',
      data: newSchedule,
    };
    return(dispatchObj);
  },
  addTaskAction: (
    scheduleKey,
    task ) => {
    const dispatchObj = {
      type: 'ADD_TASK',
      data: task,
      scheduleKey,
    };
    return(dispatchObj)
  },
  sortScheduleAction: (
    scheduleKey
  ) => ({
    type: 'SORT_SCHEDULE',
    data: scheduleKey
  })
};

export default Actions;
