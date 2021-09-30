const pool = require("./conexion");

const getZona = async (req, res) => {
  try {
    const response = await pool.query(
      `select * from zona`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getZonaId = async (req, res) => {
  try {
    const { id_zona } = req.params;
    const response = await pool.query(
      `select * from zona where id_zona = ${id_zona}`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getZonaUbicacion = async (req, res) => {
  try {
    const { longitud, latitud } = req.params;
    const response = await pool.query(
      `select * from zona
      where latitud = '${latitud}' and longitud = '${longitud}'`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getZona,
  getZonaId,
  getZonaUbicacion,
};
