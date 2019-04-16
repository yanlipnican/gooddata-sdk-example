const proxy = require('http-proxy-middleware');

const backend = 'staging.intgdc.com';
// const backend = 'ppl-mini2.na.intgdc.com';

module.exports = function (app) {
     app.use(proxy("/gdc", {
         "changeOrigin": true,
         "cookieDomainRewrite": "localhost",
         "secure": false,
         "target": `https://${backend}`,
         "headers": {
             "host": backend,
             "origin": null
         },
         "onProxyReq": function(proxyReq, req, res) {
             proxyReq.setHeader('accept-encoding', 'identity')
         }
     }));
     app.use(proxy("/*.html", {
         "changeOrigin": true,
         "secure": false,
         "target": `https://${backend}`
     }));
     app.use(proxy("/packages/*.{js,css}", {
         "changeOrigin": true,
         "secure": false,
         "target": `https://${backend}`
     }));
 };
