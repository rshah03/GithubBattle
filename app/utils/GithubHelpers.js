var axios = require('axios');

//Create additional vars if rate limited by Github API
var id = "YOUR_CLIENT_ID";
var sec = "YOUR_SECRET_ID";
var param = "?client_id=" + id + "&client_secret=" + sec;

function getUserInfo (username) {
	return axios.get('https://api.github.com/users/' + username + param); //Returns a promise 
}

function getRepos (username) {
	return axios.get('https://api.github.com/users/' + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
	return repos.data.reduce(function (prev, current) {
		return prev + current.stargazers_count 
	}, 0)
}

function getPlayersData (player) {
	return getRepos(player.login)
		.then(getTotalStars)
		.then(function (totalStars) {
			return {
				followers: player.followers,
				following: player.following,
				totalStars: totalStars
			}
		})
}

function calculateScores (players) {
	return [
		players[0].followers + (players[0].totalStars % 10)^2 + players[0].following, 
    	players[1].followers + (players[1].totalStars % 10)^2 + players[1].following
	]
}

var helpers = {
	getPlayersInfo (players) {
		return axios.all(players.map(function (username) {
			return getUserInfo(username)
		}))
		.then(function (info) {
			return info.map(function (user) {
				return user.data;
			})
		})
		.catch((err) => console.warn('Error in getPlayersInfo', err))
	},
	battle (players) {
		var playerOneData = getPlayersData(players[0]);
		var playerTwoData = getPlayersData(players[1]);

		return axios.all([playerOneData, playerTwoData])
			.then(calculateScores)
			.catch((err) => console.warn('Error in battle function: ', err))
	}
};

module.exports = helpers;