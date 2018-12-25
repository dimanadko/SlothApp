import { nameToKey } from '../helpers'
import { Alert } from 'react-native'
import SlothModul from '../../SlothModule/sloth-schedule/sloth'

const {retardMinim, Schedule, Task, TaskList, tasksCompability, weightedRetardMinim, tools } = SlothModul;
const day = 60 * 60 * 24 * 1000;

const initialState = {
  'schedules': {
    first_element:{
      name: "First Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 11, 20).toString(),
      dueDate: new Date(2018, 11, 26).toString(),
      tasks:[
        {
          name: 'Task one',
          weight: 20,
          releaseDate: new Date(2018, 11, 21).toString(),
          dueDate: new Date(2018, 11, 23).toString(),
          processingTime: 1,
        },
        {
          name: 'Task two',
          weight: 20,
          releaseDate: new Date(2018, 11, 24).toString(),
          dueDate: new Date(2018, 11, 26).toString(),
          processingTime: 1,
        }
      ]
    },
    second_element: {
      name: "Second Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 11, 21).toString(),
      dueDate: new Date(2018, 11, 30).toString(),
      tasks:[]
    },
    third_element: {
      name: "Third Element",
      description: "Lorem ipsum dolor sit amet",
      releaseDate: new Date(2018, 11, 22).toString(),
      dueDate: new Date(2018, 11, 27).toString(),
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
    // Alert.alert(action.data.releaseDate+'');
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

  if (action.type === 'SORT_SCHEDULE') {
    const taskArray = state.schedules[action.data].tasks.map( ({name, dueDate, releaseDate, processingTime, weight}) => {
      const taskDueDate = new Date(dueDate).getTime();
      const taskReleaseDate = new Date(releaseDate).getTime();
      const taskProcessingTime = day*processingTime;

      // Alert.alert('taskArray', name+ ' '+taskDueDate+' '+' '+taskReleaseDate);

      const result = new Task( name, taskReleaseDate, taskDueDate, taskProcessingTime, weight );
      return result
    });
    const CurrentSchedule = new TaskList(taskArray);

    Alert.alert('Sort', JSON.stringify(weightedRetardMinim(CurrentSchedule, new Schedule())))
  }
  return state;
}