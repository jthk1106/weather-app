/* eslint-disable linebreak-style */
// const defaultState = {
//   description: '',
//   amount: '',
//   lineItems: []
// };
const defaultState = {
  location: '',
  temperature: ''
};

export default function SelectReducer(state = defaultState, action) {
  // the `state = defaultState` above is new ES6 syntax
  // for defining a default value on a parameter
  const { type, payload } = action;
  console.log('SelectReducer runs from select-reducer, type: ', type, ' payload: ', payload);
  switch (type) {
    // case 'UPDATE_EXPENSE_DESCRIPTION': {
    //   // we'll return an object
    //   return {
    //     // with all the previous state
    //     ...state,
    //     // but overwriting the description
    //     description: payload.description
    //   };
    // }
    case 'SELECT_LOCATION': {
      return {
        ...state,
        location: payload.location
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      return {
        ...state,
        temperature: payload.data.main.temp
      };
    }
    // case 'UPDATE_EXPENSE_AMOUNT': {
    //   return {
    //     ...state,
    //     amount: payload.amount
    //   };
    // }

    // case 'ADD_EXPENSE': {
    //   const { description, amount } = action.payload;
    //   return {
    //     description: '',
    //     action: '',
    //     lineItems: [
    //       // here we have all the previous line items
    //       ...state.lineItems,
    //       // plus a new object
    //       { description, amount }
    //     ]
    //   };
    // }

    default: {
      return state;
    }
  }
}
