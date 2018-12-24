import { nameToKey } from '../helpers'

const initialState = {
  'schedules': {
    first_element:{
      name: "First Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 12, 20).toString(),
      dueDate: new Date(2018, 12, 26).toString(),
      tasks:[
        {
          name: 'Task one',
          weight: 20,
          releaseDate: new Date(2018, 12, 20).toString(),
          dueDate: new Date(2018, 12, 23).toString(),
          processingTime: 2,
        }
      ]
    },
    second_element: {
      name: "Second Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 12, 21).toString(),
      dueDate: new Date(2018, 12, 30).toString(),
      tasks:[]
    },
    third_element: {
      name: "Third Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 12, 22).toString(),
      dueDate: new Date(2018, 12, 27).toString(),
      tasks:[]
    }
  },
};

export default (state = initialState, action) => {
  if (action.type === 'ADD_SCHEDULE') {
    return {schedules: {...state.schedules, [nameToKey(action.data.name)]: {...action.data, tasks: []} }};
  }
  if (action.type === 'ADD_TASK') {
    const curSchedule = state.schedules[action.scheduleKey];
    return {
      schedules: {
        ...state.schedules,
        [action.scheduleKey]: {
          ...curSchedule,
          tasks: [...curSchedule.tasks, action.data]
        }
      }
    };
  }
  return state;
}