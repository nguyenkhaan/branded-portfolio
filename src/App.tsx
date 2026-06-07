import './App.css';
import Navbar from './components/Navbar';
import Marquee from './pages/landing/components/Marquee';
import HeroSection from './pages/landing/components/HeroSection';
import LandingPage from './pages/landing/page';
import Footer from './components/Footer';

function App() {
    return (
        <div className="overflow-x-clip">
            <Navbar />
            <main className="pt-36 sm:pt-40 lg:pt-24">
                <HeroSection />
                <Marquee />
            </main>
            <LandingPage /> 
            <Footer /> 
        </div>
    );
}

export default App;
