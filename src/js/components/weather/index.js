/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import Weather from './weather';

// This function takes the store and returns an object that's passed to the props of the component
function mapStoreToProps(store) {
  return {
    location: store.select.location,
    temperature: store.select.temperature
  };
}

// This might look odd but, connect returns a function, that is then called with the component itself.
export default connect(mapStoreToProps)(Weather);
