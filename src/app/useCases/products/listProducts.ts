import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProducts(request: Request, response: Response) {
	try {
		const categories = await Product.find();

		response.status(200).json(categories);
	} catch(error) {
		console.error(error);

		response.status(500).json({
			error: 'internal-server',
			message: 'An internal server error has occurred',
		});
	}
}
