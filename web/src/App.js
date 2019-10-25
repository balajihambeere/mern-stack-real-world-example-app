import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import './App.css';

import SkillComponent from "./containers/skill/skill";
import AddTopicComponent from "./containers/topic/addTopic";
import TopicComponent from "./containers/topic/topic";
const location = window;

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <div className="w3-bar">
              <a className="w3-bar-item" href="/">Skill</a>
              <a className="w3-bar-item" href="/topics">Topics</a>
              <a className="w3-bar-item" href="/topic/add">Add Topic</a>
            </div>
            <div className="main">
              <Switch >
                <Route exact path="/" render={(props) => (
                  <SkillComponent key={location.pathname} />
                )} />
                <Route exact path="/topic/add" component={AddTopicComponent} key={location.pathname} />
                TopicComponent
                 <Route exact path="/topics" component={TopicComponent} key={location.pathname} />
                {/*   <Route exact path="/customer/edit/:id" component={CustomerComponent} key={location.pathname} />
                <Route exact path="/customer/delete/:id" component={DeleteCustomerComponent} key={location.pathname} /> */}
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
