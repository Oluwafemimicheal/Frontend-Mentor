// const os = require('os')
// const { readFile, writeFile } = require('fs')

// readFile('./text.txt', 'utf8', (err, data) => {
//     if (err) {
//         return
//     } else {
//         console.log(data);
//     }
// });
const os = require('os')
const user = os.userInfo()
console.log(user);

console.log(`system time up is ${os.uptime()} seconds`);
console.log(os.setPriority());