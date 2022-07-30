import express from "express"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

const PORT = process.env.PORT || 5000
const ORIGIN = process.env.CLIENT_ORIGIN
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    credentials: true,
    origin: ORIGIN,
  })
)

app.get("/", (req, res) => {
  res.send("Hello from server")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
