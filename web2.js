const http = require('http')
const fs = require('fs')
const port = 5001
const server = http.createServer((req, res) => {
    fs.readFile('hello.html', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            res.write(data)
            res.end()
        }
    })
})
server.listen(port, () => {
    console.log('http://localhost:' + port)
})