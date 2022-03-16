const todoRouter = require('express').Router()

todoRouter.get("/", (req, res) => {
  res.status(200).json([{
    id: 1,
    name: 'icanq',
    title: "memasak"
  }, {
    id: 2,
    name: 'icanq',
    title: "mengaji"
  }, {
    id: 3,
    name: 'icanq',
    title: "mandi"
  }]
  )
})

module.exports = { todoRouter }