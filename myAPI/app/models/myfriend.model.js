const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
  const Lol = sequelize.define("friendOfUser",{
    host: {
      type: Sequelize.STRING
    },
    guest:{
      type: Sequelize.STRING
    },

  })
  return Lol
}