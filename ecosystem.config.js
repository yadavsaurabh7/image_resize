module.exports = {
  apps : [{
    name   : "image_resize",
    script : "./index.js",
    watch : true,
    env_development: {
      NODE_ENV: "development",
      "PORT": 6001,
      "AMQP_URL":"amqp://guest:guest@127.0.0.1:5672?heartbeat=60",
      "DATABASE_URL" : "mongodb+srv://yadavsaurab7:<rsDGizUuEHqzOpdX>@cluster0.pmhp4mx.mongodb.net/?retryWrites=true&w=majority",
    },

  }]
}
