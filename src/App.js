import React, { Component, Fragment } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import CreateTask from './components/Tasks/CreateTask';
import EditTask from './components/Tasks/EditTask';
import TaskDetails from './components/Tasks/TaskDetails';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/createtask" component={CreateTask} />
            <Route path="/edittask/:id" component={EditTask} />
            <Route path="/task/:id" component={TaskDetails} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;