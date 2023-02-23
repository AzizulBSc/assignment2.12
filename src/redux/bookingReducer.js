
import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";
// initial state
const initialState = {
    bookedFlights: [
        // {from: 'Sylhet', to: 'Dhaka', date: '2023-02-24', guests: '1', ticketClass: 'Economy'},
        // {from: 'Saidpur', to: 'Dhaka', date: '2023-02-24', guests: '2', ticketClass: 'Economy'},
        // {from: 'Chittagong', to: 'Dhaka', date: '2023-02-24', guests: '3', ticketClass: 'Economy'},
        // {from: 'Khulna', to: 'Dhaka', date: '2023-02-24', guests: '4', ticketClass: 'Economy'},
        ],
  };
const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_FLIGHT': {
          return {
              ...state,
              bookedFlights: [...state.bookedFlights, action.payload],
          };
      }
      case 'REMOVE_FLIGHT':
          console.log(" REMOVE_FLIGHTcs");
          return {
          ...state,
          bookedFlights: state.bookedFlights.filter((bookedFlight) => bookedFlight.index !== action.payload),
        };
      default:
        return state;
    }
  };

export default bookingReducer;