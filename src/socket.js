import {
    createSospechoso,
    getSospechoso
} from "./models/sospechosos.js";

export default (io) => {
    io.on("connection", (socket) => {
        // console.log(socket.handshake.url);
        console.log("nuevo socket connectado:", socket.id);


        socket.on("client:newSospechoso", async (data) => {
            const result = await createSospechoso(data);
            const result2 = await getSospechoso(data.nombre_img)
            console.log(result2)
            io.sockets.emit("SERVER_NEWSOSPECHOSO", { ...result2 });
        });

        socket.on("disconnect", () => {
            console.log(socket.id, "disconnected");
        });
    });
};
