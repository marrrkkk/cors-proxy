const express = require('express');
const app = express();

// Add CORS headers
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/api', async (req, res) => {
    try {
        const { url } = req.query;

        // Error Handling
        if (!url) {
            return res.status(400).json({ error: 'Missing URL parameter' });
        }

        try {
            new URL(url);
        } catch (error) {
            return res.status(400).json({ error: 'Invalid URL' });
        }

        try {
            await fetch(url, { method: 'HEAD' });
        } catch (error) {
            return res.status(400).json({ error: "Failed to fetch" });
        }
        
        // Make a request and send response back to client
        const response = await fetch(url);
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.all('/', (req, res) => {
    res.send('OK');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));