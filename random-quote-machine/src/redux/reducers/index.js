import { CHANGE } from "../actions"

const initialState = {
    quote: "Be the change that you wish to see in the world.",
    author: "Mahatma Gandhi"
}

const quoteReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE:
            return {
                quote: action.payload?.quote,
                author: action.payload?.author
            }
        default:
            return state
    }
}

export default quoteReducer