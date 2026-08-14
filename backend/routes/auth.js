const router = require("express").Router();
const { register, login, me } = require("../controllers/authController");
const auth = require("../middleware/auth");
router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, me);
router.post("/logout", (req,res)=>res.json({message:"Logged out"}));
module.exports = router;
