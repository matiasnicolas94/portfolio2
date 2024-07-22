const express = require ('express');

const router = express.Router();

const homeController = require('../controllers/homeController.js');
const formulariosController = require('../controllers/formulariosController.js');

router.get("/", homeController.home);
router.get("/formularios", formulariosController.homeVistas);
router.get("/formularios/normal", formulariosController.normal);
router.post("/formularios/normal", formulariosController.normal_post);

module.exports = router;