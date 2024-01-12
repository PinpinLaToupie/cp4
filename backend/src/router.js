const express = require("express");

const router = express.Router();

const { hashPwd, verifyPwd } = require("./services/argon");

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userController = require("./controllers/userControllers");
const { verifyToken } = require("./services/jwt");

// Route to get a list of items
router.get("/users", userController.browse);

// Route to get a specific item by ID
router.get("/users/:id", userController.read);

// Route to add a new item
router.post("/users", verifyToken, userController.add);

router.post("/register", hashPwd, userController.createUser);
router.post("/login", verifyPwd, userController.login);

router.put("/users/:id", userController.edit);
router.delete("/users/:id", userController.destroy);

router.get("/refresh", userController.refresh);

/* ************************************************************************* */

module.exports = router;
