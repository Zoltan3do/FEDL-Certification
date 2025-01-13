export const CHANGE = "CHANGE"

export const changeAction = (data) => {
    return {
        type: CHANGE,
        payload: data
    }
}

export const fetchAction = () => {
    return async (dispatch, getState) => {
        let data = []
        try {
            const response = await fetch("https://dummyjson.com/quotes");
            if (response.ok) {
                data = await response.json()
            }
        } catch (error) {
            console.log(error)
        }
        const random = Math.floor(Math.random() * data.quotes.length + 1)
        console.log(data)
        dispatch({
            type: CHANGE,
            payload: data.quotes[random]
        })
    }
}