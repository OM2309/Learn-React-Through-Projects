import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../actions/action-types";

const initialState = [];

const todoreducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { ...action.payload }];
    // Spread the properties of action.payload into a new object
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case UPDATE_TODO: {
      const updatedState = state.map((todo) => {
        if (todo.id === action.payload.id) {
          // Update the todo with the matching id
          return {
            ...todo,
            title: action.payload.updatedTodo.title,
            description: action.payload.updatedTodo.description,
          };
        }
        return todo;
      });
      return updatedState;
    }
    default:
      return state;
  }
};

export default todoreducer;
