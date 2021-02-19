import axios from 'axios';



export const FETCH_SMURFS_LOADING= 'FETCH_SMURFS_LOADING'
export const FETCH_SMURFS_SUCCESS= 'FETCH_SMURFS_SUCCESS'
export const FETCH_SMURFS_FAILURE= 'FETCH_SMURFS_FAILURE'
export const ADD_A_SMURF= 'ADD_A_SMURF'
export const SMURF_FAIL= 'SMURF_FAIL'


export const fetchSmurfs = () => dispatch => { 
    console.log(dispatch)
    
        dispatch({type: FETCH_SMURFS_LOADING})
        axios
            .get('http://localhost:3333/smurfs')
            .then((res)=>{
                dispatch({type: FETCH_SMURFS_SUCCESS, payload: res.data})
            })
            .catch((err)=>{
                dispatch({type: FETCH_SMURFS_FAILURE, payload: err.err})
            })
    }



export const addSmurf = (newSmurf) => dispatch => {
    axios
    .post('http://localhost:3333/smurfs', newSmurf)
    .then((resp) => {
        console.log(resp.data)
        dispatch({type: ADD_A_SMURF, payload: newSmurf})
    })
    .catch(err => {
        dispatch({type: SMURF_FAIL, payload: err.resp.data})
    })
}

export const errorMessage = (error) => {
    return({type: SMURF_FAIL, payload: error})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.