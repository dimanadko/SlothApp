const initialState = {
  'schedules': [
    { name: "First Element", description: "Lorem ipsum dolor sit amet", startDate: '20/12/2018', endDate: '21/12/2018' },
    { name: "Second Element", description: "Lorem ipsum dolor sit amet", startDate: '20/12/2018', endDate: '21/12/2018' },
    { name: "Third Element", description: "Lorem ipsum dolor sit amet", startDate: '20/12/2018', endDate: '21/12/2018' }
  ],
};


export default (state = initialState, action) => {
  if (action.type === 'ADD_SCHEDULE') {
    return {schedules: [...state.schedules, action.data]};
  }
  return state;
}