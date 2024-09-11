import React from 'react';

function Item(props) {
	return (
		<div>
			<dl>
				<dt>
					{props.title}
				</dt>
				<dd>
					{props.description}
				</dd>
			</dl>
		</div>
	)
}

export default Item;