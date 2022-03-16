const userRouter = require('express').Router()

userRouter.get("/", (req, res) => {
  res.status(200).json({
    user: [
      {
        id: 1,
        name: 'icanq',
        email: 'icanq@hotmail.com',
        hobi: 'mancing'
      },
      {
        id: 2,
        name: 'nabi',
        email: 'nabi@hotmail.com',
        hobi: 'makan'
      }
    ]
  })
})

module.exports = userRouter