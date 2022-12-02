const express = require('express');
const app = express();
const port = 3000;

// Deze middleware zorgt ervoor dat express pagina's in de folder /client/public zal aanbieden.
app.use('/', express.static('../Client/Public'));
app.use('/getal-raden-spel', express.static('../Client/Public/getal-raden-spel'));

app.listen(port, () => {
    console.log(`NodeJS-Express listening at http://localhost:${port}`)
});