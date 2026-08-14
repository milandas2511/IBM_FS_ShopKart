const router = require("express").Router();
const auth = require("../middleware/auth");
const { get, toggle } = require("../controllers/wishlistController");
router.use(auth);
router.get("/", get);
router.post("/:productId/toggle", toggle);
module.exports = router;
