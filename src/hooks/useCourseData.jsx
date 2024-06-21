import { useState, useEffect } from 'react';

const useCourseData = () => {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await fetch('courses.json');
				const data = await result.json();
				setCourses(data);
			} catch (error) {
				console.error('Error fetching the courses data:', error);
			}
		};

		fetchData();
	}, []);

	return [courses];
};

export default useCourseData;
