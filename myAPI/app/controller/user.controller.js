const db = require("../models");
const User = db.user;
const Sequelize = require('sequelize');
const Op = Sequelize.Op
let fs = require('fs');
let path = require('path');
const { user } = require("../models");

//注册
exports.create =(req,res)=>{
  // if(!req.body.nickname){

  // }
  const user = {
    username: req.body.username,
    password:req.body.password,
    userNickname:req.body.userNickname,

    userHeadUrl:'http://game.gtimg.cn/images/lol/v2/personal/avatar/default.png',
    accountName:'未知召唤师',
    accountHeadUrl:'http://ossweb-img.qq.com/images/lol/space/rank/2019pre/season_2019_silver_3.png',
    accountLevel:'lv 0',
    gamesCount:0,
    accountWinRate:'100%',
    KDA:'15'
  };

  User.create(user).then(data=>{
    res.send(data);
  })
}

exports.findAll=(req,res)=>{
  User.findAll({


  }).then((data)=>{
    res.send(data);
  })
}


//登录
exports.findLogin=(req,res)=>{
  User.findOne({
    where:{
      [Op.and]:[
        {username:req.query.username},
        {password:req.query.password}
      ]
    }
  }).then((data)=>{
    res.send(data);
    // console.log()
  })
}

//修改资料
exports.update=(req,res)=>{
  User.update(
    {
      userNickname:req.body.userNickname,
      password:req.body.password
    },
    {
      where:{
        username:req.body.username
      }
  }).then((data)=>{
    res.send(data);
  })
}

//查询用户
exports.findBySearch=(req,res)=>{
  User.findOne({

    where:{
      userNickname:req.query.keyword
    }
  }).then((data)=>{
    res.send(data);
    // console.log()
  })
}

//获取用户头像
exports.findUrl=(req,res)=>{
  User.findOne({
    attributes:['userHeadUrl'],
    where:{
      userNickname:req.query.friendNickname
    }
  }).then((data)=>{
    res.send(data);
    // console.log()
  })
}


//修改头像
exports.editUserImg = (req, res) => {

  // console.log(1)
  const file = req.file
    
  console.log(path.parse(req.file.originalname).ext);
  let oldname = req.file.path //获取path
  let newname = req.file.path + path.parse(req.file.originalname).ext  
  fs.renameSync(oldname, newname) //重命名
  console.log('文件类型：%s', file.mimetype)
  console.log('原始文件名：%s', file.originalname)
  console.log('文件大小：%s', file.size)
  console.log('文件保存路径：%s', file.path)


  User.update(
    {
      userHeadUrl:'http://localhost:3000/'+file.filename+path.parse(req.file.originalname).ext  //修改数据库
    },
    {
      where:{
        username:req.body.username
      }
  }).then((data)=>{
    res.send(data);
    // console.log()
  })


}