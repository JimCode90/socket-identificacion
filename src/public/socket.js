const socket = io.connect();

export const saveSospechoso = (id_camara, nombre_img, img_match, unidad) => {
    socket.emit("client:newSospechoso", {
        id_camara,
        nombre_img,
        img_match,
        unidad
    });
};

export const onNewSospechoso = (callback) => {
    socket.on("server:newSospechoso", (data)=>{
        console.log(data)
    });
};