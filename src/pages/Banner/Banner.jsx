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
		<div className="banner overflow-hidden">
			<Navbar />
			<div>
				<h1
					style={{ fontWeight: 700 }}
					className="large-text text-6xl uppercase tracking-tighter relative"
				>
					<img
						className="absolute md:top-[80px] lg:top-[130px] md:left-[300px] lg:left-[350px]"
						src={element}
						alt=""
					/>
					Get away to <br /> your{' '}
					<span className="underline"> knowledge </span>Universe
					<img
						className="absolute right-64 -bottom-24"
						src={arrowimg}
						alt="Arrow"
					/>
				</h1>
			</div>
			<div className=" grid lg:grid-cols-3 gap-6 items-center">
				<div className="col-span-2 m-16 p-12">
					{/* Div-content-1 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-6 m-8  text-start">
							<img
								className="bg-[#EC556B] rounded-full p-4 w-20"
								src={bookImg}
								alt="Book"
							/>
							<h1 className="text-4xl font-extrabold">
								Unlimited Classes
							</h1>
							<p className="uppercase font-medium ">
								Some of these are specialists, tightly focused on topics
								like typography
							</p>
						</div>
					</div>

					{/* Div-content-2 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-6 m-8  text-start">
							<img
								className="bg-[#845CC5] rounded-full p-5 w-20"
								src={courseImg}
								alt="Book"
							/>
							<h1 className="text-4xl font-extrabold">About Courses</h1>
							<p className="uppercase font-medium ml-5">
								Huge variety of design disciplines and cherry-picking
								the best work
							</p>
						</div>
					</div>

					{/* Div-content-3 */}
					<div>
						<HorizontalRuler />
						<div className="flex items-center gap-6 m-8  text-start">
							<img
								className="bg-[#2DBC6F] rounded-full p-4 w-20"
								src={supportImg}
								alt="Book"
							/>
							<h1 className="text-4xl font-extrabold">
								Courses Support{' '}
							</h1>
							<p className="uppercase font-medium ">
								Help you reboot your creative mojo and give you fresh
								ideas inspire
							</p>
						</div>
					</div>
				</div>
				<div className="bg-image rotate-[6.85deg] m-6 relative right-0 ">
					<img
						className="bg-image absolute -bottom-80"
						src={rectangle1}
						alt=""
					/>
					<img
						className="absolute -bottom-[340px] -rotate-[7deg] z-50"
						src={manImg}
						alt=""
					/>
					<div className="flex justify-center">
						<h1 className="text-outline text-6xl text-start font-bold absolute m-2">
							Your Course Guide
						</h1>
					</div>
					<div>
						<h3 className="demo-text absolute z-50 text-white bg-white bg-opacity-20 p-1 rounded-3xl backdrop-blur-sm w-2/3 text-center flex justify-between items-center text-sm">
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
