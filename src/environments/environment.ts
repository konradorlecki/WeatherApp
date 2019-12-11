// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};
export const Api = {
  link: '//api.openweathermap.org/data/2.5',
  key: '9255e12d14f3883315c070a9d1899c07'
};
export const GoogleMapsApi = {
  key: 'AIzaSyCDi6Pxzc7StvKLqNPn9GbENm5E2v1QINI',
};
export const firebaseConfig = {
  apiKey: 'AIzaSyAXjtZWmm1A42PhRKi4gA1iu9vyb0f5guc',
  authDomain: 'weather-app-1bc2d.firebaseapp.com',
  databaseURL: 'https://weather-app-1bc2d.firebaseio.com',
  projectId: 'weather-app-1bc2d',
  storageBucket: 'weather-app-1bc2d.appspot.com',
  messagingSenderId: '255092272003',
  appId: '1:255092272003:web:2f9df89b6e35998a1364b6'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
