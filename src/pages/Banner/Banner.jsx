import Navbar from '../Navbar/Navbar';
import './Banner.css';
import element from '/assets/element.png';
import arrowimg from '/assets/Arrow.png';
import rectangle1 from '/assets/rectangle-1.png';
import supportImg from '/assets/support.png';
import bookImg from '/assets/book.png';
import courseImg from '/assets/course.png';
import manImg from '/assets/man-1.png';
import HorizontalRuler from '../../components/HorizontalRuler/HorizontalRuler';
import { FaArrowRight } from 'react-icons/fa6';

const Banner = () => {
	return (
		<div className="banner overflow-hidden relative z-50 bg-primaryColor pb-60">
			<Navbar />
			<div data-aos="fade-down">
				<h1 className="large-text uppercase tracking-tighter relative font-bold text-5xl sm:text-[80px] md:text-[110px] lg:text-[132px] leading-[70px] sm:leading-[110px] md:leading-[140px] lg:leading-[171px] my-20 md:my-4">
					<img
						className="absolute w-11 sm:w-20 top-[30px] sm:top-[80px] lg:top-[130px] left-[130px] sm:left-[180px]  md:left-[220px] lg:left-[350px]"
						src={element}
						alt=""
					/>
					Get away to <br /> your{' '}
					<span className="underline"> knowledge </span>Universe
					<img
						className="absolute right-32 sm:right-24 lg:right-[295px] -bottom-4 lg:-bottom-16 w-12 sm:w-[146px]"
						src={arrowimg}
						alt="Arrow"
					/>
				</h1>
			</div>

			<div className=" grid grid-cols-1 xl:grid-cols-9 items-center">
				<div
					className="col-span-5 m-2 sm:m-6  md:my-16 lg:p-8"
					data-aos="fade-down-right"
				>
					{/* Div-content-1 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-3 md:gap-6 m-2 my-8 md:m-8 text-start">
							<img
								className="bg-[#EC556B] rounded-full  p-2 sm:p-4 w-12 sm:w-20"
								src={bookImg}
								alt="Book"
							/>
							<h1 className="text-lg md:text-4xl font-extrabold">
								Unlimited Classes
							</h1>
							<p className="uppercase font-medium text-[10px] sm:text-[16px]">
								Some of these are specialists, tightly focused on topics
								like typography
							</p>
						</div>
					</div>

					{/* Div-content-2 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-3 md:gap-6 m-2 my-8 md:m-8 text-start">
							<img
								className="bg-[#845CC5] rounded-full p-2 sm:p-4 w-12 sm:w-20"
								src={courseImg}
								alt="Book"
							/>
							<h1 className="text-lg md:text-4xl font-extrabold">
								About Courses
							</h1>
							<p className="uppercase font-medium text-[10px] sm:text-[16px] ml-4">
								Huge variety of design disciplines and cherry-picking
								the best work
							</p>
						</div>
					</div>

					{/* Div-content-3 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-3 md:gap-6 m-2 my-8 md:m-8  text-start">
							<img
								className="bg-[#2DBC6F] rounded-full p-2 sm:p-4 w-12 sm:w-20"
								src={supportImg}
								alt="Book"
							/>
							<h1 className="text-lg md:text-4xl font-extrabold">
								Courses Support{' '}
							</h1>
							<p className="uppercase font-medium text-[10px] sm:text-[16px]">
								Help you reboot your creative mojo and give you fresh
								ideas inspire
							</p>
						</div>
					</div>
				</div>
				<div
					className="bg-image relative right-0 rotate-[6.85deg] m-auto -bottom-36 "
					data-aos="fade-down-left"
				>
					<img
						className="absolute -bottom-[18px] md:-bottom-[24px] right-0 -rotate-[7deg] z-50"
						src={manImg}
						alt=""
					/>
					<div className="flex justify-center">
						<h1 className="text-outline  text-4xl md:text-7xl text-start font-bold absolute m-4 top-[30px]">
							Your Course Guide
						</h1>
					</div>
					<div>
						<h3 className="demo-text relative z-50 text-white bg-white bg-opacity-20 p-1 rounded-3xl backdrop-blur-sm w-2/3 text-center flex justify-between items-center text-sm">
							<span className="p-4 bg-white rounded-full">
								<FaArrowRight className=" text-black" />
							</span>
							GET DEMO CALL
							<span></span>
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
