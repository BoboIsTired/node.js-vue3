const db = require("../models");
const Myfriend= db.myfriend;
const Sequelize = require('sequelize');
const Op = Sequelize.Op

//添加好友成功
exports.create=(req,res)=>{
  Myfriend.create({
    host: req.query.host,
    guest: req.query.guest,
  }).then((data)=>{
    res.send(data);
  }),
  Myfriend.create({
    host: req.query.guest,
    guest: req.query.host,
  })
}

//查看好友
exports.findFriend=(req,res)=>{
  Myfriend.findAll({
    where:{
      guest:req.query.userNickname
    }
  }).then((data)=>{
    res.send(data);
  })
}


//用户修改信息后，更新好友表
exports.update=(req,res)=>{
  Myfriend.update(
    {
      host:req.body.newNickname
    },
    {
      where:{
        host:req.body.userNickname
      }
  }).then((data)=>{
    res.send(data);
  }),

  Myfriend.update(
    {
      guest:req.body.newNickname
    },
    {
      where:{
        guest:req.body.userNickname
      }
  })

}
