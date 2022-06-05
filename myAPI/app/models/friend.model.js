const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
  const Lol = sequelize.define("friendList",{
    host: {
      type: Sequelize.STRING
    },
    guest:{
      type: Sequelize.STRING
    },
    isRequest:{
      type: Sequelize.INTEGER
    },


  })
  return Lol
}