import Config from '../config';
import ApiError from './ApiError';

export default class ApiService {
	constructor(service, token = '') {
		this.token = token;

		for(const [key, value] of Object.entries(service)) {
			if(typeof value === 'function') {
				this[key] = (...args) => service[key](this, ...args);
			}
		}
	}

	async fetch({ method = 'GET', url, body, headers = {} }) {
		const token = this.token;
		if(token)
			headers['Authorization'] = `CNJ ${token}`;

		if(!(body instanceof FormData)) {
			headers['Content-Type'] = 'application/json';
			body = body ? JSON.stringify(body) : undefined;
		}

		body = body || undefined;

		const request = new Request(Config.API + url, {
			method,
			body,
			headers
		});
	
		let response;
		try {
			response = await fetch(request);
		}
		catch(error) {
			throw new ApiError(error.message);
		}
	
		if(response.ok)
			return await response.json();
		else {
			let message;
			try {
				const json = await response.json();
				message = json ? json.message : null;
			}
			/* eslint-disable no-empty */
			catch(error) {}
			/* eslint-enable no-empty */

			throw new ApiError(message, response.status, token);
		}
	}
}