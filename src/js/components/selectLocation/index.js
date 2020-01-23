/* eslint-disable linebreak-style */
import { connect } from 'react-redux';
import SelectLocation from './selectLocation';

// This function takes the store and returns an object that's passed to the props of the component
function mapStoreToProps(store) {
  return {
    location: store.select.location
  };
}

// This might look odd but, connect returns a function, that is then called with the component itself.
export default connect(mapStoreToProps)(SelectLocation);
