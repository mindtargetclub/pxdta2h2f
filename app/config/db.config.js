module.exports = {
  HOST: "114.32.222.77",
  USER: "pgadmin",
  PASSWORD: "0935451200",
  DB: "playgame",
  dialect: "mysql",
  port: 3306,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// heroku config:set DATABASE_URL='mysql://pgadmin@us-cdbr-iron-east-02.cleardb.net/heroku_7643ec736354xxx?reconnect=true'

// heroku config:add DATABASE_URL=mysql://pgadmin:0935451200@114.32.222.77/playgame
