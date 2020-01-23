/* eslint-disable linebreak-style */
import axios from 'axios';

export const selectLocation = (location) => {
  console.log('selectLocation runs from select-actions, location: ', location);
  return {
    type: 'SELECT_LOCATION',
    payload: { location }
  };
};

export const getWeather = (city) => {
  let theCity = city;
  if (theCity.includes(' ')) {
    for (let i = 0; i < theCity.length; i++) {
      if (theCity[i] === ' ') {
        theCity = theCity.replace(' ', '+');
      }
    }
  }

  return {
    type: 'GET_WEATHER',
    payload: axios.get(`http://localhost:3000/search/${theCity}`)
  };
};
// export function updateExpenseAmount(amount) {
//   return {
//     type: 'UPDATE_EXPENSE_AMOUNT',
//     payload: { amount }
//   };
// }

// export function addExpense(description, amount) {
//   return {
//     type: 'ADD_EXPENSE',
//     payload: {
//       description,
//       amount: parseFloat(amount)
//     }
//   };
// }
