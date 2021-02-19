import axios from 'axios';

export const FETCH_SMURF_LOADING = 'FETCH_SMURF_LOADING';
export const FETCH_SMURF_SUCCESS = 'FETCH_SMURF_SUCCESS';
export const FETCH_SMURF_FAILURE = 'FETCH_SMURF_FAILURE';
export const ADD_SMURF = 'ADD_SMURF';
export const SET_ERROR = 'ADD_ERROR';

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
  dispatch(fetchSmurfLoading());

  axios
    .get('http://localhost:3333/smurfs')
    .then((res) => {
      dispatch(fetchSmurfSuccess(res.data))
      ;
    })
    .catch((err) => {
      dispatch(fetchSmurfFailure(err))
    });
};

export const addSmurf = (smurf) => {
    return {type:ADD_SMURF, payload:smurf}
}

export const setError = (error) => {
    return {type:SET_ERROR, payload:error}
}

export const fetchSmurfLoading = () => {
  return { type: FETCH_SMURF_LOADING };
};

export const fetchSmurfSuccess = (smurf) => {
  return { type: FETCH_SMURF_SUCCESS, payload: smurf };
};

export const fetchSmurfFailure = (error) => {
  return { type: FETCH_SMURF_FAILURE, payload: error };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.