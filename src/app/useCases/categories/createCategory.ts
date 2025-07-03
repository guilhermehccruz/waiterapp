import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function createCategory(request: Request, response: Response) {
	try {
		const { name, icon } = request.body;

		if (!name || !icon) {
			response.status(400).json({
				error: 'bad-request',
				message: 'name and icon are required',
			});

			return;
		}

		const category = await Category.create({
			name,
			icon,
		});

		response.status(201).json(category);
	} catch(error) {
		console.error(error);

		response.status(500).json({
			error: 'internal-server',
			message: 'An internal server error has occurred',
		});
	}
}
