import { ADD_FLIGHT, REMOVE_FLIGHT } from "./actionTypes";
export const add_flight = (flightData)=> {
    return {
      type: ADD_FLIGHT,
      payload: flightData
    };
  }
  
  export const remove_flight = (index) => {
    return {
      type: REMOVE_FLIGHT,
      payload: index
    }
  };
