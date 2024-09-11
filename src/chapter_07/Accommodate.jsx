import React, { useState, useEffect } from 'react';
import useCounter from './useCounter';

const MAX_CAPACITY = 10;

function Accommodate(props) {
	// 최대 인지 체크
	const [isFull, setIsFull] = useState(false);
	// 현재수와 증감 기능
	const [count, increaseCount, decreaseCount] = useCounter(0);

	// 컴포넌트가 업데이트되면 실행
	useEffect(() => {
		console.log("===============================");
		console.log("useEffect() is called.");
		console.log(` isFull : ${isFull}`);
	});

	// count값이 변하면 실행
	useEffect(() => {
		setIsFull(count >= MAX_CAPACITY);
		console.log(`current coutnv alue : ${count}`);
	},[count])
	
	return (
		<div>
			<p>
				{`총 ${count}명 수용했습니다.`}
			</p>
			<button onClick={increaseCount} disabled={isFull}>입장</button>
			<button onClick={decreaseCount}>퇴장</button>
		</div>
	)
}

export default Accommodate;