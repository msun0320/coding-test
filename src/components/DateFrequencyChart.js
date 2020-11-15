import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import './DateFrequencyChart.css';

const DateFrequencyChart = ({ tokenID, locationID, LOCATION_API, fetchData }) => {
	const [startDate, setStartDate] = useState('2020-05-01');
	const [endDate, setEndDate] = useState('2020-05-10');
	const [dateRange, setDateRange] = useState([]);
	const [alerts, setAlerts] = useState([]);
	const [data, setData] = useState({});

	const selector = '[ADAM]';
	const ALERTS_API = `${LOCATION_API}/${locationID}/alerts?start_date=${startDate}&end_date=${endDate}&selector=${selector}`;

	// generateRange accepts 2 dates (yyyy-mm-dd)
	// and returns an array of dates between the 2 input dates.
	const generateRange = (startDate, endDate) => {
		const range = [];
		const dateMove = new Date(startDate);
		let strDate = startDate;

		while (strDate < endDate) {
		    strDate = dateMove.toISOString().slice(0,10);
		    range.push(strDate);
		    dateMove.setDate(dateMove.getDate()+1);
		};

		return range;
	};

	// convertArrToObj accepts an array and returns an object
	// which its keys are elements in the array, its values are set to 0.
	const convertArrToObj = arr => arr.reduce((a, b) => (a[b] = 0, a), {});

	// formarUnixTime formats a unix time into yyyy-mm-dd.
	const formatUnixTime = unixTime => {
		const dateObj = new Date(unixTime * 1000);
		const localTime = new Date(dateObj.getTime() - (dateObj.getTimezoneOffset() * 60000)).toISOString();

		return localTime.slice(0, 10);
	};

	// countEventsByDate counts the number of events per day.
	const countEventsByDate = (eventsArr, frequencyObj) => {
		for (let i = 0; i < eventsArr.length; i++) {
			const key = formatUnixTime(eventsArr[i].timestamp);

			frequencyObj[key]++;
		}

		return frequencyObj;
	};

	// fetch events data.
	useEffect(() => {
		if (locationID) {
			fetchData(ALERTS_API, {headers: {Authorization: `Bearer ${tokenID}`}})
				.then(data => setAlerts(data.data));		
		}
	}, [ALERTS_API]);

	// generate date range.
	useEffect(() => {
		const startDateObj = new Date(startDate);
		const endDateObj = new Date(endDate);
		const yearlyDifference = Math.abs(startDateObj.getFullYear() - endDateObj.getFullYear());

		if (startDateObj.getFullYear() && startDateObj.getMonth() && startDateObj.getDate() && yearlyDifference < 100) {
			const range = generateRange(startDate, endDate);

			setDateRange(range);
		}
	}, [startDate, endDate]);

	// count the number of events per day and set data that will be passed into bar chart.
	useEffect(() => {
		let frequencyObj = convertArrToObj(dateRange);
		frequencyObj = countEventsByDate(alerts, frequencyObj);

		setData({
			labels: Object.keys(frequencyObj),
			datasets: [
				{
					label: 'Number of events',
					data: Object.values(frequencyObj)
				}
			]
		});
	}, [alerts]);

	const handleStartDateChange = e => setStartDate(e.target.value);

	const handleEndDateChange = e => setEndDate(e.target.value);

	return (
		<div className='DateFrequencyChart'>
			<div className='datepicker'>
				<label htmlFor="startDate">From</label><br />
				<input type='date' value={startDate} placeholder='yyyy-mm-dd' onChange={handleStartDateChange} /><br />
			</div>

			<div className='datepicker'>
				<label htmlFor="endDate">To</label><br />
				<input type='date' value={endDate} placeholder='yyyy-mm-dd' onChange={handleEndDateChange} /><br />	
			</div>
			
			<div className='Bar'>
				<Line data={data} />
			</div>
		</div>
	);
};

export default DateFrequencyChart;