const  {WebSocket} = require("ws");
let socket = new WebSocket("ws://localhost:9001");

const main = async () => {
    socket.on("open", async () => {
        console.log("connected to ws");
        let rpcObject = {"jsonrpc":"2.0", "id": 1, "method": "sui_subscribeEvent", "params": [{"All":[{"Package":"0x26d943059b2c6420671bc7c66b3e72b8532f0e7f"}]}]}
        // let res = await socket.emit('rpc', {"jsonrpc":"2.0", "id": 1, "method": "sui_subscribeEvent", "params": [{"All":[{"Package":"0x26d943059b2c6420671bc7c66b3e72b8532f0e7f"}]}]});
        let result = await socket.send(JSON.stringify(rpcObject));
        console.log(`response rpc: ${result}`);

        socket.on("message", (res) => {
            console.log(`res; ${res}`);
        })
    });
}

main()