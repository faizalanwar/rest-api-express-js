const absenController = require('../controllers/absen.controller.js');
const router = require('express').Router();

router.post('/', absenController.create);
router.get('/', absenController.index);
router.put('/:id', absenController.update);
router.delete('/:id', absenController.delete);

module.exports = router;