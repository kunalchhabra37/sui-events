const  {WebSocket, createWebSocketStream } = require("ws");

// const ws = new WebSocket("ws://localhost:9001");

// const duplex = createWebSocketStream(ws, { encoding: "utf8" });

// duplex.pipe(process.stdout);
// process.stdin.pipe(duplex);

// ws.on("message", function message(data) {
//   console.log(`received: ${data}`);
// });

const createStream = async () => {
  const streamObject = {
    jsonrpc: "2.0",
    id: 1,
    method: "sui_subscribeEvent",
    params: [
      { All: [{ Package: "0x7bd922a80fcb131a0d6a65485a7c41db28416dd3" }] },
    ],
  };
  const ws = new WebSocket("ws://localhost:9001");
  const duplex = await createWebSocketStream(ws, streamObject);
  console.log(duplex);

  duplex.pipe(process.stdout);
  process.stdin.pipe(duplex);

  ws.on("message", function message(data) {
    console.log(`received: ${data}`);
  });
};

createStream()