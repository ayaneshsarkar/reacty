import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import {updateTask} from '../../actions/taskActions';
import SimpleReactValidator from 'simple-react-validator';


class EditTask extends Component {

  state = {
    task: '',
    description: ''
  }

  validator = new SimpleReactValidator();

  componentDidUpdate() {
    if(!this.state.task && !this.state.description && this.props.task) {
      this.setState({
        task: this.props.task.task,
        description: this.props.task.description
      });
    }
  }

  formChange = (e) => {
    
    this.setState({
      [e.target.id]: e.target.value
    });
    
  }

  formSubmit = (e) => {
    e.preventDefault();

    if(this.validator.allValid()) {
      this.props.updateTask(this.state, this.props.match.params.id);
      this.props.history.push('/');
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
    
  }

  render() {

    const {task} = this.props;

    if(task) {
      return (
        <div className="container p-5">
          <div className="col-12">
            <h3 className="display-4 mb-4">Edit Task</h3>
  
            <form onSubmit={this.formSubmit}>
              <div className="form-group">
                <label htmlFor="Task">Task</label>
                <input onLoad={(e) => this.formLoad(e)} onChange={this.formChange} type="text" className="form-control form-control-lg" id="task" placeholder="Task Title" defaultValue={task.task} />
                {this.validator.message('task', this.state.task, 'required', {className: 'text-danger'})}
              </div>
  
              <div className="form-group mb-4">
                <label htmlFor="desc">Description</label>
                <textarea onChange={this.formChange} className="form-control form-control-lg" id="description" rows="5" placeholder="Description" defaultValue={task.description}></textarea>
                {this.validator.message('description', this.state.description, 'required', {className: 'text-danger'})}
              </div>
  
              <button type="submit" className="btn btn-lg btn-dark">Submit</button>
            </form>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container p-5">
          <div className="col-12">
            <h5 className="display-4">No Tasks Here!</h5>
          </div>
        </div>
      )
    }

  }
  

};


const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const tasks = state.firestore.data.tasks;
  const task = tasks ? tasks[id] : null;
  return {
    task: task
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTask: (task, id) => dispatch(updateTask(task, id))
  }
};

export default compose(

  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'tasks'
  }])


)(EditTask);