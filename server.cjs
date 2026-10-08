'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, 'dist');
const files = {
  '/': ['index.html', 'text/html; charset=utf-8'],
  '/index.html': ['index.html', 'text/html; charset=utf-8'],
  '/app.js': ['app.js', 'text/javascript; charset=utf-8']
};
const server = http.createServer((req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {res.writeHead(405); res.end(); return;}
  const pathname = new URL(req.url, 'http://127.0.0.1').pathname;
  const entry = files[pathname];
  if (!entry) {res.writeHead(404); res.end('Not found'); return;}
  res.writeHead(200, {'Content-Type': entry[1], 'Cache-Control': 'no-store'});
  if (req.method === 'HEAD') res.end(); else fs.createReadStream(path.join(root, entry[0])).pipe(res);
});
const port = Number(process.env.PORT) || 4173;
server.listen(port, '127.0.0.1', () => console.log('Local: http://127.0.0.1:' + port));
server.on('error', err => {console.error(err.message); process.exitCode = 1;});
