import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Campus from './Components/Campus/Campus';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Programs from './Components/Programs/Programs';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Programs heading = 'Our Programs' subheading = 'Explore our range of degree programs to achieve your academic goals.'/>
     <Campus heading = 'Top Italian Universities' subheading = 'Discover the leading universities in Italy and their exceptional offerings.'/>
     <Testimonials heading = 'Hear from our students' subheading = 'Dont trust on us? Hear from our students'/>
     <About heading = 'Know about Us' subheading = 'Learn more about our institution and our mission.'/>
     <Contact heading = 'Get in Touch' subheading = 'Let us know how can I help you.'/>
     <Footer/>
    </div>
  );
}

export default App;
