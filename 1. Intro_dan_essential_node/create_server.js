// Memanggil build in module http
const http = require('http');
// Memanggil url
const url = require('url');
// Mendeklasrasikan port
const port = 3000;

// memanggil function untuk membuat server
http
  .createServer((req, res) => {
    // Menentukan Header pada response
    res.writeHead(200, { 'Content-Type': 'text/html' });
    // Mengambil URL
    const query = url.parse(req.url, true).query;
    // Memberikan respon ketika server berjalankan
    res.write('Created server <br>');
    // Memberikan respon url
    res.write(`Halo nama saya ${query.name} merupakan seorang mahasiswa di ${query.kampus}. <br> kali ini saya sedang mengakses url ${req.url} `);
    res.end();
  })
  .listen(port);
