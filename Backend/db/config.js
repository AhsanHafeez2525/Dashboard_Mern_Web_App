const mongoose = require('mongoose');

const connectionString =
	'mongodb+srv://ahsansatti602:satti321321@clusterdashboard.f3p1fjy.mongodb.net/e-dashboard';

mongoose.connect(connectionString, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
	console.log('Connected to MongoDB Atlas');
});

module.exports = db;
