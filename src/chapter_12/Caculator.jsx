import React, { useState } from 'react';
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";



function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}
function toFahrenheit(celsius) {
	return (celsius * 9 /5 ) + 32;
}

function Caculator(props) {
	const [temperature, setTemperature] = useState('');
	const [scale, setScale] = useState('c');

	const handleCelsiusChange = (temperature) => {
		setTemperature(temperature);
		setScale('c');
	}
	const handleFahrenheitChange = (temperature) => {
		setTemperature(temperature);
		setScale('f');
	}

	const celsius =  scale === 'f' ? toCelsius(temperature) : temperature;
	const fahrenheit =  scale === 'c' ? toFahrenheit(temperature) : temperature;
	return (
		<div>
			<TemperatureInput
				scale="c"
				onTemperatureChange={handleCelsiusChange}
				temperature={celsius}
			/>
			<TemperatureInput
				scale="f"
		        onTemperatureChange={handleFahrenheitChange}
				temperature={fahrenheit}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	)
}

export default Caculator;