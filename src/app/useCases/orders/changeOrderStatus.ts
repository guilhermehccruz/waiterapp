import { Request, Response } from 'express';

import { Order } from '../../models/Order';

export async function changeOrderStatus(request: Request, response: Response) {
	try {
		const { orderId } = request.params;
		const { status } = request.body;

		if (![
			'WAITING',
			'IN_PRODUCTION',
			'DONE',
		].includes(status)) {
			response.status(400).json({
				error: 'bad-request',
				message: 'status must be one of the following value: WAITING, IN_PRODUCTION, DONE',
			});

			return;
		}

		await Order.findByIdAndUpdate(orderId, { status });

		response.sendStatus(204);
	} catch(error) {
		console.error(error);

		response.status(500).json({
			error: 'internal-server',
			message: 'An internal server error has occurred',
		});
	}
}
