var React = require('react');
var ReactRouter = require('react-router');
var transparentBg = require('../styles').transparentBg;
var Link = ReactRouter.Link;

var Home = React.createClass({
	render() {
		return (
			<div className='jumbotron col-sm-12 text-center' style={transparentBg}>
				<h1>Github Battle</h1>
				<p className='lead'>Code to win.</p>
				<Link to='/playerOne'>
					<button type='button' className='btn btn-lg btn-success'>Go!</button>
				</Link>
			</div>
		)
	}
});

module.exports = Home;