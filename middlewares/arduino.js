const Socket = require("socket.io");
const io = Socket();
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");
const port = new SerialPort({ path: "COM4", baudRate: 9600 });

const Arduino = () => {
    console.log("Arduino connected");
    const parser = new ReadlineParser({delimiter: '\n'});
    port.pipe(parser);

    const message = port.write("lapasmato");

    parser.on("data", (data) => {
        console.log(data)
    });
};

module.exports = Arduino;
