import {GET_DATA, SET_DATA, UPDATE_DATA, DELETE_DATA} from './constants';

const initialState = {
  data: [],
};

export default function MyListReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        data: action.payload,
      };
    case SET_DATA:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case UPDATE_DATA:
      return {
        ...state,
        data: state.data.map(item =>
          item.id === action.payload ? action.payload : item,
        ),
      };
    case DELETE_DATA:
      return {
        data: state.data.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
}
