import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';

/* 
    Each Reducer would serve different kinds of data sphere for storage
    The planned divisions would be:
        - Favorite verse list
        - Session 
            -- For the last read
        - Notes list *maybe
        - Account data *maybe

*/

import formula_reducer from './formula_reducer.js'
//import settings_reducer from './settings_reducer.js';


const rootReducer = combineReducers({
    formula : formula_reducer,
    //settings: settings_reducer,
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store