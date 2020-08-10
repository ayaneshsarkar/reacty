const initState = {};

const taskReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_TASK_SUCCESS':
      console.log('Create Task Success');
      return state;
    case 'CREATE_TASK_ERROR':
      console.log('Create Task Error');
      return state;
    case 'DELETE_TASK_SUCCESS':
      console.log('Delete Task Success');
      return state;
    case 'DELETE_TASK_ERROR':
      console.log('Delete Task Error');
      return state;
    case 'UPDATE_TASK_SUCCESS':
      console.log('Update Task Success');
      return state;
    case 'UPDATE_TASK_ERROR':
      console.log('Update Task Error');
      return state;
    default:
      return state;
  }
}

export default taskReducer;