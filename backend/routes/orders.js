const router = require("express").Router();
const auth = require("../middleware/auth");
const { create, list } = require("../controllers/orderController");
router.use(auth);
router.post("/", create);
router.get("/", list);
module.exports = router;
