const http = require('http');
const Router = require('router')
const bodyParser   = require('body-parser')

const data = {
  users: [
    {
      id: 1,
      name: 'John'
    }
  ],
  blogs: [
    {
      id: 1,
      user_id: 1,
      title: 'Test',
      body: 'this is blog post body'
    }
  ]
};

const router = new Router

router.use(bodyParser.json())

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.end(JSON.stringify({
    message: 'hello world'
  }))
})

router.get('/user/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (!req.params.id) {
    res.statusCode = 400
    res.end(JSON.stringify({
      message: 'User id must be specified'
    }));
  }

  const user = data.users.find(user => {
    return user.id == req.params.id
  })

  if (!user) {
    res.statusCode = 404
    res.end(JSON.stringify({
      message: 'User not found'
    }))
  }

  res.end(JSON.stringify({
    user
  }))
})

router.get('/blog/:id', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (!req.params.id) {
    res.statusCode = 400
    res.end(JSON.stringify({
      message: 'Blog id must be specified'
    }));
  }

  const blog = data.blogs.find(blog => {
    return blog.id == req.params.id
  })

  if (!blog) {
    res.statusCode = 404
    res.end(JSON.stringify({
      message: 'Blog not found'
    }))
  }

  res.end(JSON.stringify({
    blog
  }))
})

router.post('/blog', (req, res) => {
  res.setHeader('Content-Type', 'application/json; charset=utf-8')

  if (!req.body) {
    res.statusCode = 400
    res.end(JSON.stringify({
      message: 'Invalid post body'
    }))
  }

  const blog = {
    id: Math.max(data.blogs.map(blog => blog.id)) + 1,
    user_id: req.body.user_id,
    title: req.body.title,
    body: req.body.body,
  }

  data.blogs.push(blog)

  res.end(JSON.stringify({
    blog
  }))
})

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:8888')
  router(req, res, () => {
    res.statusCode = 404
    res.end(JSON.stringify({
      message: 'Page not found'
    }))
  })
})

server.listen(8889)
