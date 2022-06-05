const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect
  }
)
const db={};
db.sequelize = sequelize;
db.Sequelize = sequelize;
db.hero = require('./hero.model.js')(sequelize,Sequelize)
db.area = require('./area.model.js')(sequelize,Sequelize)
db.user = require('./user.model.js')(sequelize,Sequelize)
db.friend = require('./friend.model.js')(sequelize,Sequelize)
db.myfriend = require('./myfriend.model.js')(sequelize,Sequelize)
module.exports= db
