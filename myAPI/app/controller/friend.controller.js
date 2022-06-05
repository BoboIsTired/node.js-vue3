const db = require("../models");
const Friend = db.friend;
const Sequelize = require('sequelize');
const Op = Sequelize.Op

//申请好友
exports.create =(req,res)=>{
  
  Friend.create({
    host: req.query.host,
    guest: req.query.guest,
    isRequest: 1
  }).then(data=>{
    res.send(data);
  })
}


//同意好友
exports.agree=(req,res)=>{
  Friend.update(
    {
      isRequest: 0
      // isRequest:req.body.isRequest,
    },
    {
      where:{
        [Op.or]:[
          {id:req.query.id},
        ]
      }

  }).then((data)=>{
    res.send(data);
  })
}
//拒绝好友
exports.refuse=(req,res)=>{
  Friend.update(
    {
      isRequest: 2
      // isRequest:req.body.isRequest,
    },
    {
      where:{
        [Op.or]:[
          {id:req.query.id},
        ]
      }

  }).then((data)=>{
    res.send(data);
  })
}
//查看好友
exports.findFriend=(req,res)=>{
  Friend.findAll({
    where:{
      [Op.and]:[
        {host:req.query.userNickname},
        {isRequest:0}
      ]
    }
  }).then((data)=>{
    res.send(data);
  })
}

//查看申请列表
exports.findApply=(req,res)=>{
  Friend.findAll({
    where:{
      [Op.and]:[
        {guest:req.query.userNickname},
        {isRequest:1}
      ]
    }
  }).then((data)=>{
    res.send(data);
  })
}

//修改用户名后更新好友申请表
exports.update=(req,res)=>{
  Friend.update(
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

  Friend.update(
    {
      guest:req.body.newNickname
    },
    {
      where:{
        guest:req.body.userNickname
      }
  })
}


