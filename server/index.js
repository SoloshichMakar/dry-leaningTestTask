const express = require('express');
const bodyParser = require('body-parser');
const redis = require('redis');

const routerUsers = require('./server/routes/routerUsers');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routerUsers);

app.set('port', (process.env.PORT || 4000));
app.listen(app.get('port'), () => {
  console.log(`Server is listening to port ${app.get('port')}`);
});
