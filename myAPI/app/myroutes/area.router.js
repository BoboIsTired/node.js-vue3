module.exports=app=>{
  const area = require("../controller/area.controller.js");
  var router = require("express").Router();
  router.post("/",area.create);
  router.get("/",area.findAll);
  app.use('/api/area',router);
}