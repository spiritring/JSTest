var tcp = require("./LighterWebEngine/TCP");

tcp.CreateServer(9000,
    function(){

    },
    function(hSocket, sBuffer){
        console.log(sBuffer);
        tcp.SendBuffer(hSocket, sBuffer);
    },
    function(hSocket){

    },
    function(hSocket){
        tcp.SendBuffer(hSocket, "hello!");
        tcp.SendBuffer(hSocket, "hello!x");
        tcp.SendBuffer(hSocket, "hello!xx");
    }
);