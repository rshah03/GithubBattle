var React = require('react');

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> Loading... </p>
		: <p> ConfirmBattle </p>
};

module.exports = ConfirmBattle; 