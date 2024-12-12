const baseUrl = process.env.NODE_ENV === "production" 
? 'https://apikuslabs.com/assets/resources.json' 
: 'http://localhost:3000';

export default baseUrl;