import React from 'react';
import Item from './Item';

function List(props) {
	return (
		<div>
			<Item title="이름" description="홍길동" />
			<Item title="나이" description="25세" />
			<Item title="직업" description="프로그래머" />
		</div>
	)
}

export default List;