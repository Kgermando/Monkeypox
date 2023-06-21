declare let process: any;
const env = process.env.NODE_ENV;

export const environment = {  
  apiURL: (env  === 'production') 
    ? 'https://mpox.eventdrc.tech/api'
    : 'http://localhost:8080/api'
};