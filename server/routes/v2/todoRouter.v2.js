const todoRouterV2 = require('express').Router()

todoRouterV2.get("/", (req, res) => {
  res.status(200).json({
    todos: [{
      id: 1,
      name: 'icanqv2',
      agenda: "memasak"
    }, {
      id: 2,
      name: 'icanqv2',
      agenda: "mengaji"
    }, {
      id: 3,
      name: 'icanqv2',
      agenda: "mandi"
    }]
  })
})

module.exports = { todoRouterV2 }