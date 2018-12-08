const app = require('./app');
const db = require('./database');

const port = 1337;

const start = async () => {
  await db.sync();
  app.listen(port, () => {
    console.log('Listening here', port);
  });
}

start();
