const express = require ("express");

const axios = require('axios')

const app = express();

const router = express.Router();

router.get("/topstories/:category", async (req, res) => {
    try {
        const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${req.params.category}.json?api-key=zojBZKGv4I331mXjUkgNLI6A1lcgFpIa`);
        if (response.status === 200) {
            res.json(response.data);
        } else {
            res.status(response.status).json({ error: 'Failed to fetch data from New York Times API' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router
