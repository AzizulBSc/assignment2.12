

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
export default function Form() {
  const dispatch = useDispatch();
  const bookedFlights = useSelector(state=>state.bookedFlights);
  const [formState, setFormState] = useState({
    id:Date.now(),
    from: '',
    to: '',
    date: '',
    guests: '',
    ticketClass: '',
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_FLIGHT', payload: formState });
    setFormState({
      id:Date.now(),
      from: '',
      to: '',
      date: '',
      guests: '',
      ticketClass: '',
    });
  };

  const handleFormChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
    var isButtonDisabled = false;

    if (bookedFlights.length >= 3) {
        isButtonDisabled = true;
    }
    else {
        isButtonDisabled = false;
    }

  return (
        <div class="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form class="first-hero lws-inputform" onSubmit={handleFormSubmit}>
          {/* <!-- From --> */}
          <div class="des-from">
            <p>Destination From</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select class="outline-none px-2 py-2 w-full" name="from" value={formState.from} onChange={handleFormChange} id="lws-from" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div class="des-from">
            <p>Destination To</p>
            <div class="flex flex-row">
              <img src="./img/icons/Frame.svg" alt="" />
              <select class="outline-none px-2 py-2 w-full" name="to" value={formState.to} onChange={handleFormChange} id="lws-to" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div class="des-from">
            <p>Journey Date</p>
            <input type="date" class="outline-none px-2 py-2 w-full date" value={formState.date} onChange={handleFormChange} name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div class="des-from">
            <p>Guests</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (1).svg" alt="" />
              <select class="outline-none px-2 py-2 w-full" name="guests" value={formState.guests} onChange={handleFormChange} id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div class="des-from !border-r-0">
            <p>Class</p>
            <div class="flex flex-row">
              <img src="./img/icons/Vector (3).svg" alt="" />
              <select class="outline-none px-2 py-2 w-full" name="ticketClass" value={formState.ticketClass} onChange={handleFormChange} id="lws-ticketClass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>

          <button class="addCity" type="submit" disabled={isButtonDisabled}  id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span class="text-sm">Book</span>
          </button>
        </form>
      </div>
  )
}
