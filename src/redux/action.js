import {
  GETQUERYFAILIURE,
  GETQUERYLOADING,
  GETQUERYSUCCESS,
  GETRESULTSUCCESS

} from "./actionTypes";
export const getQueryloading = () => {
  return {
    type: GETQUERYLOADING
  };
};
export const getQueryfailiure = () => {
  return {
    type: GETQUERYFAILIURE
  };
};
export const getQuerysuccess = (data) => {
  
  return {
    type: GETQUERYSUCCESS,
    payload: data
  };
};

export const getResultsuccess = (data) => {
  return {
    type: GETRESULTSUCCESS,
    payload: data
  };
};


export const getQueries = () => async (dispatch) => {
  
  dispatch(getQueryloading());
  try {
    await fetch("https://fast-reef-22226.herokuapp.com/data")
      .then((data) => data.json())
      .then((res) => 
       {console.log(res); dispatch(getQuerysuccess(res))});
  } catch (e) {
    dispatch(getQueryfailiure());
  }
};


export const getResults = (id) => async (dispatch) => {
  dispatch(getQueryloading());
  try {
    await fetch(`https://fast-reef-22226.herokuapp.com/data/${id}`)
      .then((data) => data.json())
      .then((res) => dispatch(getResultsuccess(res)));
  } catch (e) {
    dispatch(getQueryfailiure());
  }
};