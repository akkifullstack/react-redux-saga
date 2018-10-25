function ApiError(message, status, token, ...args) {
	let instance = new Error(message, ...args);
	
	instance.status = status;
	instance.token = token;

	Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
	if(Error.captureStackTrace)
		Error.captureStackTrace(instance, ApiError);

	return instance;
}

ApiError.prototype = Object.create(Error.prototype, {
	constructor: {
		value: Error,
		enumerable: false,
		writable: true,
		configurable: true
	}
});

if(Object.setPrototypeOf)
	Object.setPrototypeOf(ApiError, Error);
else
	ApiError.__proto__ = Error;

export default ApiError;