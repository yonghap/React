import React from 'react';

const styles = {
	wrapper : {
		margin : 8,
		padding: 8,
		display :'flex',
		flexDirection:'row',
		border:'1px solid grey',
		borderRadius : 16
	},
	massageText: {
		color : 'black',
		fontSize:16
	}
}

class Notification extends React.Component {
	constructor(props) {
		super(props);

		this.state = {}
	}
	componentDidMount() {
		console.log(`${this.props.id} componentDidMount() Called.`);
	}
	componentDidUpdate(){
		console.log(`${this.props.id} componentDidUpdate() Called.`);
	}
	componentWillUnmount() {
		console.log(`${this.props.id} componentWillUnmount() Called.`);
	}
	render() {
		return (
			<div style={styles.wrapper}>
				<span style={styles.massageText}>{this.props.message}</span>
			</div>
		);
	}
}

export default Notification;