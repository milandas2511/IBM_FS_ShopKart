const router = require("express").Router();
const { create } = require("../controllers/contactController");
router.post("/", create);
module.exports = router;
