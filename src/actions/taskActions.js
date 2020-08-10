export const createTask = (task) => {

  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('tasks').add({
      ...task,
      createdAt: new Date(),
      editedAt: new Date()
    }).then(() => {
      dispatch({type: 'CREATE_TASK_SUCCESS'});
    }).catch(error => {
      dispatch({type: 'CREATE_TASK_ERROR', error});
    });
  }

};

export const updateTask = (task, id) => {

  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('tasks').doc(id).update({
      ...task,
      editedAt: new Date()
    }).then(() => {
      dispatch({type: 'UPDATE_TASK_SUCCESS'});
    }).catch(error => {
      dispatch({type: 'UPDATE_TASK_ERROR', error});
    });
  }

};

export const deleteTask = (id) => {

  return (dispatch, getState, {getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('tasks').doc(id).delete()
      .then(() => {
        dispatch({type: 'DELETE_TASK_SUCCESS'});
      }).catch(error => {
        dispatch({type: 'DELETE_TASK_ERROR', error})
      });
  }

};