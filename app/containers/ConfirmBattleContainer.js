var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');

var ConfirmBattleContainer = React.createClass({
	contectTypes: {
		router: React.PropTypes.object.isRequired
	},
	getInitialState() {
		return {
			isLoading: true,
			playerInfo: []
		}
	},
	componentDidMount() {
		var query = this.props.location.query;
		console.log('QUERY: ', query);
	},
	render() {
		return (
			<ConfirmBattle />
		);
	}
});

module.exports = ConfirmBattleContainer;