var express = require('express')
var router = express.Router()
var instaFunctions = require('./instaFunctions')
var path = require('path')

var session = function(req, res, next){
	console.log(req.originalUrl)
	next()
}

// middleware
var loggedIn = function(req, res, next){
	if(req.cookies.access_token)
		next()
	else
		res.redirect('/')
}

// routes
router.get('/login', instaFunctions.login)
router.get('/getAccessToken', instaFunctions.getAccessToken)
router.get('/getProfileData', instaFunctions.profile)
router.get('/searchTagData', instaFunctions.searchTag)

router.get('/*', function(req, res){
	res.sendFile(path.join(__dirname, '../dist/index.html'))
})

module.exports = router