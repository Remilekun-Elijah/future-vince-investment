const environment = {
  development: {
   backendUrl: "http://localhost:9000/v1",
  //  backendUrl: "https://api-vince.onrender.com/v1",
  },
  production: {
   backendUrl: "https://api-vince.onrender.com/v1",

  }
}

export default environment[process.env.NODE_ENV]

