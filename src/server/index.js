import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import {route} from './routes/index.js';

const app = express();

app.use(cors({
	credentials: true,
	origin: 'notes-kus-z1be.vercel.app',
}));
app.use(express.json());
app.use('/api', route);

const MONGO_EMAIL = 'root';
const MONGO_PASSWORD = 'root';

const runServer = async () => {
	try {
		mongoose.set('strictQuery', true);
		await mongoose.connect(`mongodb+srv://${MONGO_EMAIL}:${MONGO_PASSWORD}@main.uwwbqo8.mongodb.net/?retryWrites=true&w=majority`);
	} catch (err) {
		throw new Error(err);
	} finally {
		app.listen(2020, () => {
			console.log('Listen...');
		});
	}
};

runServer();
