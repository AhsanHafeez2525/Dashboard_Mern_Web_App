const express = require('express');
require('./db/config');
const User = require('./db/User');
const app = express();

app.use(express.json());

app.post('/register', async (req, res) => {
	let user = new User(req.body);
	let result = await user.save();
	// res.send(req.body);
	res.send(result);
});

// const connectDB = async () => {
// 	const productSchema = new mongoose.Schema({});
// 	const products = mongoose.model('products', productSchema);
// 	const data = await products.find();
// 	console.log(data);
// };
// connectDB();

// app.get('/', (req, res) => {
// 	res.send('welcome to mern stack course');
// });

app.listen(5000, () => {
	console.log('server is running');
});
