const Actions = {
  addScheduleAction: newSchedule => {
    const dispatchObj = {
      type: 'ADD_SCHEDULE',
      data: newSchedule,
    };
    return(dispatchObj);
  },
};

export default Actions;
