const express = require("express");
const multer = require("multer");

const upload = multer({ dest: "public/uploads" });

const router = express.Router();

const { verifyToken } = require("./services/jwt");

const roleControllers = require("./controllers/roleControllers");

router.get("/roles", roleControllers.browse);
router.get("/roles/:id", roleControllers.read);

const { hashPwd, verifyPwd } = require("./services/argon");

const userController = require("./controllers/userControllers");

router.post("/register", hashPwd, userController.createUser);
router.post("/login", verifyPwd, userController.login);

router.use(verifyToken);

router.get("/users", userController.browse);

router.get("/users/:id", userController.read);

router.post("/users", upload.single("avatar"), userController.add);

router.put("/users/:id", upload.single("avatar"), userController.edit);
router.put("/users/:id/role", userController.editRole);
router.delete("/users/:id", userController.destroy);

router.get("/refresh", userController.refresh);

router.delete("/logout", userController.logout);

module.exports = router;
