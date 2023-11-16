const http = require('http')
const fs = require('fs')
const port = 5001
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.write(data)
                res.end()
            }
        })
    } else if (req.url === '/hello'){
        fs.readFile('hello.html', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.write(data)
                res.end()
            }
        })
    } else if (req.url === '/welcome'){
        fs.readFile('welcome.html', (err, data) => {
            if (err) {
                console.error(err)
            } else {
                res.write(data)
                res.end()
            }
        })
    } else {
        res.write('<h1>404 - Page not found</h1>')
        res.end()
    }
})
server.listen(port, () => {
    console.log('http://localhost:' + port)
})