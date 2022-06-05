const db = require("../models");
const Hero = db.hero;
const Sequelize = require('sequelize');
const Op = Sequelize.Op
exports.create =(req,res)=>{
  // if(!req.body.nickname){

  // }
  const hero = {
    nickname: req.body.nickname,
    name:req.body.name,
    winRate:req.body.winRate,
    inRate:req.body.inRate,
    banRate:req.body.banRate,
    headUrl:req.body.headUrl,
    heroPicUrl:req.body.heroPicUrl,
    heroBgUrl:req.body.heroBgUrl,
    line:req.body.line,
  };

  Hero.create(hero).then(data=>{
    res.send(data);
  })
}


exports.findAll=(req,res)=>{
  Hero.findAll({
    order:[
      ['winRate','DESC']
    ],

  }).then((data)=>{
    res.send(data);
  })
}

exports.findBySearch=(req,res)=>{
  Hero.findAll({
    order:[
      ['winRate','DESC']
    ],
    where:{
      nickname:{
        [Op.like]: '%'+req.query.keyWord+'%' ,
      }
    }
  }).then((data)=>{
    res.send(data);
    // console.log()
  })
}


