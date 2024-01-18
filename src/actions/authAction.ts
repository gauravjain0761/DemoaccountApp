import {ThunkAction} from 'redux-thunk';
import {AnyAction} from 'redux';
import {makeAPIRequest} from '../utils/Global';
import {POST, apiConst} from '../utils/apiConstants';
import {RootState} from '../utils/types';
import {IS_LOADING} from './types';
import {errorToast, infoToast} from '../utils/constant';
import {getAsyncToken} from '../utils/asyncStorage';

export const onSignup =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
    };
    dispatch({type: IS_LOADING, payload: true});

    return makeAPIRequest({
      method: POST,
      url: apiConst.registration,
      headers: headers,
      data: request.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {          
          dispatch({type: IS_LOADING, payload: false});
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch(error => {
        dispatch({type: IS_LOADING, payload: false});
        if (request.onFailure) request.onFailure(error?.response?.data?.Message);
      });
  };

  export const onSignin =
  (request: any): ThunkAction<void, RootState, unknown, AnyAction> =>
  async dispatch => {
    let headers = {
      'Content-Type': 'application/json',
    };
    dispatch({type: IS_LOADING, payload: true});

    return makeAPIRequest({
      method: POST,
      url: apiConst.registration,
      headers: headers,
      data: request.data,
    })
      .then(async (response: any) => {
        if (response.status === 200) {          
          dispatch({type: IS_LOADING, payload: false});
          if (request.onSuccess) request.onSuccess(response?.data);
        }
      })
      .catch(error => {
        dispatch({type: IS_LOADING, payload: false});
        console.log('error?.response?.data',error?.response?.data);
        
        if (request.onFailure) request.onFailure(error?.response?.data?.Message);
      });
  };
