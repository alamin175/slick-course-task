import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import logo from '/assets/logo.png';
const Footer = () => {
	return (
		<footer id="contact" data-aos="zoom-up">
			{/* Link Footer */}
			<div className="grid lg:grid-cols-2 mx-3 md:mx-20 mt-20 mb-10 uppercase gap-16 md:gap-32">
				<div className="flex justify-between ">
					<div>
						<h1 className="font-bold text-lg  md:text-2xl mb-5">
							Company
						</h1>
						<div className="flex flex-col gap-3 text-gray-700 font-semibold footer-nav text-[12px] md:text-[16px]">
							<a href="#">about us</a>
							<a href="#">services</a>
							<a href="#">community</a>
							<a href="#">courses</a>
						</div>
					</div>
					<div>
						<h1 className="font-bold text-lg  md:text-2xl mb-5">
							support
						</h1>
						<div className="flex flex-col gap-3 text-gray-700 font-semibold footer-nav text-[12px] md:text-[16px]">
							<a href="#">help center</a>
							<a href="#">webinars</a>
							<a href="#">become a mentor</a>
						</div>
					</div>
					<div>
						<h1 className="font-bold text-lg  md:text-2xl mb-5">help</h1>
						<div className="flex flex-col gap-3 text-gray-700 font-semibold footer-nav text-[12px] md:text-[16px]">
							<a href="#">contact us</a>
							<a href="#">faq</a>
							<a href="#">accessibility</a>
						</div>
					</div>
				</div>
				<div className="flex order-first lg:order-last flex-col gap-6 text-gray-700 font-semibold">
					<h1 className="text-5xl md:text-7xl font-bold text-black">
						Newsletter
					</h1>
					<p className="text-[12px] md:text-[15px]">
						get the lates about us and sign up to get 10% off today. never
						miss a single promo
					</p>

					<input
						className="peer border-b border-gray-500 focus:border-[#1B8EF8] bg-transparent py-2 text-[#1B8EF8] focus:outline-none"
						type="text"
						placeholder="Enter Email Address"
					/>

					<button className="bg-secondaryColor p-4 px-12 w-fit rounded-full text-white font-bold uppercase transform transition-all hover:bg-primaryColor hover:text-black ">
						Subscribe
					</button>
				</div>
			</div>

			{/* Company footer */}
			<div className="mx-6 md:mx-20 my-6 flex justify-between items-center">
				<div className="flex items-center gap-2">
					<img src={logo} alt="Logo" />
					<h1 className="text-4xl font-bold">Slick</h1>
				</div>
				<div className="text-3xl flex items-center gap-4">
					<a
						href="https://x.com/al_amin175"
						target="blank"
						className="hover:text-blue-600"
					>
						<FaTwitter />
					</a>
					<a
						href="https://www.instagram.com/mdalaminh052/"
						target="blank"
						className="hover:text-red-600"
					>
						<FaInstagram />
					</a>
					<a
						href="https://www.linkedin.com/in/md-al-amin-6ba828244/"
						target="blank"
						className="hover:text-blue-600"
					>
						<FaLinkedin />
					</a>
				</div>
			</div>

			<hr className="border-2" />
			{/* copyright footer */}
			<div className="uppercase md:flex flex-row-reverse   justify-between mx-6 md:mx-20 my-6 text-center md:text-start">
				<p className="flex gap-8 md:gap-12 font-semibold mb-4 md:mb-0">
					<a className="hover:text-blue-600 hover:underline" href="#">
						{' '}
						terms of service
					</a>
					<a className="hover:text-blue-600 hover:underline" href="#">
						privacy & policy
					</a>
				</p>
				<p>© 2024 seative digital all rights reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
