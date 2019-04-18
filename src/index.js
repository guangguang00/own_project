import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
// import Route from './router/'   //修改引入的方式
import {Provider} from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import store from './store/'
import * as serviceWorker from './serviceWorker';

const render = Component => {
    ReactDOM.render(
      //绑定redux、热加载
      //store为createStore函数最终返回的一个对象。主要提供三个方法:getState dispatch subscribe
      <Provider store={store}>
        <AppContainer>
          <Component />
        </AppContainer>
      </Provider>,
      document.getElementById('root'),
    )
  }
  
  render(App);

if (module.hot) {
  module.hot.accept('./router/', () => {
    render(App);
  })
}

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
