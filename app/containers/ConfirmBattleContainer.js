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
				this.setState({
					isLoading: false,
					playersInfo: [players[0], players[1]]
				})
			}.bind(this)) //Binds context of 'this' to the outer function instead of the inner function
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