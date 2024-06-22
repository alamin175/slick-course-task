import './Teacher.css';
import teacherimg1 from '/assets/man-2.png';
import teacherimg2 from '/assets/man-3.png';
const Teacher = () => {
	return (
		<div className="bg-primaryColor py-28 px-6 lg:px-28 rounded-[50px]">
			<h1 className="text-center text-3xl sm:text-5xl md:text-7xl  uppercase leading-tight font-extrabold">
				build skills from <br />{' '}
				<span className="text-secondaryColor underline">professional</span>{' '}
				Teacher
			</h1>
			<div className="teacher-container grid xl:grid-cols-2 place-items-center gap-32 my-24">
				{/* Teacher-1 */}
				<div className="uppercase flex flex-col justify-between text-white font-semibold p-6 rounded-[30px]">
					<h1 className="m-2 md:m-8 text-lg sm:text-3xl absolute max-w-[14ch] tracking-widest leading-normal">
						Difference between css and css3.
					</h1>
					<div className="flex justify-between items-end ">
						<div className="m-2 md:m-8">
							<h2 className="text-lg md:text-xl md:mb-2">jackob alex</h2>
							<p className="flex items-center gap-2 md:gap-4 font-normal absolute">
								<hr className="w-10 border-2 border-white " /> web
								developer
							</p>
						</div>
						<img
							src={teacherimg1}
							alt=""
							className="relative w-1/2 md:w-[400px]  -right-6 md:-right-4 -bottom-6 md:-bottom-4"
						/>
					</div>
				</div>

				{/* Teacher-2 */}
				<div className="uppercase flex flex-col justify-between text-white font-semibold p-6 rounded-[30px]">
					<h1 className="m-2 md:m-8 text-[16px] sm:text-3xl absolute max-w-[20ch] md:max-w-[18ch]  tracking-widest leading-normal">
						Define Designing and inspiration in one place with us.
					</h1>
					<div className="flex justify-between items-end ">
						<div className="m-2 md:mx-8">
							<h2 className="text-sm md:text-lg md:mb-2">
								Milly Butcher
							</h2>
							<p className="flex items-center gap-2 md:gap-4 font-normal text-sm md:text-[12px] absolute">
								<hr className="w-10 border-2 border-white " />
								ui/ux designer
							</p>
						</div>
						<img
							src={teacherimg2}
							alt=""
							className="relative w-1/2 md:w-[400px]  -right-6 md:-right-3 -bottom-6 md:-bottom-[51px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teacher;
