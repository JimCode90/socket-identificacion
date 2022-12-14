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
            if (ultimoResult === undefined) {
                const result = await createSospechoso(data);
                console.log(data)
                const result2 = await getSospechoso(data.nombre_img)
                io.sockets.emit("SERVER_NEWSOSPECHOSO", { ...result2, ...data });
                return;

            }
            if (ultimoResult.nombre_img !== data.nombre_img){
                const result = await createSospechoso(data);
                const result2 = await getSospechoso(data.nombre_img)
                io.sockets.emit("SERVER_NEWSOSPECHOSO", { ...result2, ...data });
            }
        });

        socket.on("disconnect", () => {
            console.log(socket.id, "disconnected");
        });
    });
};
