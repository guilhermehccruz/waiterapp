import { Request, Response } from 'express';

import { Product } from '../../models/Product';

export async function listProductsByCategory(request: Request, response: Response) {
	const { categoryId } = request.params;

	console.log(categoryId);

	if (!categoryId) {
		response.status(400).json({
			error: 'bad-request',
			message: 'categoryId is required',
		});

		return;
	}

	const products = await Product.find()
		.where('categoryId')
		.equals(categoryId);

	response.status(200).json(products);
}
