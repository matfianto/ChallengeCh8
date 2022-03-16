const express = require('express')
const app = express();
const PORT = process.env.PORT || 8080
const path = require('path')
const cors = require('cors')
const { todoRouter } = require('./routes/todoRouter')
const { todoRouterV2 } = require('./routes/v2/todoRouter.v2')
const userRouter = require('./routes/userRouter')

const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')


app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const apiRouter = express.Router()
app.use("/api", apiRouter)


apiRouter.get("/", (req, res) => {
  res.status(200).json({
    message: "ini dari api routes /api"
  })
})

const v1Router = express.Router();
const v2Router = express.Router();
apiRouter.use("/v1", v1Router);
apiRouter.use("/v2", v2Router);


v1Router.get("/", (req, res) => {
  res.status(200).json({
    message: "ini dari api routes /api/v1"
  })
})

v1Router.use('/todos', todoRouter)
v1Router.use('/users', userRouter)


v2Router.get('/', (req, res) => {
  res.status(200).json({
    message: "ini dari api routes /api/v2"
  })
})


v2Router.use('/todos', todoRouterV2)

let pathToClientBuild = path.resolve(__dirname, "..", "client", "build")

app.use("/static", express.static(path.resolve(pathToClientBuild, "static")))
app.use("/index.html", (req, res) => {
  res.sendFile(path.resolve(pathToClientBuild, "index.html"))
})
app.get("*", async (req, res) => {
  res.sendFile(path.resolve(pathToClientBuild, "index.html"))
})

app.listen(PORT, _ => {
  console.log(`listening on port: http://localhost:${PORT}`)
})

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

require('./endpoints')(app)