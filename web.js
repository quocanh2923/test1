const http = require('http')
const port = 7000
const server = http.createServer((req, res) => {
    res.write('<h1>Create webpage with NodeJS server</h1>')
    res.end()
})
server.listen(port, () => {
    console.log('http://localhost:' + port)
})