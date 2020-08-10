import React, {Component} from 'react';
import {firestoreConnect} from 'react-redux-firebase';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {Link} from 'react-router-dom';

class TaskDetails extends Component {

  render() {
    const { task } = this.props;
    if(task) {
      return (
        <div className="container p-5">
          <h3 className="display-4 mb-4">{task.task}</h3>
          <p className="lead mb-4">{task.description}</p>
          <Link to="/" className="btn btn-dark"><i className="fas fa-arrow-left mr-2"></i> Go To Home</Link>
        </div>
      )
    } else {
      return (
        <div className="container p-5">
          <h3 className="display-4">Nothing Here!</h3>
        </div>
      )
    }
  }

}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null;
  return { task }
}


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tasks' }
  ])
)(TaskDetails);