/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import SearchHistory from './searchHistory';

// This function takes the store and returns an object that's passed to the props of the component
function mapStoreToProps(store) {
  return {
    description: store.select.description,
    amount: store.select.amount,
    lineItems: store.select.lineItems
  };
}

// This might look odd but, connect returns a function, that is then called with the component itself.
export default connect(mapStoreToProps)(SearchHistory);
