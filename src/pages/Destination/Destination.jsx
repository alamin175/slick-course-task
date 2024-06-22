import './destination.css';
import supportImg from '/assets/support-2.png';
import premiumImg from '/assets/premium.png';
const Destination = () => {
	return (
		<div className="bg-secondaryColor relative -top-32 py-8 2xl:p-10 rounded-[50px]">
			<p className="text-black absolute mt-48 text-[205px] font-bold left-10 md:left-44 -top-4 inset-0 ">
				*
			</p>
			<h1
				className="relative uppercase text-4xl sm:text-6xl md:text-[80px] text-center font-bold mt-52 text-white "
				data-aos="fade-down-right"
			>
				we help you to reach <br /> your{' '}
				<span className="underline text-primaryColor z-50">
					destination
				</span>
			</h1>

			<div className="details-container grid grid-cols-1 xl:grid-cols-2 gap-10 place-items-center my-24">
				{/* Card-1 */}
				<div data-aos="fade-right" className="p-6 sm:p-10 rounded-[30px]">
					<img className="w-12 sm:w-20" src={supportImg} alt="Support" />
					<h1 className="text-2xl sm:text-4xl font-bold uppercase my-6">
						Always Call Support
					</h1>
					<p className="text-[16px] sm:text-xl my-6">
						what the challenges were and how they overcame them, then
						there's a blog for that. Consequently, if you just want a
						quick blast of eye candy to inspire
					</p>
					<h3 className="flex items-center gap-5 font-bold uppercase text-lg sm:text-2xl  mt-7 sm:mt-12">
						<hr className="w-24 sm:w-36 border-2 border-black " />
						Learn More
					</h3>
				</div>

				{/* Card-2 */}
				<div data-aos="fade-left" className="p-6 sm:p-10 rounded-[30px]">
					<img className="w-12 sm:w-20" src={premiumImg} alt="Support" />
					<h1 className="text-2xl sm:text-4xl font-bold uppercase my-6">
						Premium access
					</h1>
					<p className="text-[16px] sm:text-xl my-6">
						We'll start with the blog you're reading at the moment. At
						Creative Boom, it's our mission to celebrate, inspire and
						support the creative community. As well as
					</p>
					<h3 className="flex items-center gap-5 font-bold uppercase text-lg sm:text-2xl  mt-7 sm:mt-12">
						<hr className="w-24 sm:w-36 border-2 border-black " />
						Learn More
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Destination;
