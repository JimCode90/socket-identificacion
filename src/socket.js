import {
    createSospechoso,
    getSospechoso,
    getUltimoSospechoso
} from "./models/sospechosos.js";

export default (io) => {
    io.on("connection", (socket) => {
        // console.log(socket.handshake.url);
        console.log("nuevo socket connectado:", socket.id);


        socket.on("client:newSospechoso", async (data) => {
            const ultimoResult = await getUltimoSospechoso();
            console.log(typeof ultimoResult)
            console.log(ultimoResult)
            if (ultimoResult === undefined) {
                const result = await createSospechoso(data);
                const result2 = await getSospechoso(data.nombre_img)
                io.sockets.emit("SERVER_NEWSOSPECHOSO", { ...result2 });
                return;

            }
            if (ultimoResult.nombre_img !== data.nombre_img){
                const result = await createSospechoso(data);
                const result2 = await getSospechoso(data.nombre_img)
                io.sockets.emit("SERVER_NEWSOSPECHOSO", { ...result2 });
            }
        });

        socket.on("disconnect", () => {
            console.log(socket.id, "disconnected");
        });
    });
};
