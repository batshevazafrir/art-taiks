import { applyMiddleware, combineReducers, createStore } from 'redux';
// import reducerLogin from './Redusers/login'
// import {ServiceUser} from './MiddleWare/serviceUser'
// import {ServiceGetWeather} from './MiddleWare/serviceWeather'
import reducerCards from './reducers/reducerCards'
import {serviceCards} from '../redux/middleware/serviceCards'

const reducer = combineReducers({reducerCards})

const store = createStore(reducer,applyMiddleware(serviceCards))
window.store = store;
export default store;

// store.dispatch(actions.GetWeather())

