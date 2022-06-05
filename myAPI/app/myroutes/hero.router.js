module.exports=app=>{
  const hero = require("../controller/hero.controller.js");
  var router = require("express").Router();
  router.post("/",hero.create);
  router.get("/",hero.findAll);
  router.get("/search",hero.findBySearch);
  app.use('/api/hero',router);
}