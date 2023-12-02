import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import   redux from 'redux'
import {amountReducer} from './reducers/account.js'
import { bonusReducer } from './reducers/bonus.js'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'



//  ------>> CREATING REDUX STORE 
import { createStore,combineReducers,applyMiddleware } from 'redux'

const store = createStore(combineReducers({
  account:amountReducer,
  bonus:bonusReducer

}) ,applyMiddleware(logger, thunk)); 




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App  />
    </Provider>
  </React.StrictMode>,
)
