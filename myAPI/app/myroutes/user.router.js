const multer=require('multer');
const upload = multer({ dest: "img/" })

module.exports=app=>{
  const user = require("../controller/user.controller.js");
  var router = require("express").Router();
  router.post("/",user.create);
  router.get("/",user.findAll);
  router.get("/login",user.findLogin);
  router.post("/update",user.update);
  router.get("/search",user.findBySearch);
  router.get("/url",user.findUrl);

  router.post("/upload", upload.single('avatar'),user.editUserImg)

  app.use('/api/user',router);
}