import { getConnection } from "../db.js";

export const createSospechoso = async (newSospechoso) => {
    const conn = await getConnection();
    const result = await conn.query(
        `INSERT INTO match_personas (id_camara, nombre_img, img_match, unidad) VALUES (?, ?, ?, ?)`,
        [newSospechoso.id_camara, newSospechoso.nombre_img, newSospechoso.img_match, newSospechoso.unidad]
    )
    conn.end();
    return result[0];
}

export const getSospechoso = async (foto) => {
    console.log(foto)
    const conn = await getConnection();
    const [result] = await conn.query(`SELECT MP.nombre_img, MP.img_match, P.nombres, P.apellidos,P.nro_doc FROM match_personas as MP inner join denunciado_fotos as DF on MP.nombre_img = DF.nombre_img inner join personas as P on DF.id_denunciado = P.id where MP.nombre_img = ?`, [foto])
    conn.end();
    return result[0];

}

export const getUltimoSospechoso = async () => {
    const conn = await getConnection();
    const [result] = await conn.query(`SELECT id, id_camara, nombre_img, img_match, unidad FROM match_personas WHERE id = (SELECT MAX(id) FROM match_personas)`, [])
    conn.end();
    return result[0]
}

