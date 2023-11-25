const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('welcome to mern stack course');
});

app.listen(5000, () => {
	console.log('server is running');
});
