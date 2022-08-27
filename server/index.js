const {app, server} = require('./app');
const {Nuxt, Builder}  = require('nuxt');
const config = require('../nuxt.config');
const morgan = require('morgan');

const nuxt = new Nuxt(config);
const builder = new Builder(nuxt);

app.use(morgan('dev'));
const PORT = process.env.PORT

builder.build()
  .then(() => {
  // Рендерить каждый маршрут сNuxt.js
    app.use(nuxt.render)
    // Запустить сервер
    server.listen(PORT||8080, ()=>{
       console.log(`Server run in `);
    });
  });