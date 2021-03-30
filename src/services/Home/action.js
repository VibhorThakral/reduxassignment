import {GET_DATA, SET_DATA, UPDATE_DATA, DELETE_DATA} from './constants';
const URI = 'https://jsonplaceholder.typicode.com/posts';

export const getData = () => async dispatch => {
  const res = await fetch(URI);
  const res_data = await res.json();
  dispatch({
    type: GET_DATA,
    payload: res_data,
  });
};

export const setData = newData => async dispatch => {
  const res = await fetch(URI, {
    method: 'POST',
    body: JSON.stringify(newData),
  });
  const res_data = await res.json();
  if (res.status === 201) {
    dispatch({
      type: SET_DATA,
      payload: {...newData, ...res_data},
    });
  }
};

export const updateData = newData => async dispatch => {
  const {id} = newData;
  const res = await fetch(URI.concat('/', id), {
    method: 'PUT',
    body: JSON.stringify(newData),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const res_data = await res.json();
  dispatch({
    type: UPDATE_DATA,
    payload: res_data,
  });
};

export const deleteData = id => async dispatch => {
  const res = await fetch(URI.concat('/', id), {
    method: 'DELETE',
  });
  if (res.status === 200) {
    dispatch({
      type: DELETE_DATA,
      payload: id,
    });
  }
};
