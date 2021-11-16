import { produce } from 'immer'
import execHandler from './reducerUtils'

const initialState = {
    Cards:[]
}


const allCards = {
    getCards(state, action) {
        debugger
        state.Cards = action.payload
    }
}

export default produce((state, action) => {
    execHandler(state, action,allCards)
}, initialState)