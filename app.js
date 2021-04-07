const express = require('express')

const app = express()
const port = 5000

app.locals.imgEndPoint = "https://crowdhubharding.s3-us-west-2.amazonaws.com/"

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/img', express.static(__dirname + 'public/img'))
app.use('/js', express.static(__dirname + 'public/js'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

//routes
const junoRouter = require('./src/routes/articles.js')
app.use('/', junoRouter)

app.listen(port, () => console.log(`listening on port ${port}`))