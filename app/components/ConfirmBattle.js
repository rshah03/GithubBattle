var React = require('react');
var PropTpes = React.PropTypes;

function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> Loading... </p>
		: <div> CONFIRM BATTLE!: {puke(props)}</div>  
}; 

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired

};

module.exports = ConfirmBattle; 