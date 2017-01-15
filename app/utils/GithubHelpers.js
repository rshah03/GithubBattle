var axios = require('axios');

//Create additional vars if rate limited by Github API
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
	return axios.get('http://api.github.com/users/' + username + param) //Returns a promise 
}

function getRepos(username) {
	//fetch usernames' repos
}

function getTotalStars(stars) {
	//Calculate stars user has based on repos
}

function getPlayersData(player) {
	//Get repos
	//getTotalStars
	//getPlayersData
}

function calculateScores(players) {
	//return an array after calculating based on algorithm
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
	},
	battle(players) {

	}
};

module.exports = helpers;