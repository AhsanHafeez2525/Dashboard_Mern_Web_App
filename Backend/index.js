const express = require('express');
require('./db/config');
const cors = require('cors');
const User = require('./db/User');
const app = express();

app.use(express.json());
app.use(cors());
app.post('/register', async (req, res) => {
	let user = new User(req.body);
	let result = await user.save();
	result = result.toObject();
	delete result.password;
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

app.post('/login', async (req, res) => {
	console.log(req.body);

	if (req.body.password && req.body.email) {
		let user = await User.findOne(req.body).select('-password');
		if (user) {
			res.send(user);
		} else {
			res.send({ result: 'No user found' });
		}
	}

	// res.send(userLogin);
});

app.listen(5000, () => {
	console.log('server is running');
});
