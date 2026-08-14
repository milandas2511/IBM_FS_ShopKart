const router = require("express").Router();
const auth = require("../middleware/auth");
const { profile, update } = require("../controllers/userController");
router.use(auth);
router.get("/profile", profile);
router.put("/profile", update);
module.exports = router;
