import React from 'react';

function Card(props) {
	const { title, backGroundColor, children } = props;

	return (
		<div
			style={{
				margin:8,
				padding:8,
				borderRadius:8,
				boxShadow:"0px 0px 4px grey"
			}}
		>
			{title && <h1>{title}</h1>}
			{children}
		</div>
	)
}

export default Card;