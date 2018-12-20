import { nameToKey } from '../helpers'

const initialState = {
  'schedules': {
    first_element:{
      name: "First Element",
      description: "Lorem ipsum dolor sit amet",
      startDate: '20/12/2018',
      endDate: '21/12/2018',
      tasks:[
        {
          name: 'Task one',
          weight: 20,
          releaseDate: new Date(),
          dueDate: new Date(),
          processingTime: 0,
        }
      ]
    },
    second_element: {
      name: "Second Element",
      description: "Lorem ipsum dolor sit amet",
      startDate: '20/12/2018',
      endDate: '21/12/2018',
      tasks:[]
    },
    third_element: {
      name: "Third Element",
      description: "Lorem ipsum dolor sit amet",
      startDate: '20/12/2018',
      endDate: '21/12/2018',
      tasks:[]
    }
  },
};

export default (state = initialState, action) => {
  if (action.type === 'ADD_SCHEDULE') {
    return {schedules: {...state.schedules, [nameToKey(action.data.name)]: action.data }};
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