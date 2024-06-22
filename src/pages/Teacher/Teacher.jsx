import './Teacher.css';
import teacherimg1 from '/assets/man-2.png';
import teacherimg2 from '/assets/man-3.png';
const Teacher = () => {
	return (
		<div className="bg-primaryColor p-28 rounded-[50px]">
			<h1
				style={{ fontWeight: '700' }}
				className="text-center text-7xl  uppercase leading-tight"
			>
				build skills from <br />{' '}
				<span className="text-secondaryColor underline">professional</span>{' '}
				Teacher
			</h1>
			<div className="teacher-container grid grid-cols-2 place-items-center gap-32 my-24">
				{/* Teacher-1 */}
				<div className="uppercase flex flex-col justify-between text-white font-semibold p-6">
					<h1 className="m-8 text-3xl absolute max-w-[14ch] tracking-widest leading-normal">
						Difference between css and css3.
					</h1>
					<div className="flex justify-between items-end ">
						<div className="m-8">
							<h2 className="text-xl mb-2">jackob alex</h2>
							<p className="flex items-center gap-4 font-normal absolute">
								<hr className="w-10 border-2 border-white " /> web
								developer
							</p>
						</div>
						<img
							src={teacherimg1}
							alt=""
							className="relative -right-4 -bottom-4"
						/>
					</div>
				</div>

				{/* Teacher-2 */}
				<div className="uppercase flex flex-col justify-between text-white font-semibold p-6">
					<h1 className="m-8 text-3xl absolute max-w-[18ch] leading-normal">
						Define Designing and inspiration in one place with us.{' '}
					</h1>
					<div className="flex justify-between items-end ">
						<div className="m-8">
							<h2 className="text-xl mb-2">milly butcher</h2>
							<p className="flex items-center gap-4 font-normal absolute">
								<hr className="w-10 border-2 border-white " /> ui/ux
								designer
							</p>
						</div>
						<img
							src={teacherimg2}
							alt=""
							className="relative -right-[14px] -bottom-[54px]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Teacher;
