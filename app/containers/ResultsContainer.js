var React = require('react');
var Results = require('../components/Results');
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
	getInitialState() {
		return {
			isLoading: true,
			scores: []
		}
	},	
	componentDidMount() {
		console.log(this.props);
	},
	render() {
		return (
			<Results isLoading={this.state.isLoading} scores={this.state.scores} />
		);
	}
});

module.exports = ResultsContainer;