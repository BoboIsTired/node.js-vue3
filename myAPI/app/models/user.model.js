const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
  const Lol = sequelize.define("userdata",{
    username: {
      type: Sequelize.STRING
    },
    password:{
      type: Sequelize.STRING
    },
    userNickname:{
      type: Sequelize.STRING
    },
    userHeadUrl:{
      type: Sequelize.STRING
    },
    accountName:{
      type: Sequelize.STRING
    },
    accountHeadUrl:{
      type: Sequelize.STRING
    },
    accountLevel:{
      type: Sequelize.STRING
    },
    gamesCount:{
      type: Sequelize.INTEGER
    },
    accountWinRate:{
      type: Sequelize.STRING
    },
    KDA:{
      type: Sequelize.STRING
    },

  })
  return Lol
}