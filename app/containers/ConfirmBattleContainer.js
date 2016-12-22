var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

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
	componentWillMount() {
		console.log('componentWillMount');
	},
	componentDidMount() {
		var query = this.props.location.query;
		console.log('componentDidMount \nQUERY: ', query);
		//Get the user info associated to username via GitHub API
	},
	componentWillReceiveProps() {
		console.log('componentWillReceiveProps');
	},
	componentWillUnmount() {
		console.log('componentWillUnmount');
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