import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import './DateFrequencyChart.css';

const DateFrequencyChart = ({ locationID, tokenID, LOCATION_API, fetchData }) => {
	const [startDate, setStartDate] = useState('2020-05-01');
	const [endDate, setEndDate] = useState('2020-05-02');
	const [dateRange, setDateRange] = useState([]);
	const [data, setData] = useState({});
	const [alerts, setAlerts] = useState([]);

	const selector = '[ADAM]';

	const ALERTS_API = `${LOCATION_API}/${locationID}/alerts?start_date=${startDate}&end_date=${endDate}&selector=${selector}`;

	const handleStartDateChange = e => setStartDate(e.target.value);

	const handleEndDateChange = e => setEndDate(e.target.value);

	useEffect(() => {
		if (locationID) {
			fetchData(ALERTS_API, {headers: {Authorization: `Bearer ${tokenID}`}})
				.then(data => setAlerts(data.data));		
		}
	}, [ALERTS_API]);

	useEffect(() => {
		const range = [];
		const dateMove = new Date(startDate);
		let strDate = startDate;

		while (strDate < endDate) {
		    strDate = dateMove.toISOString().slice(0,10);
		    range.push(strDate);
		    dateMove.setDate(dateMove.getDate()+1);
		};
	
		setDateRange(range);
	}, [startDate, endDate]);

	useEffect(() => {
		const frequencyObj = dateRange.reduce((a, b) => (a[b] = 0, a), {});

		for (let i = 0; i < alerts.length; i++) {
			const gmtKey = new Date(alerts[i].timestamp * 1000);
			const key = new Date(gmtKey.getTime() - (gmtKey.getTimezoneOffset() * 60000)).toISOString();

			frequencyObj[key.slice(0, 10)]++;
		}

		setData({
			labels: Object.keys(frequencyObj),
			datasets: [
				{
					label: 'Number of events',
					data: Object.values(frequencyObj),
					backgroundColor: 'rgba(32, 121, 199, 0.2)'
				}
			]
		});
	}, [alerts]);

	return (
		<div className='DateFrequencyChart'>
			<div className='datepicker'>
				<label htmlFor="startDate">From</label><br />
				<input type='date' value={startDate} onChange={handleStartDateChange} /><br />
			</div>

			<div className='datepicker'>
				<label htmlFor="endDate">To</label><br />
				<input type='date' value={endDate} onChange={handleEndDateChange} /><br />	
			</div>
			
			<div className='Bar'>
				<Bar data={data} />
			</div>
		</div>
	);
};

export default DateFrequencyChart;