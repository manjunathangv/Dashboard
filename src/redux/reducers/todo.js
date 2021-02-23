import { ADD_TODO, TOGGLE_TODO } from "../constants/constants";

const initialState = {
  todos: [
    {
      date: 28,
      month: "may",
      title: "Revamp Instgram app"
    },
    {
      date: 29,
      month: "may",
      title: "Revamp Instgram app"
    },
    {
      date: 30,
      month: "Jan",
      title: "Revamp Instgram app"
    }
  ],
  allIds: [],
  byIds: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    default:
      return state;
  }
}
