import express from 'express';
import mongoose from 'mongoose';

import { router } from './routes';
import path from 'node:path';

async function run() {
	const app = express();

	app.use(express.json());

	app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

	await mongoose.connect('mongodb://localhost:27017');

	app.use(router);

	const PORT = 8080;

	app.listen(
		PORT,
		() => console.log(`Server is running on http://localhost:${PORT}`),
	);
}

void run();
