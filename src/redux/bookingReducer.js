
import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";
// initial state
const initialState = {
    bookedFlights: [],
  };
const bookingReducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_FLIGHT:
        return {
          ...state,
          bookedFlights: [...state.bookedFlights, action.payload],
        };
      case REMOVE_FLIGHT:
        return {
          ...state,
          bookedFlights: state.bookedFlights.filter((_, index) => index !== action.payload),
        };
      default:
        return state;
    }
  };
  
export default bookingReducer;