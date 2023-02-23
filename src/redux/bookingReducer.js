
// initial state
const initialState = {
    bookedFlights: [],
  };  
const bookingReducer = (state = initialState, action) => { 
    switch (action.type) {
      case 'ADD_FLIGHT':
          return {
              ...state,
              bookedFlights: [...state.bookedFlights, action.payload],
          };
      case "REMOVE_FLIGHT":
          return {
          bookedFlights:[
            ...state.bookedFlights.filter(bookedFlight => bookedFlight.id !== action.payload)
          ]
        };
      default:
        return state;
    }
  };
export default bookingReducer;