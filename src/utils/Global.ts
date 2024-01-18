import axios from 'axios';
import { baseURL } from './apiConstants';
export type State = {
  method?: string;
  url?: string;
  data?: any;
  headers?: unknown;
  params?: unknown;
  baseURL?: string;
};

export const makeAPIRequest = ({
  method,
  url,
  data,
  headers,
  params,
}: State) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method,
      baseURL: baseURL,
      url,
      data,
      headers,
      params,
    };
    console.log('options',options);
    //@ts-ignore
    axios(options)
      .then(response => {
        console.log('response',response);
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        console.log('error',error);
        reject(error);
      });
  });
