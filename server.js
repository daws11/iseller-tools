const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const router = express.Router();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Route
router.get('/', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running', version: '1.0.1' });
});

// 1. Route untuk Autentikasi
router.post('/auth', async (req, res) => {
    try {
        const { client_id, client_secret } = req.body;
        
        const response = await axios.post('https://isellershop.com/oauth/token', new URLSearchParams({
            grant_type: 'client_credentials',
            client_id,
            client_secret
        }), {
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Auth Error:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
    }
});

// 2. Route untuk GetProducts (Proxy)
router.post('/products', async (req, res) => {
    try {
        const { store_url, access_token, page } = req.body;
        // Pastikan URL bersih dari trailing slash
        const baseUrl = store_url.replace(/\/$/, "");
        
        const response = await axios.post(`${baseUrl}/api/v2/GetProducts`, new URLSearchParams({
            page: page,
            page_size: 100,
            includes: 'OrderDetails' // Jika diperlukan
        }), {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Products Error:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
    }
});

// 3. Route untuk GetOrders (Proxy)
router.post('/orders', async (req, res) => {
    try {
        const { store_url, access_token, ...params } = req.body;
        const baseUrl = store_url.replace(/\/$/, "");

        // Convert body params ke URLSearchParams
        const apiParams = new URLSearchParams();
        for (const key in params) {
            apiParams.append(key, params[key]);
        }

        const response = await axios.post(`${baseUrl}/api/v2/GetOrders`, apiParams, {
            headers: {
                'Authorization': `Bearer ${access_token}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Orders Error:", error.response?.data || error.message);
        res.status(error.response?.status || 500).json(error.response?.data || { error: error.message });
    }
});

// Konfigurasi Path Router
// Untuk Netlify (Production) - Tangkap path function
app.use('/.netlify/functions/api', router);
// Backup jika path di-strip atau berbeda
app.use('/api', router);
// Untuk Local Development atau fallback
app.use('/', router);

// Export app untuk Netlify, start listen hanya jika dijalankan langsung
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server Proxy berjalan di http://localhost:${PORT}`);
    });
}

module.exports = app;
