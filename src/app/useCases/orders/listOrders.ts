import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function listOrders(request: Request, response: Response) {
	try {
		const orders = await Order.find()
			.sort({ createdAt: 'asc' })
			.populate('products.productId');

		response.status(200).json(orders);
	} catch(error) {
		console.error(error);

		response.status(500).json({
			error: 'internal-server',
			message: 'An internal server error has occurred',
		});
	}
}
