import React, { Component } from 'react';
import {connect} from 'react-redux';
import {createTask} from '../../actions/taskActions';
import SimpleReactValidator from 'simple-react-validator';

class CreateTask extends Component {

  state = {
    task: '',
    description: '',
  }

  validator = new SimpleReactValidator();

  formChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  formSubmit = (e) => {
    e.preventDefault();

    if(this.validator.allValid()) {
      this.props.createTask(this.state);
      this.props.history.push('/');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }

    
  }

  render() {
    return (
      <div className="container p-5">
        <div className="col-12">
          <h3 className="display-4 mb-4">Create Task</h3>

          <form onSubmit={this.formSubmit}>
            <div className="form-group">
              <label htmlFor="Task">Task</label>
              <input onChange={this.formChange} type="text" className="form-control form-control-lg" id="task" placeholder="Task Title" />
              {this.validator.message('task', this.state.task, 'required', {className: 'text-danger'})}
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <textarea onChange={this.formChange} className="form-control form-control-lg" id="description" rows="5" placeholder="Description"></textarea>
              {this.validator.message('description', this.state.description, 'required', {className: 'text-danger'})}
            </div>

            <button type="submit" className="btn btn-lg btn-dark">Submit</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createTask: (task) => dispatch(createTask(task))
  }
};


export default connect(null, mapDispatchToProps)(CreateTask);