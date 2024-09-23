import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './chapter_11/SignUp';

// import Library from './chapter_03/Library';
// import Clock from './chapter_04/Clock'
import CommentList from "./chapter_05/CommentList";
import NotificationList from "./chapter_06/NotificationList";
import Us from "./sample/useState";
import Ur from "./sample/useRef";
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from "./chapter_08/ConfirmButton";
import Default from "./sample/Default";
import List from "./sample/List";
import LandingPage from "./chapter_09/LandingPage";
import AttendenceBook from "./chapter_10/AttendenceBook";
import Caculator from "./chapter_12/Caculator";
import ProfileCard from "./chapter_13/ProfileCard";
import DarkOfLight from "./chapter_14/DarkOfLight";
import Sample from "./sample/Css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/*<NotificationList />*/}
		{/*<CommentList />*/}
		{/*<Ur />*/}
		{/*<Accommodate/>*/}
		{/*<ConfirmButton/>*/}
		{/*<LandingPage />*/}
		{/*<AttendenceBook />*/}
		{/*<SignUp />*/}
		{/*<Caculator />*/}
		{/*<ProfileCard />*/}
		{/*<DarkOfLight />*/}
		<Sample/>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
