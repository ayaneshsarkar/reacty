import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {deleteTask} from '../../actions/taskActions';
import {connect} from 'react-redux';


class TaskContent extends Component {

  taskDelete = (id) => {
    console.log(id);
    this.props.deleteTask(id);
  }

  render() {
    const {task} = this.props;

    return (
      <Fragment>
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{task.task}</h5>
            <p className="card-text">{task.description}</p>
  
            <div className="d-flex">
              <Link to={"edittask/" + task.id} className="btn btn-primary mr-3">Edit</Link>
              <Link to="/" onClick={() => this.taskDelete(task.id)} className="btn btn-danger mr-3">Delete</Link>
              <Link to={"task/" + task.id} className="btn btn-dark text-center">Read More <i className="fas fa-arrow-right ml-1"></i></Link>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTask: (id) => dispatch(deleteTask(id))
  }
}


export default connect(null, mapDispatchToProps)(TaskContent);