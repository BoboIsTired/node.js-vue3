const { sequelize, Sequelize } = require(".");

module.exports=(sequelize,Sequelize)=>{
  const Lol = sequelize.define("herodata",{
    nickname: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    winRate: {
      type: Sequelize.STRING
    },
    inRate: {
      type: Sequelize.STRING
    },
    banRate: {
      type: Sequelize.STRING
    },
    headUrl: {
      type: Sequelize.STRING
    },
    heroPicUrl: {
      type: Sequelize.STRING
    },
    heroBgUrl: {
      type: Sequelize.STRING
    },
    line:{
      type: Sequelize.INTEGER
    },

  })
  return Lol
}