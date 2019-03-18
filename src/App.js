import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { getMenuListData } from './routes'
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

import zh_CN from 'antd/lib/locale-provider/zh_CN';


const store = configureStore()

class App extends Component {


  componentDidMount() {

  }

  render() {
    let menuData = getMenuListData() || []
    return (
      <Provider store={store}>
        <LocaleProvider locale={zh_CN}>
          <Router >
            <Switch>
              {
                menuData && menuData.map(item => {
                  return (
                    <Route path={item.path} component={item.component} exact={item.exact} key={item.path} />
                  )
                })
              }
              <Redirect exact strict from="/" to="/Base" />
            </Switch>
          </Router>
        </LocaleProvider>
      </Provider>
    );
  }
}

export default App;
