const  {WebSocket, createWebSocketStream } = require("ws");

// const ws = new WebSocket("ws://localhost:9001");

// const duplex = createWebSocketStream(ws, { encoding: "utf8" });

// duplex.pipe(process.stdout);
// process.stdin.pipe(duplex);

// ws.on("message", function message(data) {
//   console.log(`received: ${data}`);
// });

const createStream = async () => {
  const ws = new WebSocket("ws://localhost:9001");
  ws.on("message", function message(data) {
    console.log(`received: ${data}`);
  });
};

createStream()