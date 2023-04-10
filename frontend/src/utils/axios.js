import axios from 'axios';
import Alert from './alert';
import Storage from './storage'
import config from './config';


const API = axios.create({
 baseURL: config.backendUrl,
 timeout: 20000
});

API.defaults.headers.common['Authorization'] = `${Storage.get('token')?.token}`;

API.defaults.timeout = 20000;

const handleSessionExpired = (error) => {
 console.log(error)
 const cb = () => setTimeout(_=>window.location.href = '/', 4000),
 message = 'Session expired, please login again';

 if (error.response.status === 401) {
  Storage.remove('token')
  Alert({type: 'error', message, cb});
  
 } else if(error?.response?.status === 400 && error?.response?.data?.message?.indexOf('no token') > -1){
  Alert({type: 'error', message});
 }
 else if(error?.response?.status === 403 && error?.response?.data?.message?.toLowerCase()?.indexOf('account suspended!') > -1){
  Storage.remove('token')
  const message = 'Account suspended! you are being redirected...'
  Alert({type: 'error', message, cb});
 }
 else {
  return Promise.reject(error?.response?.data);
 }
};

const handleSuccess = (response) => {
 return response;
};

API.interceptors.response.use(handleSuccess, handleSessionExpired)

API.interceptors.request.use(config => {
 const cb = () => setTimeout(_=>window.location.href = '/', 2000),
 message = 'Session expired, please login again';

 if(Storage.get('token')?.token === null && window.location.href.indexOf('/Login') === -1 && window.location.href !== 'http://localhost:3000/'){
  Alert({type: 'error', message});
 }

 return config;
}
, error => {
 return Promise.reject(error);
});


export default API;

// import axios from 'axios';
// import Alert from './alert';
// import Storage from './storage'
// import config from './config';


// const API = axios.create({
//  baseURL: config.backendUrl,
// });

// API.defaults.headers.common['Authorization'] = `${Storage.get('token')?.token}`;

// const handleSessionExpired = (error) => {
//  console.log(error)
//  const cb = () => setTimeout(_=>window.location.href = '/', 4000),
//  message = 'Session expired, please login again';

//  if (error.response.status === 401) {
//   Storage.remove('token')
//   Alert({type: 'error', message, cb});
  
//  } else if(error?.response?.status === 400 && error?.response?.data?.message?.indexOf('no token') > -1){
//   Alert({type: 'error', message});
//  }
//  else if(error?.response?.status === 403 && error?.response?.data?.message?.toLowerCase()?.indexOf('account suspended!') > -1){
//   Storage.remove('token')
//   const message = 'Account suspended! you are being redirected...'
//   Alert({type: 'error', message, cb});
//  }
//  else {
//   return Promise.reject(error?.response?.data);
//  }
// };

// const handleSuccess = (response) => {
//  return response;
// };

// API.interceptors.response.use(handleSuccess, handleSessionExpired)

// API.interceptors.request.use(config => {
//  const cb = () => setTimeout(_=>window.location.href = '/', 2000),
//  message = 'Session expired, please login again';

//  if(Storage.get('token')?.token === null && window.location.href.indexOf('/Login') === -1 && window.location.href !== 'http://localhost:3000/'){
//   Alert({type: 'error', message});
//  }

//  return config;
// }
// , error => {
//  return Promise.reject(error);
// });


// export default API;
