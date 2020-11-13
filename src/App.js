import React, { useState, useEffect } from 'react';
import DateFrequencyChart from './components/DateFrequencyChart';
import './App.css';

const App = () => {
	const [tokenID, setTokenID] = useState('');
	const [locationID, setLocationID] = useState('');

	const CLIENT_ID = '20AF566F';
	const API_KEY = 'Vu112d0Wmg99bx/ax02bUlNipBEOv3uIPrf73ZNJ8NgvN0qlnhpqYfVP80eXhX2X';
	const BASE_URL = 'https://appsrv.fastsensor.us:8890/';
	const TOKEN_API = `${BASE_URL}oauth2/token?client_id=${CLIENT_ID}&api_key=${API_KEY}`;
	const LOCATION_API = `${BASE_URL}v1/locations`;

	const fetchData = async (api, headers) => {
		const response = await fetch(api, headers);
		return await response.json();
	};

	const getTokenID = async () => {
		const data = await fetchData(TOKEN_API);

		setTokenID(data.access_token);
	};

	const getLocationID = async () => {
		const data = await (tokenID ? fetchData(LOCATION_API, {headers: {Authorization: `Bearer ${tokenID}`}}) : null);

		setLocationID(data ? data.data[0].id : '');
	};

	useEffect(() => {
		getTokenID();
	}, []);

	useEffect(() => {
		getLocationID();
	}, [tokenID]);

    return (
    	<div className="App">
        	<DateFrequencyChart tokenID={tokenID} locationID={locationID} LOCATION_API={LOCATION_API} fetchData={fetchData} />
    	</div>
    );
};

export default App;
