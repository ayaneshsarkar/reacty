import React from 'react';
import TaskContent from './TaskContent';

const TaskList = ({tasks}) => {

  if(tasks && tasks.length > 0) {
    return (
      <div className="col-12">
        <h3 className="display-4 mb-4">Tasks</h3>
        {tasks && tasks.map(task => {
          return (
            <TaskContent key={task.id} task={task} />
          )
        })}
      </div>
    )
  } else {
    return (
      <div className="col-12">
        <h3 className="display-4">No Tasks Here!</h3>
      </div>
    )
  }

}


export default TaskList;