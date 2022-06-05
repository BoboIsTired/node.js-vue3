const db = require("../models");
const Area = db.area;

exports.create =(req,res)=>{
  // if(!req.body.nickname){

  // }
  const area = {
    areaName: req.body.areaName,
    picUrl: req.body.picUrl,
    iconUrl:req.body.iconUrl,
  };

  Area.create(area).then(data=>{
    res.send(data);
  })
}


exports.findAll=(req,res)=>{
  Area.findAll().then((data)=>{
    res.send(data);
  })
}