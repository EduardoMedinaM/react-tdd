import React, { useEffect, useState } from 'react';

const AsyncList = () => {
	const foods = ['raise', 'chicken', 'vegetables'];
	const fakeApiCall = () =>
		new Promise((resolve) => setTimeout(resolve(foods), 2000));

	const [foodData, setFoodData] = useState([]);

	useEffect(() => {
		fakeApiCall( ).then((data) => setFoodData(data));
	});

	return foodData.map((name) => <p key={name}>{name}</p>);
};

export default AsyncList;
