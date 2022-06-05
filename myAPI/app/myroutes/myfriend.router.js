module.exports=app=>{
  const myfriend = require("../controller/myfriend.controller.js");
  var router = require("express").Router();
  router.get("/add",myfriend.create);

  router.get("/",myfriend.findFriend);
  router.post("/update",myfriend.update);

  // router.get("/search",friend.findBySearch);

  app.use('/api/myfriend',router);
}