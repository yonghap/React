import React from 'react';

const students = [
	{
		id : 1,
		name : "David"
	},
	{
		id: 2,
		name : "Steve"
	},
	{
		id: 3,
		name : "Bill"
	},
	{
		id : 4,
		name : "Jeff"
	}
]

function AttendenceBook(props) {
	return (
		<ul>
			{students.map((student) => {
				return <li key={`student-id-${student.id}`}>{student.name}</li>;
			})}
		</ul>
	)
}

export default AttendenceBook;