import React from 'react';
import Card from './Card';

function ProfileCard(props) {
	return (
		<Card title="Lee" backgroundColor="#0080cc">
			<p>안녕하세요.</p>
			<p>리액트 개발공부 입니다.</p>
		</Card>
	)
}

export default ProfileCard;