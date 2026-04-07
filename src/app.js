const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

module.exports = app;

if (require.main === module) {
  app.listen(3000, () => {
    console.log('Serveur démarré sur le port 3000');
  });
}
