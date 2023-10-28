const initialState = 0; // Define the initial state

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}

export default changeTheNumber;
