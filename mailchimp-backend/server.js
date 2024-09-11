const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

const app = express();
const port = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON request bodies

// Mailchimp API URL and Key from environment variables
const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY;
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_LIST_ID;
const MAILCHIMP_SERVER_PREFIX = process.env.MAILCHIMP_SERVER_PREFIX; // Use environment variable for server prefix

// Route to handle form submissions
app.post('/subscribe', async (req, res) => {
    const { email_address, FNAME, BIRTHDAY_DAY, BIRTHDAY_MONTH } = req.body;

    try {
        const response = await axios.post(`https://${MAILCHIMP_SERVER_PREFIX}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`, {
            email_address,
            status: 'subscribed',
            merge_fields: {
                FNAME,
                BIRTHDAY_DAY,
                BIRTHDAY_MONTH
            }
        }, {
            headers: {
                'Authorization': `Bearer ${MAILCHIMP_API_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        res.status(200).send('Subscription successful');
    } catch (error) {
        console.error('Error subscribing to Mailchimp:', error);
        res.status(500).send('Failed to subscribe');
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
