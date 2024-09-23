import React from 'react';
import styled from "styled-components";

const Button = styled.button`
	color : ${props => props.dark ? "white" : "black" };
  	background : ${props => props.dark ? "black" : "white" };
  	border: 1px solid black;
`;

const RoundedButton = styled(Button)`
	border-radius:16px;
`

function Sample(props) {
	return (
		<div>
			<Button>Normal</Button>
			<Button dark>Dark</Button>
			<RoundedButton>Rounded</RoundedButton>
		</div>
	)
}
export default Sample;