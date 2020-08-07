const express = require("express");
const router = express.Router();
const teaController = require("../controllers/tea");

router.get("/tea", teaController.getAllTea);
router.post(
  "/tea",
  teaController.checkAuth,
  teaController.uploadImg,
  teaController.newTea
);
router.delete("/tea", teaController.checkAuth, teaController.deleteAllTea);

router.get("/tea/:name", teaController.getOneTea);
router.post("/tea/:name", teaController.newComment);
router.delete(
  "/tea/:name",
  teaController.checkAuth,
  teaController.deleteOneTea
);

module.exports = router;
