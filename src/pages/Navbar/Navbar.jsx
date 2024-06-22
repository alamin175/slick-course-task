import { HashLink } from 'react-router-hash-link';
import logo from '/assets/logo.png';
import { MdMenu } from 'react-icons/md';

const Navbar = () => {
	const listing = (
		<>
			<li className="uppercase font-bold text-lg hover:text-secondaryColor ">
				<HashLink smooth to="/#courses">
					Courses
				</HashLink>
			</li>
			<li className="uppercase font-bold text-lg hover:text-secondaryColor ">
				<HashLink smooth to="/#community">
					Community
				</HashLink>
			</li>
			<li className="uppercase font-bold text-lg hover:text-secondaryColor ">
				<HashLink smooth to="/#contact">
					Contact Us
				</HashLink>
			</li>
		</>
	);
	return (
		/* THis Navbar from DaisyUi */

		<div>
			<div className="navbar bg-base-100 p-3 font-bold sm:p-5">
				<div className="navbar-start">
					<div className="dropdown">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost lg:hidden"
						>
							<MdMenu className="text-3xl" />
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
						>
							{listing}
						</ul>
					</div>
					<div className="flex items-center gap-2">
						<img src={logo} alt="Logo" />
						<h1 className="text-4xl font-bold">Slick</h1>
					</div>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="menu menu-horizontal px-1">{listing}</ul>
				</div>
				<div className="navbar-end">
					<button className="bg-secondaryColor p-3 sm:p-4 text-white sm:uppercase font-semibold text-md sm:px-6 rounded-2xl hover:bg-black  transform transition-all">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
