import {
    createSospechoso,
} from "./models/sospechosos.js";

export default (io) => {
    io.on("connection", (socket) => {
        // console.log(socket.handshake.url);
        console.log("nuevo socket connectado:", socket.id);


        socket.on("client:newSospechoso", async (data) => {
            console.log(data)
            const result = await createSospechoso(data);
            // io.emit("server:newSospechoso", { ...data, id: result.insertId });
        });

        socket.on("disconnect", () => {
            console.log(socket.id, "disconnected");
        });
    });
};
