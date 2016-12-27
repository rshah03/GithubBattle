var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
var githubHelpers = require('../utils/githubHelpers');

var ConfirmBattleContainer = React.createClass({
	contectTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
		console.log('getInitialState');
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount() {
		var query = this.props.location.query;
		githubHelpers.getPlayersInfo([query.playerOne, query.playerTwo])
			.then(function (players) {
				console.log('PLAYERS', players)
			})
	},
	render() {
		return (
			<ConfirmBattle 
				isLoading={this.state.isLoading}
				playersInfo={this.state.playersInfo} />
		);
	}
});

module.exports = ConfirmBattleContainer;