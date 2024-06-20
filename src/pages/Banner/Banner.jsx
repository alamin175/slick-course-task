import Navbar from '../Navbar/Navbar';
import './Banner.css';
import element from '/assets/element.png';
import arrowimg from '/assets/Arrow.png';

const Banner = () => {
	return (
		<div className="banner">
			<Navbar />
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
	);
};

export default Banner;
