import React, { FC } from 'react';
import { bindActionCreators } from 'redux';
import { Provider } from 'react-redux';
/* eslint-disable-next-line @typescript-eslint/ban-ts-ignore */
// @ts-ignore
import { Counter } from './components/Counter';
import { store } from './store';
import * as actions from './actionCreators';
import 'bootswatch/dist/slate/bootstrap.min.css';
import './App.css';

const { dispatch } = store;
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
const App: FC = () => {
  return (
    <Provider store={store}>
      <Counter
        counter={store.getState()}
        inc={inc}
        dec={dec}
        rnd={() => {
          const payload: number = Math.floor(Math.random() * 10);

          rnd(payload);
        }}
      />
    </Provider>
  );
};

export default App;
