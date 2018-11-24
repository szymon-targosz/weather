const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const publicPath = path.resolve(__dirname, '../public');

app.use(express.static(publicPath));

app.listen(port, () => {
    console.log('Server is up.');
});