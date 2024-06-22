import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Footer from './pages/Footer/Footer';
import Banner from './pages/Banner/Banner';
import Destination from './pages/Destination/Destination';
import Courses from './pages/Courses/Courses';
import Teacher from './pages/Teacher/Teacher';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
	return (
		<div>
			{/* <Navbar /> */}
			<Banner />
			<Destination />
			<Courses />
			<Teacher />
			<AboutUs />
			<Footer />
		</div>
	);
}

export default App;
