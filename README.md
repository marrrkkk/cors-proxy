# CORS Proxy with Express.js

This is a simple CORS (Cross-Origin Resource Sharing) proxy built using Express.js. It allows you to overcome CORS restrictions and access APIs from different origins by acting as an intermediary between your client-side application and the target API.

## Getting Started

For development purpose you can use my hosted proxy:
```
https://cors-proxy.vercel.app/api?url=
```
or you can host your own

### Prerequisites
- Node.js installed on your machine

### Installation
1. Clone the repository:
```bash
git clone https://github.com/marrrkkk/cors-proxy.git
```

2. Navigate to the project directory:
```bash
cd cors-proxy
```

3. Install dependencies:
```bash
npm install
```

### Usage
1. Start the Express server:
```bash
npm run start
```
The server will be running on http://localhost:3000 by default.

2. Use the CORS proxy in your client-side application by making requests to http://localhost:3000/api?url=TARGET_API_URL.

Replace TARGET_API_URL with the URL of the API you want to access.

### Example 
```js
const apiUrl = 'https://yourapihere.com/';

const fetchData = async () => {
    try {
        const response = await fetch('http:localhost:5000/api?url=' + encodeURIComponent(apiUrl));
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }

}
```

### Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.