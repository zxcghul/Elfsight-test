const express = require('express')
const app = express()
const port = 80
app.use(express.static('front/dist'))

app.listen(port, () => {
    console.log("Сервер запущен, порт: " + port);
})