import { ADD_TODO, REMOVE_TODO } from "../constants/constants";

const initialState = {
  todos: [
    {
      date: 28,
      month: "May",
      title: "Revamp Facebook app"
    },
    {
      date: 29,
      month: "Apr",
      title: "Revamp Instgram app"
    },
    {
      date: 30,
      month: "Jan",
      title: "Revamp Phonepe app"
    }
  ]
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    }
    case REMOVE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item, index) => index !== action.payload.id)
      };
    }
    default:
      return state;
  }
}
