// Console
console.log('Module bawaan untuk menampilkan debug');

// Module processs
const process = require('process');
const env = process.env;
env.hasil = 'Module JS untuk menampilkan dan mengontrol proses Node yang sedang berjalan';
console.log(env.hasil);

// Module OS
const os = require('os');
console.log('Module penyedia informasi terkait sistem operasi komputer');
console.log('Platform : ' + os.platform());
console.log('Architecture : ' + os.arch());

// // Module Util*
// const util = require('util');
// const debugLog = util.debuglog('foo');
// debugLog('Hello from foo [%d]', 123);

// Module Event
const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('Module event');
});
myEmitter.emit('event');

// Module Error
try {
  const m = 1;
  const n = m + w;
  console.log(n);
} catch (err) {
  console.log('Merupakan module digunakan untuk mendefinisikan error di node agara lebih informatif');
}

// // Buffer*
// import { Buffer } from 'Buffer';
// const buf = Buffer.from('Hellow World', 'utf8');
// console.log(buf.toString('hex'));
// console.log(buf.toString('base64'));

// // FS*
// import { readFileSync } from 'fs';
// readFileSync('<directory>');
// readFileSync('<directory>');

// Timers*
// import { setTimeout } from 'timers/promises';
// const res = await setTimeout(100, 'result');
// console.log(res);
// setTimeout(() => {
//   console.log('Moduls digunakan untuk memanggil fungsi yang diatur dengan waktu tertentu');
// });
