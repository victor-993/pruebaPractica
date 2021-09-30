const pool = require("./conexion");

const getAnimal = async (req, res) => {
  try {
    const response = await pool.query(
      `select * from animal`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getAnimalId = async (req, res) => {
  try {
    const { animal_id } = req.params;
    const response = await pool.query(
      `select * from animal where animal_id = ${animal_id}`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getAnimalPropietario = async (req, res) => {
  try {
    const { nombre_pro } = req.params;
    const response = await pool.query(
      `select * from animal where nombre_pro = '${nombre_pro}'  order by nombre_pro`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

const getAnimalUbicacion = async (req, res) => {
  try {
    const { longitud, latitud } = req.params;
    const response = await pool.query(
      `select * from animal 
      where latitud = '${latitud}' and longitud = '${longitud}'`
    );
    res.send(response.rows);
  } catch (e) {
    console.error(e);
  }
};

module.exports = {
  getAnimal,
  getAnimalPropietario,
  getAnimalId,
  getAnimalUbicacion,
};
