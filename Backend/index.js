const express = require('express');

const mongoose = require('mongoose');

const app = express();

const connectDB = async () => {
	mongoose.connect('mongodb://localhost:27017/e-commerce');
	const productSchema = new mongoose.Schema({});
	const products = mongoose.model('products', productSchema);
	const data = await products.find();
	console.log(data);
};
connectDB();

// app.get('/', (req, res) => {
// 	res.send('welcome to mern stack course');
// });

app.listen(5000, () => {
	console.log('server is running');
});
