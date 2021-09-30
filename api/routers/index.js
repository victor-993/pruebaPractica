const Router = require("express-promise-router");
const router = new Router();

const {
  getAnimal,
  getAnimalPropietario,
  getAnimalId,
  getAnimalUbicacion,
} = require("../controlador/animales.js");

const {
  getUsuarioId,
  putUsuarioId,
  getUsuario,
  verifiUsuario,
  addUsuario,
  getUsuarioNick,
} = require("../controlador/usuarios.js");

const {
  getZona,
  getZonaId,
  getZonaUbicacion,
} = require("../controlador/zonas.js");


const verifyToken = require("../controlador/verifyToken")

//Ruta de animales

router.get("/animales", verifyToken, getAnimal);
router.get("/animalId/:animal_id", verifyToken, getAnimalId);
router.get("/animalPro/:nombre_pro", verifyToken, getAnimalPropietario);
router.get("/animalUbi/:longitud/:latitud", verifyToken, getAnimalUbicacion);

// Rutas de zonas

router.get("/zona", verifyToken, getZona);
router.get("/zonaId/:id_zona", verifyToken, getZonaId);
router.get("/zonaUbi/:longitud/:latitud", verifyToken, getZonaUbicacion);

// Rutas de usuarios

router.get("/usuario", getUsuario);
router.get("/usuario/:usuario_id", verifyToken, getUsuarioId);
router.get("/usuarionick/:nombre_usr", getUsuarioNick)
router.put("/usuario/:id", verifyToken, putUsuarioId);
router.post("/verifiusu/", verifiUsuario);
router.post("/usuario", addUsuario);


module.exports = router;
