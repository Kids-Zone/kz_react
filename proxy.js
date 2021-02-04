const { createProxyMiddleware } = require('http-proxy-middleware');
var app = require('express')();

/* app.use('/dev',createProxyMiddleware({ target: 'https://k2q4xg1r4e.execute-api.eu-west-2.amazonaws.com', changeOrigin: true }));
app.use('/', createProxyMiddleware({ target: 'http://localhost:9999', changeOrigin: false }));



// Start the Proxy
app.listen(3000, "localhost", () => {
    console.log(`Starting Proxy`);
 }); */