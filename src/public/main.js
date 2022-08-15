import { saveSospechoso } from "./socket.js";
import {onNewSospechoso} from "./socket.js";

const id_camara = document.querySelector("#id_camara");
const nombre_img = document.querySelector("#nombre_img");
const img_match = document.querySelector("#img_match");
const unidad = document.querySelector("#unidad");

window.addEventListener("DOMContentLoaded", () => {

});

const sospechosoForm = document.querySelector("#sospechosoForm");
sospechosoForm.addEventListener("submit", onHandleSubmit);

function onHandleSubmit(e) {
    e.preventDefault()
    console.log("enviando datos al socket")
    saveSospechoso(id_camara.value, nombre_img.value, img_match.value, unidad.value)
}