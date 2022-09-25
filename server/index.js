const express = require(`express`)
require(`dotenv`).config()
const  sequelize = require(`./db`)
const models = require(`./models/models`)
const cors = require(`cors`)
const router = require(`./routes/index`)
const errorHandler = require(`./middleware/ErrorHandlingMiddleware`)

PORT = process.env.PORT || 5000

const app = express()
app.use(cors())
app.use(express.json())
app.use(`/api`, router)

app.use(errorHandler)

const start = async () => {
    try{
        await sequelize.authenticate()
        await sequelize.sync() //сверяет схему данных с состоянием бд
        app.listen(PORT, ()=>console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
 start()
