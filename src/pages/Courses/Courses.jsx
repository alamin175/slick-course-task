import { FaStar } from 'react-icons/fa6';
import useCourseData from '../../hooks/useCourseData';
import { useState } from 'react';
import { FaStarOfLife } from 'react-icons/fa';

const Courses = () => {
	const [courses] = useCourseData();
	const [browseAll, setBrowseAll] = useState(false);
	const browseToShow = browseAll ? browseAll.length : 3;

	return (
		<div id="courses">
			<div className="relative">
				<h1
					data-aos="fade-down"
					className="text-center text-4xl md:text-7xl font-extrabold uppercase leading-tight"
				>
					simple and powerful <br />{' '}
					<span className="text-secondaryColor underline">it courses</span>
				</h1>
				<p className="absolute mt-48 text-[200px] md:text-[370px] font-bold -top-52 md:-top-72 right-32 md:right-56 icon-outline">
					*
				</p>
			</div>
			<div className="flex flex-col gap-6 w-11/12 mx-auto my-20">
				{courses.slice(0, browseToShow).map(course => (
					<div data-aos="fade-down" key={course.id}>
						<div className="sm:flex justify-between items-center ">
							<div className="flex gap-2 sm:gap-6 md:gap-10 items-center">
								<img
									className="w-44 sm:w-64 lg:w-80"
									src={course.image}
									alt="course-img"
								/>
								<div>
									<div className="md:flex items-center">
										<div className="text-primaryColor flex gap-[2px] mr-[2px]">
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar />
											<FaStar className="text-gray-400 mr-2" />
										</div>
										<p className="text-[10px] sm:text-sm">
											{course.review}
										</p>
									</div>
									<p className="text-[10px] md:text-lg lg:text-2xl font-bold uppercase max-w-[25ch] md:max-w-[40ch] my-1 md:my-3">
										{course.title}
									</p>
									<p className="text-secondaryColor font-bold text-[8px] md:text-lg">
										{course.time} TOTAL HOURS
									</p>
								</div>
							</div>
							<p className="text-lg sm:text-3xl font-bold mt-3 sm:mt-0">
								${course.price}
							</p>
						</div>
						<hr className="mt-6 border-2" />
					</div>
				))}
				<button
					className="bg-secondaryColor p-4 rounded-full text-white font-bold w-44 sm:w-64 mx-auto mt-6 uppercase transform transition-all hover:bg-primaryColor hover:text-black "
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
