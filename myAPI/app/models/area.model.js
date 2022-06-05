const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
  const Lol = sequelize.define("areadata",{
    areaName: {
      type: Sequelize.STRING
    },
    picUrl: {
      type: Sequelize.STRING
    },
    iconUrl: {
      type: Sequelize.STRING
    },
    

  })
  return Lol
}