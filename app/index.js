var React = require('react');
var ReactDOM = require('react-dom');

var dummer_USER_DATA = {
	name: 'Shah',
	username: 'rshah03',
	image: 'https://avatars3.githubusercontent.com/u/16813381?v=3&s=460'
}

var ProfilePic = React.createClass({
	render() {
		return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
	}
});

var ProfileLink = React.createClass({
	render() {
		return (
			<div>
				<a href={'https://www.github.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
		)
	}
});

var ProfileName = React.createClass({
	render() {
		return (
			<div>
				{this.props.name}
			</div>
		)
	}
});

var Avatar = React.createClass({
	render() {
		return (
			<div>
				<ProfilePic imageUrl={this.props.user.image} />
				<ProfileName name={this.props.user.name} />
				<ProfileLink username={this.props.user.username} />
			</div>
		)
	}
});

ReactDOM.render(
	<Avatar user={dummer_USER_DATA} />,
	document.getElementById('app'));