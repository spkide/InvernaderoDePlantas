var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bootstrap demo' });
});

module.exports = router;

// Ruta POST para recibir datos del ESP32
router.post('/api/datos', function(req, res) {
  // Ejemplo: espera recibir { temperatura: 25, humedad: 60 }
  const { temperatura, humedad } = req.body;
  console.log('Datos recibidos del ESP32:', temperatura, humedad);
  // Aquí puedes guardar los datos en SQLite
  res.json({ status: 'ok' });
});
