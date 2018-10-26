const development = {
	API: 'http://localhost:4001/',
	MEDIA_URL: 'https://d22oes0c9mfxez.cloudfront.net',
	PAYPAL_ENV: 'sandbox'
};
const test = {
	API: 'https://api.test.carsandjobs.com/',
	MEDIA_URL: 'https://d22oes0c9mfxez.cloudfront.net',
	PAYPAL_ENV: 'sandbox'
};
const production = {
	API: 'https://api.carsandjobs.com/',
	MEDIA_URL: 'https://d15kn8h4izyiz.cloudfront.net',
	PAYPAL_ENV: 'production'
};
const staging = {
	API: 'https://api.test.carsandjobs.com/',
	MEDIA_URL: 'https://d22oes0c9mfxez.cloudfront.net',
	PAYPAL_ENV: 'sandbox'
};

const Config = (env = process.env.REACT_APP_ENV) => {
	if (env === 'production') {
		return production;
	} else if (env === 'staging') {
		return staging;
	} else if(env === 'test') {
		return test;
	}
	return development;
};
export default Config();
