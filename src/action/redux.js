import { combineReducers, createStore } from "redux";
import Player1Reducer from './Player1Reducer'
import Player2Reducer from './Player2Reducer'

const reducers = combineReducers({
    player1:Player1Reducer,
    player2:Player2Reducer
})
const store = createStore(reducers)
export default store