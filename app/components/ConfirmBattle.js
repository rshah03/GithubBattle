var React = require('react');
var PropTpes = React.PropTypes;

function puke (object) {
	return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
	return props.isLoading === true
		? <p> Loading... </p>
		: <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
			<h1>Confirm Players</h1>
			<div className='col-sm-8 col-sm-offset-2'>
				<div className='col-sm-6'>
					<p className='lead'>Player 1</p>
					PLAYER 1 STATS
				</div>	
				<div className='col-sm-6'>
					<p className='lead'>Player 2</p>
					PLAYER 2 STATS
				</div>
			</div>
			<div className='col-sm-8 col-sm-offset-2'>
				<div className='col-sm-12' style={styles.space}>
					INITIATE BATTLE BUTTON
				</div>
				<div className='col-sm-12' style={styles.space}>
					LINK TO /PLAYERNAME
				</div>
			</div>
		</div>
}; 

ConfirmBattle.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	onInitiateBattle: PropTypes.func.isRequired,
	playersInfo: PropTypes.array.isRequired

};

module.exports = ConfirmBattle; 