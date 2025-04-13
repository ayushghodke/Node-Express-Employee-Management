const express = require("express");
const router = express.Router();
const employee = require("../controllers/employee.controller");

router.post("/", employee.create);
router.get("/", employee.findAll);
router.get("/:id", employee.findOne);
router.put("/:id", employee.update);
router.delete("/:id", employee.delete);

module.exports = router;
