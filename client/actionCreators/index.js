/**
  Action Creators

  These fire events which the reducer will handle
  We will later call these functions from inside our component

  Later these functions get bound to 'dispatch' fires the actual event
  Right now they just return an object

  It's a code convention to use all capitals and snake case for the event names
  We use const to store the name of the event so it is immutable

*/

/*
  defaultReducer
*/
import axios from 'axios';


function fetchDefaultReducerData(query) {
  return axios.get('api/' + query);
}

export function dispatchFetchDefaultReducer(query) {
  return (dispatch, getState) => {
    return  fetchDefaultReducerData(query)
              .then((results) =>
                dispatch(updateDefault(results.item1, results.item2))
              )
  }
}

export function updateDefault(item1, item2) {
  return {
    type: 'UPDATE_DEFAULT',
    item1,
    item2
  };
}

