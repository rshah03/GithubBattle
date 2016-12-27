var axios = require('axios');

//Create additional vars if rate limited by Github API
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
	return axios.get('http://api.github.com/users/' + username + param) //Returns a promise 
}

var helpers = {
	getPlayersInfo (players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username)
		})).then(function (info) {
			return info.map(function (user) {
				return user.data;
			})
		}).catch(function (err) {
			console.warn('Error in getPlayersInfo', err)
		})
	}
};

module.exports = helpers;