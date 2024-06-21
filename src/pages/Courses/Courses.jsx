import { FaStar } from 'react-icons/fa6';
import useCourseData from '../../hooks/useCourseData';
import { useState } from 'react';

const Courses = () => {
	const [courses] = useCourseData();
	const [browseAll, setBrowseAll] = useState(false);
	const browseToShow = browseAll ? browseAll.length : 3;

	return (
		<div>
			<h1 className="text-center text-7xl font-extrabold uppercase leading-normal">
				simple and powerful <br />{' '}
				<span className="text-secondaryColor underline">it courses</span>
			</h1>
			<div className="flex flex-col gap-6 w-11/12 mx-auto my-20">
				{courses.slice(0, browseToShow).map(course => (
					<div key={course.id}>
						<div className="flex justify-between items-center ">
							<div className="flex gap-4 md:gap-10 items-center">
								<img className="" src={course.image} alt="course-img" />
								<div>
									<div className="flex items-center">
										<div className="text-primaryColor flex gap-[2px] mr-[2px]">
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
										</div>
										<FaStar className="text-gray-400 mr-2" />
										<p>{course.review}</p>
									</div>
									<p className="text-[10px] md:text-2xl font-bold uppercase max-w-[25ch] md:max-w-[40ch] my-1 md:my-3">
										{course.title}
									</p>
									<p className="text-secondaryColor font-bold text-[8px] md:text-lg">
										{course.time} TOTAL HOURS
									</p>
								</div>
							</div>
							<p className="sm:text-3xl font-bold">${course.price}</p>
						</div>
						<hr className="mt-6 border-2" />
					</div>
				))}
				<button
					className="bg-secondaryColor p-4 rounded-full text-white font-bold w-64 mx-auto mt-6 uppercase transform transition-all hover:bg-primaryColor hover:text-black "
					onClick={() => {
						setBrowseAll(!browseAll);
					}}
				>
					{browseAll ? 'Hide some' : 'Browse all'}
				</button>
			</div>
		</div>
	);
};

export default Courses;
