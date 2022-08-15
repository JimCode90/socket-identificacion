import { getConnection } from "../db.js";

export const createSospechoso = async (newSospechoso) => {
    const conn = await getConnection();
    const result = await conn.query(
        `INSERT INTO match_personas (id_camara, nombre_img, img_match, unidad ) VALUES (?, ?, ?, ?)`,
        [newSospechoso.id_camara, newSospechoso.nombre_img, newSospechoso.img_match, newSospechoso.unidad]
    )
    return result[0];
}