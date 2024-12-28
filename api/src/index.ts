import express from 'express'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('expensive api is working')
})

app.listen(PORT, () => {
  console.log(`api is running on http://localhost:${PORT}`)
})
