module.exports=app=>{
  const friend = require("../controller/friend.controller.js");
  var router = require("express").Router();
  router.get("/request",friend.create);
  router.get("/agree",friend.agree);
  router.get("/refuse",friend.refuse);
  router.get("/",friend.findFriend);
  router.get("/apply",friend.findApply);
  router.post("/update",friend.update);
  // router.get("/search",friend.findBySearch);

  app.use('/api/friend',router);
}