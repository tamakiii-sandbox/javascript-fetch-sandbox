const http = require('http');
const Router = require('router')

const router = new Router
router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({
    message: 'hello world'
  }))
})

const server = http.createServer((req, res) => {
  router(req, res, (req, res) => {
    // finally
  })
})

server.listen(8080)
