import img1 from '/assets/man-4.png';
import img2 from '/assets/women-1.png';
import img3 from '/assets/women-2.png';

const AboutUs = () => {
	return (
		<div className="bg-secondaryColor pt-20 relative -top-20 rounded-[50px]">
			<h1 className="text-center text-3xl sm:text-5xl md:text-7xl font-extrabold text-white uppercase leading-tight ">
				<span className="text-primaryColor underline">successful</span>{' '}
				people <br /> talk's about us
			</h1>
			<div className="flex justify-between mt-8 ">
				<img
					className="h-1/2 absolute bottom-0 rounded-l-[50px]"
					src={img1}
					alt=""
				/>

				<img
					className="w-[300px] md:w-[600px] mb-24 mx-auto"
					src={img2}
					alt=""
				/>

				<img
					className="h-1/2 absolute bottom-0 right-0 rounded-r-[50px]"
					src={img3}
					alt=""
				/>
			</div>
			<div className="mx-auto relative bottom-32 md:bottom-48 flex w-10/12 md:w-3/5">
				<p className="text-center bg-white p-4 md:p-8 lg:p-12 absolute bg-opacity-10 backdrop-blur-3xl border-[1px] border-gray-400 text-white rounded-[35px] uppercase md:tracking-widest text-[10px]">
					“We'll start with the blog you're reading at the moment. At
					Creative Boom, it's our mission to celebrate, inspire and support
					the creative community.”
				</p>
			</div>
		</div>
	);
};

export default AboutUs;
