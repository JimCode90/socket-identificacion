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

// export const getSospechoso = async (foto) => {
//     console.log(foto)
//     const conn = await getConnection();
//     const [result] = await conn.query(`SELECT MP.nombre_img, MP.img_match, P.nombres, P.apellidos,P.nro_doc, P.id FROM match_personas as MP inner join personas as P where P.url_foto = ?`, [foto])
//     conn.end();
//     return result[0];
//
// }

export const getSospechoso = async (foto) => {
    console.log(foto)
    const conn = await getConnection();
    const [result] = await conn.query(`SELECT * FROM personas where url_foto = ?`, [foto])
    conn.end();
    return result[0];

}

export const getUltimoSospechoso = async () => {
    const conn = await getConnection();
    const [result] = await conn.query(`SELECT id, id_camara, nombre_img, img_match, unidad FROM match_personas WHERE id = (SELECT MAX(id) FROM match_personas)`, [])
    conn.end();
    return result[0]
}

