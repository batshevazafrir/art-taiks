import { actions } from "../actions";
import axios from 'axios'


export const serviceCards = ({ dispatch, getState }) => next => action => {
    if (action.type === "GET_CARDS") {
        return new Promise((resolve, reject) => {
            axios.get("http://localhost:3002/getAllCards").then(data => {
                debugger
                // JSON.stringify(data)
                // console .log(" user login data"+data.data.token)
                // console.log(data)
                // console.log(document.cookie);
                debugger
                let cards = [ ...data.data.cards ]
                action.payload = cards  
                if (cards) {
                    resolve(true)
                    // resolve(...user._id, ...user.IsAdmin)
                    return next(action)
                }
                else
                    reject(null)
            }).catch(err => {
                debugger
                reject(false)
                console.log(err, 'cards not exist');
            })
        }
        )
    }
}

