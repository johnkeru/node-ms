const express = require("express");
const { UserController } = require("../controllers/user_controller");

const router = express.Router();
const userController = new UserController();

router.post("/", (req, res) => userController.create(req, res));
router.get("/", (req, res) => userController.getAll(req, res));
router.get("/:id", (req, res) => userController.getById(req, res));
router.put("/:id", (req, res) => userController.update(req, res));
router.delete("/:id", (req, res) => userController.delete(req, res));

module.exports = router;
