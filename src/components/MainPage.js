import React, { Component } from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import TaskList from './Tasks/TaskList';

class MainPage extends Component {
  render() {
    return (
      <div className="container p-5">
        <TaskList tasks={this.props.tasks} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.firestore.ordered.tasks
  }
};


export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'tasks', orderBy: ['editedAt', 'desc'] }
  ])
)(MainPage);