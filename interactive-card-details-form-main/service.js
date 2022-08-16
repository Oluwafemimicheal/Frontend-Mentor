const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('respond', (name, id) => {
    console.log(`Data receive user ${name} with the age of ${id}`);
});
customEmitter.on('respond', () => {
    console.log(`Nice testing node.js`);
})
customEmitter.emit('respond', 'Oluwafemi', 23)
const http = require('http')
const server = http.createServer((res, rep) => {})
const async = async