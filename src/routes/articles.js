const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')

newsRouter.get('', async(req, res) => {
    // res.render('news')

    try {
        const junoAPI = await axios.get(`http://hardingdevelopment.nexisit.net/harding_api/api_event_search.php?page_num=0&per_page=20&buckets=Volunteering&timezone=25200&app_server_version=3.2&app_version=2&app_build=1&user_id=2&token=70aedda35dca9c192ef551c9f7b570e0&salt=309a9bea4d2695656e83f4fe7b340ee0&app=1&version=3.2`)
        res.render('articles', { articles: junoAPI.data })
    } catch (err) {
        if (err.response) {
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.respose.headers)

        } else if (err.request) {
            console.log(err.request)
        } else {
            console.log('Error', err.message)
        }
    }
})

module.exports = newsRouter