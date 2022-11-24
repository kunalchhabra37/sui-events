const  {WebSocket, createWebSocketStream } = require("ws");
let socket = new WebSocket("ws://localhost:9001");


// socket.onopen = function(e) {
//   console.log("[open] Connection established");
//   console.log("Sending to server");
//   socket.send("My name is John");
// };

// socket.onmessage = function(event) {
//   console.log(`[message] Data received from server: ${event.data}`);
// };

// socket.onclose = function(event) {
//   if (event.wasClean) {
//     console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
//   } else {
//     // e.g. server process killed or network down
//     // event.code is usually 1006 in this case
//     console.log('[close] Connection died');
//   }
// };

// socket.onerror = function(error) {
//   console.log(`[error]`);
// };

// const main = async () => {

//     console.log("establishing connection...");
//     socket.send({"jsonrpc":"2.0", "id": 1, "method": "sui_subscribeEvent", "params": [{"All":[{"Package":"0x26d943059b2c6420671bc7c66b3e72b8532f0e7f"}]}]});

// 


const main = async () => {
    socket.on("open", async () => {
        console.log("connected to ws");
        let res = await socket.send('{"jsonrpc":"2.0", "id": 1, "method": "sui_subscribeEvent", "params": [{"All":[{"Package":"0x26d943059b2c6420671bc7c66b3e72b8532f0e7f"}]}]}');
        console.log(res);
    });

}

main()