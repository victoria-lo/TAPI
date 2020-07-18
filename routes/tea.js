const express = require('express');
const router  = express.Router();
const teaController = require('../controllers/tea');


router.get('/tea', teaController.getAllTea);
router.post('/tea', teaController.newTea);
router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:id', teaController.getOneTea);
router.post('/tea/:id', teaController.newComment);
router.delete('/tea/:id', teaController.deleteOneTea);

module.exports = router;