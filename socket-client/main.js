const { Manager } = require("socket.io-client");

const manager = new Manager("ws://206.189.234.1:8000/api", {
  reconnectionDelayMax: 10000,
  /*query: {
    "my-key": "my-value"
  }*/
});

const socket = manager.socket("/", {
  auth: {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZW1haWwiOiJmZXJuYW5kb2NoYWh1YTFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJwb3dwdW5jaDEyIiwicm9sZSI6MSwic2Vzc2lvbklkIjoxLCJpYXQiOjE2Mzg0NjQxMjQsImV4cCI6MTYzODQ5MjkyNH0.gkV8dOhGf6WIes00dA1R_hPvrw3DLZ6VqcjCIKkG8nA"
  }
});

manager.open((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('success');
    }
  });

  socket.io.on("error", (error) => {
    console.log(error);
  });

  socket.on("connect", () => {
    console.log(socket); // "G5p5..."
  });

socket.on("follow-module", (...args) => {
    console.log(args);
    console.log('Success');
  });